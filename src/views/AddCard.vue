<template>
<div>
    <top title="Add a new Bank Card"/>
    <card :cardData="cardData"/>
    <card-form/>   
    
</div>

</template>
<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardForm from '../components/CardForm'


export default {
  name: 'AddCard',
  components: {
    Top,
     Card,
     CardForm
  },
  methods: {
    //   getData(){
    //       data = this.$root.card
    //   }
  },
  data () {
      return{
    cardData: this.$root.cardData
      }
  }
}

</script>

<style>

</style>