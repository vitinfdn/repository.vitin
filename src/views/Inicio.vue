<template>
  <div class="home">
    <img alt="Vue logo" class="escudo-galo" :src="time">
    <HelloWorld msg="Seja Bem-Vindo ao Blog Galo Primos!!!"/>
    <div class="descricao">
    <span>{{textoApoio}}</span>  
    <span>{{nome}}</span>
    <span>{{local}}</span>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import logo from '@/assets/escGalo.png'

export default {
  name: 'Inicio',
  components: {
    HelloWorld
  },
  data(){
    return{
      time:logo,
      nome: "Clube Atlético Mineiro",
      local: "O MAIOR CLUBE DE MINAS",
      textoApoio: "O BLOG MAIS CLUBISTA E CORNETEIRO DO BRASIL!"
    }
  }
}
</script>

<style scoped>
.escudo-galo{
  width: 75%;
  height: 75%;
}
.descricao{
  display: flex;
  flex-direction: column;
  font: 80px;
  color: black;
}
</style>
