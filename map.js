mapboxgl.accessToken ="pk.eyJ1IjoiYWFhbGV4eiIsImEiOiJjbDA0ZWZoemEwZ2t3M2RwZGY3NjliZW85In0.4HgWBp3aAJy-3SJ4HsrAjA";
const bounds = 
[
    [19, 41], //southwest
    [48, 55] //northeast
]

const map = new mapboxgl.Map({
    container: "map",
    style: 'mapbox://styles/aaalexz/cl05540ea001v14ro1vs3s8u7',
    center: [31, 48], // start pos [lng, lat]
    zoom: 6,
    maxBounds: bounds
  });
  
map.addControl(new mapboxgl.NavigationControl());


// When a click event occurs on a feature in the places layer, open a popup at the
// location of the feature, with description HTML from its properties.
map.on('click', 'places', (e) => {
    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
     
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
     
    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(description)
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', () => {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    });
    


