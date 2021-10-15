
const ListComponent = Vue.component('ItemList', {

    data() {

        return {
            ItemList: new LocationCollection()
                .addItem(new State('Wisconsin', '10/23', 'cold and cheese', true))
                .addItem(new State('Ohio', '11/01', 'cornfields all the way', false))
                .addItem(new City('Miami', '01/23', 'Nice ocean scenery', true, 'Florida'))
        }
    },

    props: {
        name: {
            type: String,
            default: "Travel List"
        },
    },


    methods: {

    },

    template: `
            <div class="travel-list">
                <h3>{{name}}</h3>
                <list-item v-for="item in ItemList"
                           :item="item"
                           :key="item.name"
                           @remove-item="$emit('remove-item', item)">
                          
                </list-item>
                <p>
                  <br>
                    <small>Total States Visited: {{ItemList.length}}</small>
                </p>
            </div>
    `
});


