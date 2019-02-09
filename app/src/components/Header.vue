<template>
  <v-app>
    <div data-app="true" class="application theme--light">
      <div class="application-wrap">
        <div id="header">
          <div class="container grid-list-xs text-xs-center">
            <div class="layout row wrap">
              <div class="flex px-3 xs12 sm8">
                <div class="h-card py-4 card card--flat" style="height: auto;">
                  <p class="text-sm-left mb-0 heading">{{ título }}</p>
                  <p class="text-sm-left mb-0 text">{{ descripción }}</p>
                </div>
              </div>

              <div class="flex download-data xs12 sm4" style="margin: auto;">
                <a
                  href="https://s3.amazonaws.com/images.rompeelmiedo.org/Reportes.csv"
                  class="bold btn"
                  style="position: relative;"
                >
                  <button
                    type="button"
                    class="v-btn v-btn--large theme--light"
                    style="background-color: rgb(150, 169, 63); border-color: rgb(150, 169, 63); color:white; font-size: 20px;"
                  >
                    <div class="btn__content">descargar datos</div>
                  </button>
                  <span class="ripple__container"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- map y grafica -->
        <div class="layout pb-4 row wrap justify-center">
          <div class="flex xs8">
            <div class="layout row wrap">
              <div class="flex xs6">
                <a href="#/" class="card" style="height:auto;">
                  <p class="map text-xs-center mb-0">Map</p>
                </a>
              </div>
              <div class="flex xs6">
                <a
                  href="#/chart"
                  class="router-link-exact-active router-link-active card active"
                  style="height:auto;"
                >
                  <p class="gráficas text-xs-center mb-0">Gráficas</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- segunda parte -->
        <p>resultado: {{ númeroDeCasos }} casos</p>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  data() {
    return {
      descripción: `Visualiza los incidentes documentados por la
                    RRM en el mapa. Filtra por tipo de incidente y
                    geografía, y descarga la información agregada.`,
      título: `AGRESIONES`,
      númeroDeCasos: `120`
    };
  }
};
</script>

<style scoped>
* {
  width: 100%;
}
a {
  text-decoration: none;
  text-transform: uppercase;
}

.application {
  display: flex;
}

.application-wrap {
  margin: 0px;
  border: 0px;
  padding: 0px;
}

#app .layout.pb-4 a.card:hover {
  background-color: #96a93f55;
  color: #ffffff55;
}

#app .layout.pb-4 a.card {
  border-radius: 0;
  background-color: #96a93f;
  font-family: Rajdhani, sans-serif;
  color: #fff;
  font-weight: 700;
  font-size: 35px;
}

#header {
  background-color: #212a2e;
  font-family: "Rajdhani", sans-serif;
  color: white;
}

#header .h-card .heading {
  font-size: 50px;
  font-weight: 700;
}

.layout {
  background-color: #212a2e;
}
.v-btn:before {
  border-radius: inherit;
  color: inherit;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0.12;
  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}
.text-xs-center {
  text-align: center !important;
}
.text {
  font-size: x-large;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.map,
.gráficas {
  background-color: #96a93f;
}
</style>
