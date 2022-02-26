mapboxgl.accessToken ="pk.eyJ1IjoiYWFhbGV4eiIsImEiOiJjbDA0ZWZoemEwZ2t3M2RwZGY3NjliZW85In0.4HgWBp3aAJy-3SJ4HsrAjA";
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9
  });