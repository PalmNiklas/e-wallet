<template>
<article class="card-stack">
    <card v-for="(card, index) in getCards" v-bind:key="index" :cardData="card"/>
    
</article>
</template>
<script>
import Card from '../components/Card'
import store from '../store'
export default {
    components: {
        Card,

    },
    data: () => ({

    }),
    
    methods: {

    },
    computed: {
        getCards(){
        return store.getters.getAll
        }
    }
    
}
</script>

<style lang="scss" scoped>
 
.active{
    display: none;
}

</style>


