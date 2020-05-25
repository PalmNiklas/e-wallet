<template>
<div class="vendor">
    <img v-if="dark == true" src="../assets/chip-dark.svg" alt="Dark chip" class="chip">
    <img v-else src="../assets/chip-light.svg" alt="light chip" class="chip">

    <img class="vendor" v-if="bitcoin == true" src="../assets/vendor-bitcoin.svg" alt="Bitcoin Icon" >
    <img class="vendor" v-else-if="blockchain == true" src="../assets/vendor-blockchain.svg" alt="Blockchain Icon" >
    <img class="vendor" v-else-if="evil == true" src="../assets/vendor-evil.svg" alt="Evil Icon" >
    <img class="vendor" v-else-if="ninja == true" src="../assets/vendor-ninja.svg" alt="Ninja Icon" >

</div>
</template>
<script>
export default {
    name: "Vendor",
    props: {
        bitcoin: Boolean,
        blockchain: Boolean,
        evil: Boolean,
        ninja: Boolean,
        dark: Boolean,
        light: Boolean

    },
    data: () => ({
    }),
    
    methods: {

    },
    computed:{
        
    }
}
</script>

<style lang="scss" scoped>

div{
    display: flex;
    justify-content: space-between;

    .vendor{
        align-self: flex-start;
    }
}
</style>