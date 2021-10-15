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
                      <v-icon id="removeState" color="red" @click="deleteItem">mdi-close</v-icon>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>`
});

const StateComponent = Vue.component('State', {
    props: {
        item: State
    },

    template: `
        <div class="state">
            <h3 class="card-title">{{item.name}}</h3>
            <p class="card-text">date: {{item.date}}</p>
            <p class="card-text">desc: {{item.description}}</p>
        </div>
    `
});

const CityComponent = Vue.component('City', {
    props: {
        item: City
    },

    template: `
        <div class="state">
            <h3 class="card-title">{{item.name}}</h3>
            <p class="card-text">date: {{item.date}}</p>
            <p class="card-text">desc: {{item.description}}</p>
        </div>
    `
});