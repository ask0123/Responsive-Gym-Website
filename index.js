import AOS from 'aos';
import 'aos/dist/aos.css';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

AOS.init({

  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate', 
  useClassNames: false, 
  disableMutationObserver: false,
  debounceDelay: 50, 
  throttleDelay: 99, 
  offset: 120, 
  delay: 50, 
  duration: 400, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});

var mymap = L.map('mapid').setView([51.404, -0.09], 13);

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
    maxZoom: 15,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1IjoibWFudTEyMzQ1Njc4OSIsImEiOiJja29tajdwMzQwZHRiMzFsNjRiNW9zdG1qIn0.3epHzR4kLOhVoS3ejiItbg',
  }
).addTo(mymap);


          document.addEventListener('DOMContentLoaded', () => {
            const navIcon = document.querySelector('.nav-icon');
            const navMenu = document.querySelector('.header-navigation ul');
            
            navIcon.addEventListener('click', () => {
              // Toggle menu visibility
              navMenu.classList.toggle('show-menu');
              
              // Toggle icon (optional - if you want to change the icon)
              navIcon.classList.toggle('active');
            });
          });
    
