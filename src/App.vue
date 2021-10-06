<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
    import Header from "./components/Header.vue"
    export default {
       components:{
         Header
       }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  display: flex;
  justify-content: end;
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: white;
}
.link{
  margin-right: 15px;
}
</style>
