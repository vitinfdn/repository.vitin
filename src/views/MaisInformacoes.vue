<template>
    <div>
        <h1>{{ titulo }}</h1>
        <span>{{subTitle}}</span>
        <Card />
        <b-button variant="success" @click="exibirMensagem">Clique Aqui!</b-button>
    </div>
</template>

<script>
    import Card from "../components/Card.vue"

export default {
    name: "maisinformacoes",
    data() {
        return {
            titulo: "Mais Informações",
            subTitle: "Leia mais",
               }
    },
    components: {
        Card
    },
    methods:{
        exibirMensagem(){
            window.location.href = 'https://atletico.com.br/'
        }

    }
}
</script>

<style>

</style>