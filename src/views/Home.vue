<template>
  <div class="home">
    <top title="E-wallet" subtitle="Active card"/>
    <card class="active-card" :cardData="cardData" />
    <div class="stack">
    <card-stack/>
    </div>
    
    <router-link to="/add" tag="span"> <button>Add new Card</button> </router-link>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
import store from '../store'
export default {
  name: 'Home',
  components: {
    Top,
     Card,
     CardStack,
  },

   computed: {
    cardData(){
      return store.getters.getFirst
    }
   }
}
</script>
<style lang="scss" >
.stack{
  margin: 2rem;
}

button{
  font-size: 2rem;
    border: 1px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  // font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
}
button:hover{
    transform: translateY(-0.2rem);
  }
</style>
