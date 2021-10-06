<template>
  <div id="nav">
      <router-link class="link" to="/">Início</router-link> 
      <router-link class="link" to="/sobre">Sobre</router-link> 
      <router-link class="link" to="/maisinformacoes">Mais Informações</router-link>
    </div>
</template>

<script>

   export default {
    name: "Header",
    
    }
</script>

<style scoped>

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