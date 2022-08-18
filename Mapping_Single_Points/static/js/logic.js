// Console log to check if the code is working
console.log('test');

// Create the map object with a center and zoom level of 14 (L. because it is a leaflet function)
let map= L.map('mapid').setView([34.0522, -118.2437], 14);

// // Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522,-118.2437]).addTo(map);

// Add a circle to the map
L.circle([34.0522,-118.2437], {
    radius: 300,
    color: "#F9E79F",
    fillColor: '#ffffa1',
    opacity: 10
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);