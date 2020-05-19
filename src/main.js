import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      cardData: {
        number: 4539281814690572,
        name: "Lars Niklas Sixten",
        date: new Date(),
        ccv: 221,
        vendor: {
          bitcoin: 'Bitcoin',
          blockchain: 'Blockchain',
          evil: 'Evil',
          ninja: 'Ninja',
        },
      }
    }
  },
  render: h => h(App)
}).$mount('#app')
