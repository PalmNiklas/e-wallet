<template>

    <article class="card-stack">
        <card class="card" v-for="(card, index) in getCards" v-bind:key="index" :cardData="card" @getCard="getCard()"/>
        
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
         getCard: function(){
            console.log("card clicked")
            return store.getters.getFirst
        }

    },
    computed: {
        getCards(){
        return store.getters.getAll
        },
       

    }
    
}
</script>

<style lang="scss" scoped>
 
.active{
    display: none;
}


.card-stack{
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 6rem;
    height: 100%;
    background-color: grey;
    display: grid;
    // margin-top: 10rem;
    place-items: center;
    ;
    // overflow: hidden;

    
}
.card{
    box-shadow: 4px 4px 15px 2px rgba($color: #000000, $alpha: 0.75);
    margin: -5rem;
    transition: 0.3s;

}
.card:hover{
transform: translateY(-1rem);
}

.card:hover ~ .card,
.card:focus-within ~ .card {
    transform: translateY(5rem);
}
</style>


