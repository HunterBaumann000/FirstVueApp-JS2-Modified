const ListItemComponent = Vue.component('ListItem', {

    props:  {
        item: Object
    },

    computed: {
        typeOfItem(){
            return this.item.constructor.name;
        }
    },

    methods: {

        deleteItem() {
            this.$emit('remove-item', this.item)
        }

    },

    template:
        `
          <div id="listItemPanel">
            <v-expansion-panels>
              <component :is="typeOfItem" :item="item" @delete-item="deleteItem"></component>
            </v-expansion-panels>
          </div>`
});