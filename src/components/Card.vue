<template>
<article class="card" v-bind="getColor" @click="$emit('getCard')">
    <div class="content">
        <vendor v-bind="getVendor"/>

        <h1 class="card-number">{{cardData.number}}</h1>
        
        <article class="bottom">
            <div class="column">   
                <p>Cardholder name</p>
                <h2 class="card-name">{{cardData.name}}</h2>
            </div>
            <div class="column">
                <p>Valid thru</p>
                <h2 class="card-date">{{cardData.valid}}</h2>
            </div>
        </article>
    </div>
</article>
</template>
<script>
import Vendor from '../components/Vendor'


export default {
    components:{
        Vendor,
    },
    props: {
        cardData: {
            number: String,
            name: String,
            valid: String,
            ccv: Number,
            vendor: String,


        }
    },
    data: () => ({
        
    }),
    
    methods: {

    },
    computed: {
        getVendor(){
                if (this.cardData.vendor == "bitcoin") {
                    return {
                        bitcoin: true,
                        dark: true
                    }
                } else if (this.cardData.vendor == "blockchain") {
                    return {
                        blockchain: true
                    }
                } else if (this.cardData.vendor == "evil"){
                    return {
                        evil: true
                    }
                } else if (this.cardData.vendor == "ninja"){
                   return{
                       ninja: true
                   } 
                } 
                return ""
            
        },
        getColor(){
      if (this.cardData.vendor == "bitcoin") {
                    return {
                        yellow: true,
                        
                    }
                } else if (this.cardData.vendor == "blockchain") {
                    return {
                        blue: true
                    }
                } else if (this.cardData.vendor == "evil"){
                    return {
                        red: true
                    }
                } else if (this.cardData.vendor == "ninja"){
                   return{
                       black: true
                   } 
                } 
                return ""
        }
    },
    
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&display=swap');

$base-color-red: #df2f4e;
$base-color-blue: #8151e7;
$base-color-black: #373636;
$base-color-yellow: #fbb241;


.card{
    position: relative;
    width: 20rem;
    height: 13rem;
    background-color: grey;
    border-radius: 1rem;
    margin: 1rem;
    font-family: 'DM Mono', monospace;
    font-weight: 300;
    transition: 0.3s;

    .content{
        padding: 1rem;

        h1{
            font-size: 1.5rem;
            margin: 0;
            margin-top: 1rem;
            margin-bottom: 0.7rem;
        }

        .bottom{
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            h2{
                margin: 0;
                text-align: left;
                font-size: 1rem;
                white-space: nowrap;
            }
            p{
                margin: 0;
                text-align: left;
            }
        }

        .column:nth-last-of-type(1){
            text-align: right;

            p{
                text-align: right;
            }
            h2{
                text-align: right;
            }

        }
        
    }
}
.card[red]{
    background-color: $base-color-red;
    color: white;
}
.card[black]{
    background-color: $base-color-black;
    color: white;
}
.card[yellow]{
    background-color: $base-color-yellow;
}
.card[blue]{
    background-color: $base-color-blue;
    color: white;
}

.card:hover{
    cursor: pointer;
    margin-top: 5px;
}


</style>