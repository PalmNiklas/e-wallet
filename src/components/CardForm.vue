<template>
    <div>
        <input v-model="tempNumber" placeholder="Card number">
        <input v-model="tempName" placeholder="Cardholder Name">
        <input v-model="tempValidDate" placeholder="Valid thru">
        <input v-model="tempCcv" placeholder="CCV">
        <select v-model="tempVendor" placeholder="Vendor">
            <option value="bitcoin">Bitcoin</option>
            <option value="blockchain">Blockchain</option>
            <option value="evil">Evil</option>
            <option value="ninja">Ninja</option>
        </select>
        <button v-on:click="addCard">Add card</button>

        <p>{{tempNumber}}</p>
        
    </div>
</template>
<script>
import store from '../store'

export default {
    name: 'CardForm',
    data: () => ({
       tempNumber: "",
       tempName: "",
       tempValidDate: "",
       tempCcv: "",
       tempVendor: "",

       tempCard: {
            number: Number,
            name: String,
            valid: String,
            ccv: Number,
            vendor: String,
       }
    }),
    
    
    methods: {
        addCard(){
            this.tempCard.number = this.tempNumber
            this.tempCard.name = this.tempName
            this.tempCard.valid = this.tempValidDate
            this.tempCard.vendor = this.tempVendor
            this.tempCard.ccv = this.tempCcv
            // this.$emit("addCard", this.tempCard)
            store.commit('addCard', this.tempCard)

                    },

    },
}
</script>

<style lang="scss" scoped>
input, select{
    margin: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  // font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.3s;
}

select{
    margin-bottom: 2rem;
}

</style>