var map = L.map('map', {
    center: [-12.07510132546722, -77.0185457410888],
    zoom: 14,
    minZoom: 10,
    maxZoom: 20,
    
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20, subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var curvas = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:curvas de nivel", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
curvas.addTo(map);

var distrito = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:dist_victoria", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
distrito.addTo(map);

var vectorizado = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:Vectorizado", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
vectorizado.addTo(map);


var cp = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:centro_poblado", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
cp.addTo(map);


var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:colegios", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
colegios.addTo(map);


var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:farmacias", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
farmacias.addTo(map);

var grifos = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:grifos", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
grifos.addTo(map);

var hospitales = L.tileLayer.wms("http://localhost:8080/geoserver/web_victoria/wms?", {
    layers: "web_victoria:hospitales", 
    format: 'image/png',
    transparent: true,
    version: '1.1.1',
    attribution: "SENCICO",
    maxZoom: 20, // Ajusta el nivel máximo de zoom
    minZoom: 0,  // Ajusta el nivel mínimo de zoom
    maxNativeZoom: 20, // Nivel máximo soportado por el servidor
    minNativeZoom: 0   // Nivel mínimo soportado por el servidor
});
hospitales.addTo(map);


var baseMaps = {
    "OSM": basemapOSM,
    "Google Satellite":googleSat
};

var overlayMaps = {
    "Curvas de Nivel": curvas,
    "Limite del Distrito": distrito,
    "Pendiente": vectorizado,
    "Centros Poblados":cp,
    "Colegios":colegios,
    "Farmacias":farmacias,
    "Grifos":grifos,
    "Hospitales":hospitales
    
};


L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);


L.control.scale({
    imperial: false
  }).addTo(map);