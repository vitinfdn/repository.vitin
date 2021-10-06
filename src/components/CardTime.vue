<template>
  <div class="card-time">
      <img alt="Vue logo" class="image-brasao" :src="time">
      <div class="descricao"> 
        <span> {{ nome }}</span>
        <span>Local: {{ local }} </span>
      </div>
    </div>
</template>

<script>
import logo from '@/assets/escGalo.png'
export default {
    name:"CardTime",
    data(){
    return{
      time:logo,
      nome:"Atlético Mineiro",
      local: "Belo Horizonte",
    }
  }
}
</script>

<style scoped>
.image-brasao{
    widows: 80px;
    height: 80px;
    margin:30px
  }

.descricao{
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
}

.card-time{
  background: cornsilk;
  width: 200px;
}
</style>
