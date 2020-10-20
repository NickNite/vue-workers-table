<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background: rgb(243, 243, 243);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 3px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  a:hover {
    color: #42b983;
  }
}
</style>
