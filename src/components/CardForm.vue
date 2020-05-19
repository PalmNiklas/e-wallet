<template>
    <div>
        <input v-model="tempNumber" placeholder="Card number">
        <!-- <input v-model="name" placeholder="Cardholder Name">
        <input v-model="validDate" placeholder="Valid thru">
        <input v-model="ccv" placeholder="CCV">
        <input v-model="vendor" placeholder="Vendor"> -->
        
    </div>
</template>
<script>

export default {
    name: 'CardForm',
    data: () => ({
       tempNumber: ""
    }),
    
    
    methods: {

    }
}
</script>

<style>

</style>