Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            themes: {
                // modify themes (light or dark) on the fly
                light: {
                    primary: '#6f1483'
                }
            }
        }
    }),
    data: {
        item: {
            name: '',
            date: '',
            description: '',
            wasEnjoyable: false,
        }

    },
    methods: {

        addItem(){
            this.ItemList.push(this.item)

            this.item = {
                name: '',
                date: '',
                description: '',
                wasEnjoyable: false,
            }

        },

        removeItem(item){
            this.ItemList.splice(this.ItemList.indexOf(item), 1);
        },

    },

    computed: {

    },


});