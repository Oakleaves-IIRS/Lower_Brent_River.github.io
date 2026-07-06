// Create map
var map = L.map('map').setView([51.5, -0.12], 10);

// OpenStreetMap base layer
var osm = L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }
);

// OpenTopoMap
var topo = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 17,
        attribution: '&copy; OpenTopoMap'
    }
);

// CartoDB Positron
var cartoLight = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {
        attribution: '&copy; CARTO'
    }
);

// Esri World Imagery (Satellite)
var satellite = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: '&copy; Esri'
    }
);

satellite.addTo(map);

// GeoServer WMS URL
var geoserverUrl =
    'http://localhost:8081/geoserver/test_1_KE_Brent/wms';

// River_Water_Body layer
var River_Water_Body = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:River_Water_Body',
        format: 'image/png',
        transparent: true
    }
);


// Lake_Water_Body layer
var Lake_Water_Body = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:Lake_Water_Body',
        format: 'image/png',
        transparent: true
    }
);

// River_Water_Body_Catchment layer
var River_Water_Body_Catchment = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:River_Water_Body_Catchment',
        format: 'image/png',
        transparent: true
    }
);


// Surface_Water_Operational_Catchment layer
var Surface_Water_Operational_Catchment = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:Surface_Water_Operational_Catchment',
        format: 'image/png',
        transparent: true
    }
);

// London_Ward layer
var London_Ward = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:London_Ward',
        format: 'image/png',
        transparent: true
    }
);

// London_Borough layer
var London_Borough = L.tileLayer.wms(
    geoserverUrl,
    {
        layers: 'test_1_KE_Brent:London_Borough',
        format: 'image/png',
        transparent: true
    }
);


// Add layers to map
River_Water_Body.addTo(map);
Lake_Water_Body.addTo(map);
River_Water_Body_Catchment.addTo(map)
Surface_Water_Operational_Catchment.addTo(map)
London_Ward.addTo(map);
London_Borough.addTo(map);

// Layer control
var overlayMaps = {
    
    "London_Borough": London_Borough,
    "London_Ward": London_Ward,
    "Surface_Water_Operational_Catchment":Surface_Water_Operational_Catchment,
    "River_Water_Body_Catchment":River_Water_Body_Catchment,
    "Lake_Water_Body": Lake_Water_Body,
    "River_Water_Body": River_Water_Body
    
};

var baseMaps = {
    "OpenStreetMap": osm,
    "Topographic": topo,
    "Carto Light": cartoLight,
    "Satellite": satellite
};
// Add layers to map
osm.addTo(map);
Lake_Water_Body.addTo(map);
topo.addTo(map)
cartoLight.addTo(map)
satellite.addTo(map);

L.control.layers(
    baseMaps,
    overlayMaps
).addTo(map);
