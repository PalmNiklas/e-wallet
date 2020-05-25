<template>
  <div class="home">
    <top title="E-wallet"/>
    <!-- <card /> -->
    <card-stack/>
    <router-link to="/add"> Add new Card</router-link>
  </div>
</template>

<script>
import Top from '../components/Top'
// import Card from '../components/Card'
import CardStack from '../components/CardStack'
export default {
  name: 'Home',
  components: {
    Top,
    //  Card,
     CardStack,
  }
}
</script>
