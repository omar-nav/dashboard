<template>
  <div class="home">
    <Header></Header>
    <Map></Map>
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      reports: []
    };
  },
  methods: {
    showAll() {
      console.log("received from API");

      axios
        .get("http://localhost:1337/report", {})
        .then(response => {
          this.reports = response.data.result;
          console.log(
            "here's the reports collection as an array of objects",
            this.reports
          );
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.showAll();
  }
};
</script>
