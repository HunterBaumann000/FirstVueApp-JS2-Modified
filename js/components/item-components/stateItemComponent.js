const StateComponent = Vue.component('State', {
    props: {
        item: State,
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
        <div style="font-size: 14px;"> 
          <b>State Summary:</b> {{item.description}}
        </div>
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
