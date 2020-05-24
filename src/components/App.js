import React, { Component } from 'react';
import escapeStringRegexp from 'escape-string-regexp';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import restaurantIcon from '../icons/restaurant.png';
import { clientId, clientSecret } from '../credentials';
import { isPropertySupported, isValueSupported } from '../css3-support';

class App extends Component {
  state = {
    map: null,
    restaurants: [],
    markers: [],
    infoWindowContent: '',
    query: '',
    sidebarShown: true,
    modalOpened: true
  }

  setPlace(place) {
    this.closeModal();
    this.getVenus(place);
    this.setState({
      sidebarShown: true
    })
  }

  updateQuery(query) {
    this.setState({
      query: query.trim()
    })
  }

  getVenus(place) {
    window.fetch(`https://api.foursquare.com/v2/venues/explore?near=${place}&limit=20&section=food&v=20181209&client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => response.json())
      .then(data => {
        const restaurants = data.response.groups[0].items;
          this.setState({
            restaurants
          });
          this.renderMap();
      })
  }

  renderMap() {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBZcpHWK64araDQYUAdlRA37_5PZEQe-GM&v=3&callback=initMap');
    window.initMap = this.initMap.bind(this);
  }

  initMap() {
    this.setState({
      map: new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 29.28, lng: 47.976},
        zoom: 12,
        mapTypeId: 'roadmap'
      })
    });

    this.addMarkers();
  }

  addMarkers() {
    const {map, restaurants} = this.state;
    const markers = [];
    const bounds = new window.google.maps.LatLngBounds();
    const infoWindow = new window.google.maps.InfoWindow();

    restaurants.forEach(restaurant => {
       // Marker
      const marker = new window.google.maps.Marker({
        position: restaurant.venue.location,
        map: map,
        title: restaurant.venue.name,
        icon: restaurantIcon,
        animation: window.google.maps.Animation.DROP
      });

      marker.addListener('click', () => {
        // (1) Animate
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(() => {
          marker.setAnimation(null);
        }, 500)

        // (2) Get the restaurant details and open the info window
        const {restaurants} = this.state;
        const restaurant = restaurants.find(restaurant => restaurant.venue.name === marker.title);
        const id = restaurant.venue.id;
        window.fetch(`https://api.foursquare.com/v2/venues/${id}?v=20181209&client_id=${clientId}&client_secret=${clientSecret}`)
          .then(response => response.json())
          .then(data => {
            const restaurant = data.response.venue;

            const infoWindowContent = (function getInfoWindowContent() {
              // Photo
              const photoGroup = restaurant.photos.groups.find(group => group.items.length);
              const photoObj = photoGroup ? photoGroup.items[0] : null;
              const imgUrl = photoObj ? `${photoObj.prefix}${Math.round(photoObj.width/4)}x${Math.round(photoObj.height/4)}${photoObj.suffix}` : null;
              // Photo

              const {name, rating, ratingColor, shortUrl} = restaurant;
              const categories = restaurant.categories.map(category => category.name);
              const likes = (restaurant.likes) ? restaurant.likes.count : null;
              const {formattedAddress} = restaurant.location;

              // Contacts
              const contacts = [];
              const phone = (restaurant.contact.formattedPhone) ? restaurant.contact.formattedPhone : null;
              const facebook = (restaurant.contact.facebook) ? 'https://www.facebook.com/' + restaurant.contact.facebook : null;
              const twitter = (restaurant.contact.twitter) ? 'https://twitter.com/' + restaurant.contact.twitter : null;
              const instagram = (restaurant.contact.instagram) ? 'https://www.instagram.com/' + restaurant.contact.instagram : null;
              contacts.push(phone, facebook, twitter, instagram);
              // Contacts

              const infoWindowContent = 
              `<div id="info-window">
                ${imgUrl ? `<img src="${imgUrl}" alt="${name}">` : ''}
                <h3>${name}</h3>
                ${categories.length ? `<ul id="categories">
                  ${categories[0] ? `<li>${categories[0]}</li>` : ''}
                  ${categories[1] ? `<li>${categories[1]}</li>` : ''}
                  ${categories[2] ? `<li>${categories[2]}</li>` : ''}
                </ul>` : ''}
                ${rating ? `<p id="rating">Rating: <span style="color: #${ratingColor}">${rating}</span></p>` : ''}
                ${likes ? `<p id="likes">Likes: ${likes}</p>` : ''}
                <p id="formattedAddress">
                  ${formattedAddress[0] ? formattedAddress[0] + '<br>' : ''}
                  ${formattedAddress[1] ? formattedAddress[1] + '<br>' : ''}
                  ${formattedAddress[2] ? formattedAddress[2] : ''}
                </p>
                ${contacts.some(contact => contact) ? `<ul id="contacts">
                  ${phone ? `<li><a href="tel:${phone}">${phone}</a></li>` : ''}
                  ${facebook ? `<li><a href="${facebook}">Facebook</a></li>` : ''}
                  ${instagram ? `<li><a href="${instagram}">Instagram</a></li>` : ''}
                  ${twitter ? `<li><a href="${twitter}">Twitter</a></li>` : ''}
                  ${shortUrl ? `<li><a href="${shortUrl}">${shortUrl}</a></li>` : ''}
                </ul>` : ''}
              </div>`;

              return infoWindowContent;
            })();
              
              infoWindow.setContent(infoWindowContent);
              infoWindow.open(map, marker);
              // Toggle Sidebar
              if (window.innerWidth <= 520) {
                this.closeSideBar();
              }
          })
      })

