


const app = Vue.createApp({

    // template: `
    //     <h1>Hola mundo</h1>
    //     <p> desde app.js </p>
    //     <p> {{ 1 + 1 }} </p>
    // `,
    watch: {},
    data(){
        return{
            quote: 'la vida se trata de metas entre mas metas mejor',
            author: 'Aldemar',
        }
    },
    methods: {
        changeQuote(){
            console.log('hola mundo de nuevo');
            this.author = 'Aldemar Cortazar';
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    },


});

app.mount('#myApp');