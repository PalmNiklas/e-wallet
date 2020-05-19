<template>
<div>
    <top title="Add a new Bank Card"/>
    <card :cardData="cardData" />
    <card-form v-on:addCard="newCard"/>   
    
</div>

</template>
<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'


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
    
  },
  data () {
      return{
    cardData: this.$root.cardData[0]
      }
  }
}

</script>

<style>

</style>