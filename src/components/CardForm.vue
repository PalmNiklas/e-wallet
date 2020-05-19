<template>
    <div>
        <input v-model="tempNumber" placeholder="Card number">
        <input v-model="tempName" placeholder="Cardholder Name">
        <input v-model="tempValidDate" placeholder="Valid thru">
        <input v-model="tempCcv" placeholder="CCV">
        <input v-model="tempVendor" placeholder="Vendor">
        <button v-on:click="addCard">Add card</button>

        <p>{{tempNumber}}</p>
        
    </div>
</template>
<script>

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
            date: String,
            ccv: Number,
       }
    }),
    
    
    methods: {
        addCard(){
            this.tempCard.number = this.tempNumber
            this.tempCard.name = this.tempName
            this.tempCard.date = this.tempValidDate
            this.tempCard.ccv = this.tempVendor
            this.$emit("addCard", this.tempCard)
                    },

    },
}
</script>

<style>

</style>