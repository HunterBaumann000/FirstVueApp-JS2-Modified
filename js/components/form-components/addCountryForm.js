Vue.component('AddCountryForm', {

    props: {
        item: {
            type: Object,
            required: true,
        },
    },


    methods: {

        addUserState() {
            this.$emit('add-state', this.item)
        }

    },

    template:
        `
     <div class="userStateForm">
      <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            
            <v-text-field
                
                label="State Name"
                v-model="item.name"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field

                label="Date Traveled"
                v-model="item.date"
                outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
            label="Summary"
            v-model="item.description"
            outlined
        ></v-text-field>

        <v-radio-group
            v-model="item.wasEnjoyable"
            row
        >
          <v-radio
              label="Fun Destination"
              v-bind:value="true"
          ></v-radio>
          <v-radio
              label="Bad Destination"
              v-bind:value="false"

          ></v-radio>

        </v-radio-group>
        
          <submit-btn
              button-text="Add State"
              @submit-Form="addUserState"
          >
          </submit-btn>

      </v-container>
      </v-form>
     </div>
    `
});