      markers.push(marker);
      bounds.extend(marker.position);
    })

    map.fitBounds(bounds);

    this.setState({
      markers
    })
  }

  openInfoWindow(name) {
    const {markers} = this.state;
    const marker = markers.find(marker => marker.title === name);
    window.google.maps.event.trigger(marker, 'click');
  }

  toggleSidebar() {
    this.setState(prev => ({
      sidebarShown: !prev.sidebarShown
    }))
  }

  closeSideBar() {
    this.setState({
      sidebarShown: false
    })
  }

  closeModal() {
    this.setState({
      modalOpened: false
    })
    const activeBeforeModal = window.document.getElementById('place-btn');
    activeBeforeModal.focus();
  }

  openModal() {
    this.setState({
      modalOpened: true
    })
  }

  render() {
    const {query, restaurants, markers, map, sidebarShown, modalOpened} = this.state;
    let shownRestaurants;
    if (query) {
      const match = new RegExp(escapeStringRegexp(query), 'i');
      // restaurants
      shownRestaurants = restaurants.filter(restaurant => match.test(restaurant.venue.name));
      // Markers to remove
      const markersToHide = markers.filter(marker => !match.test(marker.title));
      markersToHide.forEach(marker => {
        marker.setMap(null);
      })
      // Markers to show
      const markersToShow = markers.filter(marker => match.test(marker.title));
      markersToShow.forEach(marker => {
        marker.setMap(map);
      })
    } else {
      shownRestaurants = restaurants;
      markers.forEach(marker => {
        marker.setMap(map);
      })
    }

    return (
      <div id="app">
        <Header 
          sidebarShown={sidebarShown} 
          modalOpened={modalOpened}
          openModal={() => this.openModal()}
          toggleSidebar={() => this.toggleSidebar()}
        />
        {
          (isPropertySupported('transform') && isValueSupported('transform', 'translateX(-100%)')) ?
          // Browsers that support 2d-transforms
          <main className="transforms" role="main">
            <Sidebar 
              sidebarShown={sidebarShown}
              restaurantsCount={restaurants.length} 
              restaurants={shownRestaurants} 
              openInfoWindow={i => this.openInfoWindow(i)}
              updateQuery={query => this.updateQuery(query)}
            />
            <div id="map"></div>
          </main> :
          // Browsers that don't
          <main className="no-transforms" role="main">
            <Sidebar 
              sidebarShown={sidebarShown}
              restaurantsCount={restaurants.length} 
              restaurants={shownRestaurants} 
              openInfoWindow={i => this.openInfoWindow(i)}
              updateQuery={query => this.updateQuery(query)}
            />
            <div id="map"></div>
          </main>
        }
        <Footer />
        {
          modalOpened &&
          <Modal 
            closeModal={() => this.closeModal()}
            setPlace={(place) => this.setPlace(place)}
          />
        }
      </div>
    );
  }
}

function loadScript(url) {
  const index = document.querySelector('script');
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;