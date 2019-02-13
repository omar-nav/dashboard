<template>
  <div class="home">
    <Header></Header>
    <Map></Map>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Map from "@/components/Map";
// import Graficas from "./Graficas";

export default {
  name: "home",
  components: {
    // HelloWorld,
    Header,
    Map
  },
  mounted() {}
};
</script>
