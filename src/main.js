import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,

  data() {
    return {
      cardData:  [{
        number: 4539281814690572,
        name: "Lars Niklas Sixten",
        date: "21/07",
        ccv: 221,
        vendor: {
          bitcoin: 'Bitcoin',
          blockchain: 'Blockchain',
          evil: 'Evil',
          ninja: 'Ninja',
        },
      },
      {
        number: 123123812312412,
        name: "Gustav Sixten",
        date: "20/01",
        ccv: 987,
        vendor: {
          bitcoin: 'Bitcoin',
          blockchain: 'Blockchain',
          evil: 'Evil',
          ninja: 'Ninja',
        },
      }]
    }
  },

  store,
  render: h => h(App)
}).$mount('#app')
