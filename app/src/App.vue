<template>
  <div id="app">
    <header/>
    <router-view/>
  </div>
</template>
<script>
// @ siempre va a la carpeta src
import Header from "@/components/Header";

export default {};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 0px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  padding: 0px;
  border: 0px;
  margin: 0px;
}
</style>
