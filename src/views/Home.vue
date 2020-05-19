<template>
  <div class="home">
    <top title="Test Title"/>
    <card/>
    <p>Stack of Cards</p>
    <card-stack/>
  </div>
</template>

<script>
import Top from '../components/Top'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
export default {
  name: 'Home',
  components: {
    Top,
     Card,
     CardStack,
  }
}
</script>
