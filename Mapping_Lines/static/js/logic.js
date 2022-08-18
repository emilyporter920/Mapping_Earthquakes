// Console log to test if it is working
console.log('test');

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Add tilelayer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Add the tilelayer to the map
streets.addTo(map);

// Coordinates for each point to be used in the line
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "yellow",
    dashArray: '20, 20',
    dashOffset: '20',
    weight: 4, 
    opacity: 0.9
}).addTo(map);

