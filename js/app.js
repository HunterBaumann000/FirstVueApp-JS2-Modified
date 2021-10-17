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
        item: new State,

        ItemList: new LocationCollection()
            .addItem(new State('Wisconsin', '10/23', 'cold and cheese', true))
            .addItem(new State('Ohio', '11/01', 'cornfields all the way', false))
            .addItem(new City('Tallahassee', '01/23', 'nice city scenery', true, 'Florida'))
            .addItem(new Country('Germany', '11/13', 'lots of good food', true, 'noodles'))




    },
    methods: {

        addItem(){
            this.ItemList.addItem(this.item);

            this.item = new State

        },

        removeItem(item){
            this.ItemList.splice(this.ItemList.indexOf(item), 1);
        },

    },

    computed: {

    },


});