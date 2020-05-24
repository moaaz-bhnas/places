/* ===========================================
  CSS transform support 
  ============================================ */
/*
- I'll use the below functions to detect certain CSS property support (transform: translate).
*/
// Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/
export const isPropertySupported = property =>  property in document.body.style;
// Function from: https://stackoverflow.com/a/36191841/7982963
export const isValueSupported = (prop, value) => {
  const el = document.createElement('div');
  el.style[prop] = value;
  return el.style[prop] === value;
}