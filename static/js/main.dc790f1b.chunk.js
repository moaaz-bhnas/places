(this.webpackJsonpplaces=this.webpackJsonpplaces||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/google.9367e4e3.svg"},function(e,t,n){e.exports=n.p+"static/media/foursquare.dcea39ad.svg"},function(e,t,n){e.exports=n.p+"static/media/menu.b6b91991.svg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkBRgNGRZ7QIwuAAABLUlEQVQ4y42TvUoDQRSFPzZgxNhoDOob+IfGVhMI+B4qFhZ2ig8iNgpR8QHESraUgA8gBM0GtTI2WgdjUjgWTi65O7PZnClm99zv3GF2diCuMudEtGkTcUaJoZonxMTGHXNJ+CItBzcY3lnw4dO8eXGD4ZUpN3Aq5Q5Vttnhgh/xTuJ4ga4ttVgSd5kP63aZ0YE96VVWfkX83X8jsIWinR95UIEadfu0rgP9T9d09hZpoh/o2DnvBPKaCGJ9ShQUPitn3dB9irK5GzLiZrgVfzW+9JOU7tkgIGCTmnh1HB2rs+3RU+9HbiDHZ+Kv8cUkpK0xOA7xKkvTi78wToIq/HoCWwzRpYNXGaocDYU/M0GKVvgeuBlraTjAgQT2R8EBrjEYrkbFIUtIyJiv9AeSaciQnQEp7wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0yNFQxMzoyNToyMiswMDowMHkh3mEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMjRUMTM6MjU6MjIrMDA6MDAIfGbdAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n(28)},,,,,function(e,t,n){},function(e,t,n){},function(e,t){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var a=arguments[1],r=0;r<n;){var o=t[r];if(e.call(a,o,r,t))return o;r++}},configurable:!0,writable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,n;if(null==this)throw new TypeError("this is null or not defined");var a=Object(this),r=a.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=0;n<r;){var o;n in a&&(o=a[n],e.call(t,o,n,a)),n++}}),Array.prototype.map||(Array.prototype.map=function(e){var t,n,a;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),o=r.length>>>0;if("function"!==typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=new Array(o),a=0;a<o;){var i,c;a in r&&(i=r[a],c=e.call(t,i,a,r),n[a]=c),a++}return n}),Array.prototype.some||(Array.prototype.some=function(e,t){"use strict";if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!==typeof e)throw new TypeError;for(var n=Object(this),a=n.length>>>0,r=0;r<a;r++)if(r in n&&e.call(t,n[r],r,n))return!0;return!1}),Array.prototype.filter||(Array.prototype.filter=function(e,t){"use strict";if("Function"!==typeof e&&"function"!==typeof e||!this)throw new TypeError;var n=this.length>>>0,a=new Array(n),r=this,o=0,i=-1;if(void 0===t)for(;++i!==n;)i in this&&e(r[i],i,r)&&(a[o++]=r[i]);else for(;++i!==n;)i in this&&e.call(t,r[i],i,r)&&(a[o++]=r[i]);return a.length=o,a}),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(e){if(null==this)throw new TypeError("this is null or not defined");for(var t=Object(this),n=t.length>>>0,a=arguments[1],r=a>>0,o=r<0?Math.max(n+r,0):Math.min(r,n),i=arguments[2],c=void 0===i?n:i>>0,l=c<0?Math.max(n+c,0):Math.min(c,n);o<l;)t[o]=e,o++;return t}})},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(20),n(21),n(22),n(23),n(24),n(1)),l=n(2),s=n(4),u=n(3),d=n(10),f=n.n(d),p=function(e){return r.a.createElement("p",{id:"status",role:"status","aria-live":"polite","aria-atomic":"true"},e.restaurantsCount," places")},h=r.a.forwardRef((function(e,t){var n=e.name,a=e.index,o=e.tabIndex,i=e.openInfoWindow,c=e.handleKeyDown;return r.a.createElement("li",null,r.a.createElement("button",{ref:t,type:"button",role:"menuitem",tabIndex:o,onClick:function(){return i(n)},onKeyDown:function(e){return c(e,a)}},n))})),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={focusableIndex:0},e.references=Array(20).fill(0).map((function(){return r.a.createRef()})),e}return Object(l.a)(n,[{key:"handleKeyDown",value:function(e,t){if(35===e.keyCode||36===e.keyCode||38===e.keyCode||40===e.keyCode){e.preventDefault();var n={35:"end",36:"home",38:"up",40:"down"}[e.keyCode],a=this.determineNextIndex(t,n);this.setState({focusableIndex:a}),this.blurAndFocus(t,a)}}},{key:"determineNextIndex",value:function(e,t){var n,a=this.props.restaurants.length-1;switch(t){case"down":n=e===a?0:e+1;break;case"up":n=0===e?a:e-1;break;case"home":n=0;break;case"end":n=a}return n}},{key:"blurAndFocus",value:function(e,t){this.references[e].current.blur(),this.references[t].current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.restaurants,a=t.openInfoWindow,o=t.sidebarShown,i=Array(n.length).fill("-1");return o&&(i[this.state.focusableIndex]="0"),r.a.createElement("ul",{id:"restaurants-list",role:"menu"},n.map((function(t,n){return r.a.createElement(h,{ref:e.references[n],name:t.venue.name,index:n,tabIndex:i[n],key:n,openInfoWindow:a,handleKeyDown:function(t,n){return e.handleKeyDown(t,n)}})})))}}]),n}(a.Component),w=function(e){var t=e.sidebarShown,n=e.query,a=e.updateQuery,o=r.a.createRef();return r.a.createElement("form",{id:"search-form"},r.a.createElement("input",{ref:o,"aria-label":"Search Restaurants",id:"search-input",type:"search",placeholder:"Search Place ...",tabIndex:t?"0":"-1",value:n,onChange:function(e){return a(e.target.value)}}))},y=function(e){var t=e.sidebarShown,n=e.restaurantsCount,a=e.restaurants,o=e.openInfoWindow,i=e.updateQuery;return r.a.createElement("div",{id:"sidebar","data-shown":t?"true":"false"},r.a.createElement(w,{updateQuery:function(e){return i(e)},sidebarShown:t}),r.a.createElement(p,{restaurantsCount:n}),r.a.createElement(m,{restaurants:a,openInfoWindow:o,sidebarShown:t}))},g=n(11),v=n.n(g),A=n(12),b=n.n(A),E=function(){return r.a.createElement("footer",{role:"contentinfo"},r.a.createElement("p",null,r.a.createElement("small",null,"Powered by ",r.a.createElement("img",{className:"api-icon",src:v.a,alt:"Google maps icon"})," ",r.a.createElement("a",{href:"https://developers.google.com/maps/documentation/"},r.a.createElement("b",null,"Google Maps"))," and ",r.a.createElement("img",{className:"api-icon",src:b.a,alt:"Foursquare icon"})," ",r.a.createElement("a",{href:"https://developer.foursquare.com/"},r.a.createElement("b",null,"Foursquare"))," APIs.")),r.a.createElement("p",null,r.a.createElement("small",null,"Icons made by ",r.a.createElement("a",{href:"http://www.freepik.com",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY"),".")))},k=n(13),S=n.n(k),M=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={smallScreen:null},e.detectScreenWidth=function(){var t=window.innerWidth,n=e.state.smallScreen;t>528&&n?e.setState({smallScreen:!1}):t<528&&!n&&e.setState({smallScreen:!0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.detectScreenWidth(),window.addEventListener("resize",this.detectScreenWidth)}},{key:"render",value:function(){this.state.smallScreen;var e=this.props,t=e.sidebarShown,n=e.modalOpened,a=e.openModal,o=e.toggleSidebar;return r.a.createElement("header",{id:"main-header",role:"banner"},r.a.createElement("h1",null,"Places"),r.a.createElement("button",{type:"button",id:"menu-btn",onClick:o,"aria-controls":"sidebar","aria-pressed":t?"true":"false","aria-expanded":t?"true":"false"},r.a.createElement("img",{src:S.a,alt:"Menu Icon"})),r.a.createElement("button",{type:"button",id:"place-btn",onClick:a,"aria-controls":"modal","aria-pressed":n?"true":"false","aria-expanded":n?"true":"false"},"change place"))}}]),n}(a.Component),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).input=r.a.createRef(),e.closeBtn=r.a.createRef(),e}return Object(l.a)(n,[{key:"handleKeyDown",value:function(e){9===e.keyCode?e.shiftKey?e.target===this.input.current&&(e.preventDefault(),this.closeBtn.current.focus()):e.target===this.closeBtn.current&&(e.preventDefault(),this.input.current.focus()):27===e.keyCode&&this.props.closeModal()}},{key:"componentDidMount",value:function(){this.input.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.closeModal,a=t.setPlace;return r.a.createElement("div",{id:"modal-background",onClick:function(e){"modal-background"===e.target.id&&n()}},r.a.createElement("div",{id:"modal",role:"dialog","aria-label":"select a place to explore its restaurants"},r.a.createElement("form",{id:"select-place-form",onSubmit:function(t){t.preventDefault(),a(e.input.current.value)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"place"},"Place: "),r.a.createElement("input",{ref:this.input,type:"text",id:"place",onKeyDown:function(t){return e.handleKeyDown(t)},required:!0}),r.a.createElement("ul",{id:"description"},r.a.createElement("li",null,"Could be a country, city or neighborhood (e.g. USA, Chicago, Gary)."),r.a.createElement("li",null,"It should be written properly in English."))),r.a.createElement("div",{id:"submit-container"},r.a.createElement("button",{id:"submit-btn",type:"submit"},"submit"))),r.a.createElement("button",{ref:this.closeBtn,id:"close-btn",type:"button",onClick:n,onKeyDown:function(t){return e.handleKeyDown(t)}},r.a.createElement("abbr",{title:"Close"},"\u292b"))))}}]),n}(a.Component),I=n(14),j=n.n(I),B="Q1M30BNFFRY1Y1OXSHNW2SNN3YZIPTTDAU1URXSQLU2RJQ1Y",O="DXNF0IXUZU0ARPV1U0I0MU5BCDZP2C31CPTPGDF02SYBM5PY";var x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={map:null,restaurants:[],markers:[],infoWindowContent:"",query:"",sidebarShown:!0,modalOpened:!0},e}return Object(l.a)(n,[{key:"setPlace",value:function(e){this.closeModal(),this.getVenus(e),this.setState({sidebarShown:!0})}},{key:"updateQuery",value:function(e){this.setState({query:e.trim()})}},{key:"getVenus",value:function(e){var t=this;window.fetch("https://api.foursquare.com/v2/venues/explore?near=".concat(e,"&limit=20&section=topPicks&v=20181209&client_id=").concat(B,"&client_secret=").concat(O)).then((function(e){return e.json()})).then((function(e){var n=e.response.groups[0].items;t.setState({restaurants:n}),t.renderMap()}))}},{key:"renderMap",value:function(){!function(e){var t=document.querySelector("script"),n=document.createElement("script");n.src=e,n.async=!0,n.defer=!0,t.parentNode.insertBefore(n,t)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyBZcpHWK64araDQYUAdlRA37_5PZEQe-GM&v=3&callback=initMap"),window.initMap=this.initMap.bind(this)}},{key:"initMap",value:function(){this.setState({map:new window.google.maps.Map(document.getElementById("map"),{center:{lat:29.28,lng:47.976},zoom:12,mapTypeId:"roadmap"})}),this.addMarkers()}},{key:"addMarkers",value:function(){var e=this,t=this.state,n=t.map,a=t.restaurants,r=[],o=new window.google.maps.LatLngBounds,i=new window.google.maps.InfoWindow;a.forEach((function(t){var a=new window.google.maps.Marker({position:t.venue.location,map:n,title:t.venue.name,icon:j.a,animation:window.google.maps.Animation.DROP});a.addListener("click",(function(){a.setAnimation(window.google.maps.Animation.BOUNCE),setTimeout((function(){a.setAnimation(null)}),500);var t=e.state.restaurants.find((function(e){return e.venue.name===a.title})).venue.id;window.fetch("https://api.foursquare.com/v2/venues/".concat(t,"?v=20181209&client_id=").concat(B,"&client_secret=").concat(O)).then((function(e){return e.json()})).then((function(t){var r=t.response.venue,o=function(){var e=r.photos.groups.find((function(e){return e.items.length})),t=e?e.items[0]:null,n=t?"".concat(t.prefix).concat(Math.round(t.width/4),"x").concat(Math.round(t.height/4)).concat(t.suffix):null,a=r.name,o=r.rating,i=r.ratingColor,c=r.shortUrl,l=r.categories.map((function(e){return e.name})),s=r.likes?r.likes.count:null,u=r.location.formattedAddress,d=[],f=r.contact.formattedPhone?r.contact.formattedPhone:null,p=r.contact.facebook?"https://www.facebook.com/"+r.contact.facebook:null,h=r.contact.twitter?"https://twitter.com/"+r.contact.twitter:null,m=r.contact.instagram?"https://www.instagram.com/"+r.contact.instagram:null;return d.push(f,p,h,m),'<div id="info-window">\n                '.concat(n?'<img src="'.concat(n,'" alt="').concat(a,'">'):"","\n                <h3>").concat(a,"</h3>\n                ").concat(l.length?'<ul id="categories">\n                  '.concat(l[0]?"<li>".concat(l[0],"</li>"):"","\n                  ").concat(l[1]?"<li>".concat(l[1],"</li>"):"","\n                  ").concat(l[2]?"<li>".concat(l[2],"</li>"):"","\n                </ul>"):"","\n                ").concat(o?'<p id="rating">Rating: <span style="color: #'.concat(i,'">').concat(o,"</span></p>"):"","\n                ").concat(s?'<p id="likes">Likes: '.concat(s,"</p>"):"",'\n                <p id="formattedAddress">\n                  ').concat(u[0]?u[0]+"<br>":"","\n                  ").concat(u[1]?u[1]+"<br>":"","\n                  ").concat(u[2]?u[2]:"","\n                </p>\n                ").concat(d.some((function(e){return e}))?'<ul id="contacts">\n                  '.concat(f?'<li><a href="tel:'.concat(f,'">').concat(f,"</a></li>"):"","\n                  ").concat(p?'<li><a href="'.concat(p,'">Facebook</a></li>'):"","\n                  ").concat(m?'<li><a href="'.concat(m,'">Instagram</a></li>'):"","\n                  ").concat(h?'<li><a href="'.concat(h,'">Twitter</a></li>'):"","\n                  ").concat(c?'<li><a href="'.concat(c,'">').concat(c,"</a></li>"):"","\n                </ul>"):"","\n              </div>")}();i.setContent(o),i.open(n,a),window.innerWidth<=520&&e.closeSideBar()}))})),r.push(a),o.extend(a.position)})),n.fitBounds(o),this.setState({markers:r})}},{key:"openInfoWindow",value:function(e){var t=this.state.markers.find((function(t){return t.title===e}));window.google.maps.event.trigger(t,"click")}},{key:"toggleSidebar",value:function(){this.setState((function(e){return{sidebarShown:!e.sidebarShown}}))}},{key:"closeSideBar",value:function(){this.setState({sidebarShown:!1})}},{key:"closeModal",value:function(){this.setState({modalOpened:!1}),window.document.getElementById("place-btn").focus()}},{key:"openModal",value:function(){this.setState({modalOpened:!0})}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.query,o=n.restaurants,i=n.markers,c=n.map,l=n.sidebarShown,s=n.modalOpened;if(a){var u=new RegExp(f()(a),"i");e=o.filter((function(e){return u.test(e.venue.name)})),i.filter((function(e){return!u.test(e.title)})).forEach((function(e){e.setMap(null)})),i.filter((function(e){return u.test(e.title)})).forEach((function(e){e.setMap(c)}))}else e=o,i.forEach((function(e){e.setMap(c)}));return r.a.createElement("div",{id:"app"},r.a.createElement(M,{sidebarShown:l,modalOpened:s,openModal:function(){return t.openModal()},toggleSidebar:function(){return t.toggleSidebar()}}),"transform"in document.body.style&&function(e,t){var n=document.createElement("div");return n.style[e]=t,n.style[e]===t}("transform","translateX(-100%)")?r.a.createElement("main",{className:"transforms",role:"main"},r.a.createElement(y,{sidebarShown:l,restaurantsCount:o.length,restaurants:e,openInfoWindow:function(e){return t.openInfoWindow(e)},updateQuery:function(e){return t.updateQuery(e)}}),r.a.createElement("div",{id:"map"})):r.a.createElement("main",{className:"no-transforms",role:"main"},r.a.createElement(y,{sidebarShown:l,restaurantsCount:o.length,restaurants:e,openInfoWindow:function(e){return t.openInfoWindow(e)},updateQuery:function(e){return t.updateQuery(e)}}),r.a.createElement("div",{id:"map"})),r.a.createElement(E,null),s&&r.a.createElement(C,{closeModal:function(){return t.closeModal()},setPlace:function(e){return t.setPlace(e)}}))}}]),n}(a.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/places",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/places","/service-worker.js");T?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):U(e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.dc790f1b.chunk.js.map