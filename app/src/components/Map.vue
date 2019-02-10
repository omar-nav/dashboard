<template>
  <div id="mapid"></div>
</template>
<script>
import * as L from "leaflet";
// import * as d3 from "d3";
import reportesJSON from "./reportes.js";

export default {
  name: "Map",
  props: {
    msg: String
  },
  mounted() {
    var mymap = L.map("mapid").setView([19.39824, -99.148447], 13);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1Ijoib21hci1uYXZhcnJvIiwiYSI6ImNpanN2ZWZxZzBoa291eWx4ZWdsajl1OGIifQ.SH4OG9811nirTGJ3rE4DHw"
      }
    ).addTo(mymap);

    // COLORES
    function qualitativeColors(d) {
      return d === "Amenaza"
        ? "#d21a2f"
        : d === "Ataque a bienes materiales"
        ? "#6292e2"
        : d ===
          "Ataque a redes, comunicaciones digitales y sistemas informáticos"
        ? "#ff8e19"
        : d === "Ataque físico"
        ? "#d0e15c"
        : d === "Bloqueo, alteración o remoción de información"
        ? "#00b7af"
        : d === "Intervención o vigilancia ilegal de comunicaciones"
        ? "#ff47b7"
        : d === "Intimidación y hostigamiento"
        ? "#be2670"
        : d === "Privación de la libertad"
        ? "#ffeb16"
        : d === "Uso ilegítimo del poder público"
        ? "#6c141c"
        : "white";
    }

    function styleReportes(feature) {
      return {
        weight: 0.75,
        opacity: 0.5,
        color: "grey",
        dashArray: "0",
        fillOpacity: 0.9,
        fillColor: qualitativeColors(feature.properties["Tipo de agresión"])
      };
    }
    // CREAR CAJAS AL MOMENTO DE HACER CLIC
    function geojsonPopupReportes(feature, layer) {
      if (["Tipo de agresión"]) {
        return layer.bindPopup(
          "Tipo de agresión:   " + feature.properties["Tipo de agresión"]
        );
      }
    }

    // d3.csv(
    //   "https://s3.amazonaws.com/images.rompeelmiedo.org/Reportes.csv"
    // ).then(function(data) {
    // console.log(data);
    //       });

    let reportesLayer = L.geoJSON(reportesJSON, {
      style: styleReportes,
      onEachFeature: geojsonPopupReportes,
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      }
    });
    reportesLayer.addTo(mymap);

    // for (let i = 0; i < data.length; i++) {
    //   L.marker([parseFloat(data[i].Latitud), parseFloat(data[i].Longitud)])
    //     .addTo(mymap)
    //     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    //     .openPopup();
    // }

    // LEGEND STARTS HERE
    var agresionesLeyenda = L.control({ position: "bottomleft" });
  }
};
</script>
<style scoped>
#mapid {
  height: 400px;
  margin: 0px;
  border: 0px;
  padding: 0px;
}
</style>
