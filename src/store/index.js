import Vue from 'vue'
import Vuex from 'vuex'
import Creditcards from '../assets/creditcards.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: Creditcards
  },
  mutations: {
    addCard(state, card){
      state.cards.cards.push(card)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getFirst(state) {
      return state.cards.cards[0]
    },
    getAll(state) {
      return state.cards.cards
    }
    
  }
  
})
