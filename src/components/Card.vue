<template>
<article class="card">
    <div class="content">
    <h1 class="card-number">{{cardData.number}}</h1>
    <h2>Cardholder name</h2>
    <p class="card-name">{{cardData.name}}</p>
    <h2>Valid thru</h2>
    <p class="card-date">{{cardData.date}}</p>
    </div>
</article>
</template>
<script>
export default {
    props: {
        cardData: {
            number: Number,
            name: String,
            date: String,
            ccv: Number,
            vendor: {
                bitcoin: 'Bitcoin',
                blockchain: 'Blockchain',
                evil: 'Evil',
                ninja: 'Ninja',
            }


        }
    },
    data: () => ({
        
    }),
    
    methods: {

    }
}
</script>

<style lang="scss">

.card{
    position: relative;
    width: 20rem;
    background-color: grey;
    border-radius: 1rem;

    .content{
        padding: 2rem;
    // position: absolute;
    
    }
    
}
// .card::after{
        
//         display: block;
//         padding-bottom: 100%;
//     }


</style>