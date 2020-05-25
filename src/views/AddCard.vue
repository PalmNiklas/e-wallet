<template>
<div>
    <top title="Add a new Bank Card" subtitle="New card"/>
    <card :cardData="placeholder" />
    <card-form v-on:updateCard="updatePlaceholder"/>   
    <router-link to="/" tag="button">Back</router-link>
    
</div>

</template>
<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import store from '../store'


export default {
  // name: 'AddCard',
  components: {
    Top,
     Card,
     CardForm
  },
  methods: {
    newCard(newCard){
    this.cardData = newCard
    
    },
    updatePlaceholder(card){
      console.log("input recieved")
    this.placeholder = card
    }
    
  },
  data () {
      return{
    // cardData: this.$root.cardData[0]
      placeholder: Object
      }
  },
  computed: {
    cardData(){
      return store.getters.getFirst
    }
  }
}

</script>

<style lang="scss" scoped>
button{
  margin:2rem ;
  font-size: 1rem;
}


</style>