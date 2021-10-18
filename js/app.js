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

        ItemList: new LocationCollection()
            .addItem(new State('Wisconsin', '10/23', 'cold and cheese', true))
            .addItem(new City('Tallahassee', '01/23', 'cool museums and scenery', true, 'Florida'))
            .addItem(new Country('Canada', '11/13', 'lots of wildlife and very vast landscapes', true, 'milk is commonly packaged in a bag instead of a carton')),

        item: new State

    },

    methods: {

        //this works, but the first object will become blank and the list only submits the lasts entry

        // addStateItem(){
        //
        //     this.ItemList.addItem(this.item);
        //
        //     this.item = new State;
        // },
        //
        // addCityItem(){
        //     this.ItemList.addItem(this.item);
        //
        //     this.item = new City;
        // },
        //
        // addCountryItem(){
        //     this.ItemList.addItem(this.item);
        //
        //     this.item = new Country;
        // },

        addItem() {
            this.ItemList.addItem(this.item);

            this.item = new Country

        },


        removeItem(item){
            this.ItemList.splice(this.ItemList.indexOf(item), 1);
        },

    },

    computed: {
    },


});