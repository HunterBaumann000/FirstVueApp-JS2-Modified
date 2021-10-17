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

const StateComponent = Vue.component('State', {
    props: {
        item: State
    },

    methods: {

        deletePanel() {
            this.$emit('delete-item', this.item)
        }

    },

    template: `
      <v-expansion-panel>
      <v-expansion-panel-header>

        <b> {{item.name}} </b>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{item.description}}
        <br><br><hr>
        <v-row>
          <v-col cols="10">
            Traveled to {{item.name}} on {{item.date}}
          </v-col>
          <v-col cols="2">


            <v-icon v-if="item.wasEnjoyable" color="purple">mdi-emoticon-happy-outline</v-icon>
            <v-icon v-else-if="item.wasEnjoyable === false" color="purple">mdi-emoticon-sad-outline</v-icon>


            |
            <v-icon id="removeState" color="red" @click="deletePanel">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
      </v-expansion-panel>
    `
});

const CityComponent = Vue.component('City', {
    props: {
        item: City
    },

    methods: {

        deletePanel() {
            this.$emit('delete-item', this.item)
        }

    },

    template: `
      <v-expansion-panel>
      <v-expansion-panel-header>

        <b> {{item.name}}, {{item.theCityState}} </b>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{item.description}}
        <br><br><hr>
        <v-row>
          <v-col cols="10">
            Traveled to {{item.name}}, {{item.theCityState}} on {{item.date}}
          </v-col>
          <v-col cols="2">


            <v-icon v-if="item.wasEnjoyable" color="purple">mdi-emoticon-happy-outline</v-icon>
            <v-icon v-else-if="item.wasEnjoyable === false" color="purple">mdi-emoticon-sad-outline</v-icon>


            |
            <v-icon id="removeState" color="red" @click="deletePanel">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
      </v-expansion-panel>
    `
});

const CountryComponent = Vue.component('Country', {
    props: {
        item: Country
    },

    methods: {

        deletePanel() {
            this.$emit('delete-item', this.item)
        }

    },

    template: `
      <v-expansion-panel>
      <v-expansion-panel-header>

        <b> {{item.name}} </b>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{item.description}} <br>
        {{item.favoriteFood}}
        
        <br><br><hr>
        <v-row>
          <v-col cols="10">
            Traveled to {{item.name}}, {{item.theCityState}} on {{item.date}}
          </v-col>
          <v-col cols="2">


            <v-icon v-if="item.wasEnjoyable" color="purple">mdi-emoticon-happy-outline</v-icon>
            <v-icon v-else-if="item.wasEnjoyable === false" color="purple">mdi-emoticon-sad-outline</v-icon>


            |
            <v-icon id="removeState" color="red" @click="deletePanel">mdi-close</v-icon>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
      </v-expansion-panel>
    `
});