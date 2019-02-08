<template>
  <div class="header">
    <v-container>
      <v-layout row wrap>
        <v-card>
          <v-flex text-sm-left mb-0 heading>agresiones</v-flex>
          <v-flex
            text-sm-left
            mb-0
            text
          >Visualiza los incidentes documentados por la RRM en el mapa. Filtra por tipo de incidente y geografía, y descarga la información agregada.</v-flex>
        </v-card>
        <v-flex sx12 sm4>
          <button>descargar datos</button>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss">
.header {
  background-color: #212a2e;
}
</style>
