<template>
  <div id="mapid"></div>
</template>
<script>
import * as L from "leaflet";
import * as d3 from "d3";

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
    // las rows del csv es un json
    // es un arreglo de objetos

    // importar el archivo de csv con el metodo de d3
    // use d3.csv to convert it into an array of objects
    d3.csv(
      "https://s3.amazonaws.com/images.rompeelmiedo.org/Reportes.csv"
    ).then(function(data) {
      console.log("the data object is " + data.length + " entries");
      console.log("lat for first element is " + data[0].Latitud);
      for (let i = 0; i < data.length; i++) {
        L.marker([parseFloat(data[i].Latitud), parseFloat(data[i].Longitud)])
          .addTo(mymap)
          .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
          .openPopup();
      }
    });
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
