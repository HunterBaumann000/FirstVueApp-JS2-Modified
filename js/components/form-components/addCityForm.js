Vue.component('AddCityForm', {

    props: {
        item: {
            type: Object,
            required: true,
        },
    },


    methods: {

        addUserCity() {
            this.$emit('add-item', this.item)
        }

    },

    template:
        `
     <div class="userCityForm">
      <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            
            <v-text-field
                
                label="City Name"
                v-model="item.name"
                outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field

                label="State of City Name"
                v-model="item.theCityState"
                outlined
            ></v-text-field>
          </v-col>
          
          
        </v-row>

        <v-row>

          <v-col cols="12" sm="9">
            <v-text-field
                label="Summary"
                v-model="item.description"
                outlined
            ></v-text-field>
          </v-col>
          
          <v-col cols="12" sm="3">
            <v-text-field
                label="Date Traveled"
                v-model="item.date"
                outlined
            ></v-text-field>
          </v-col>
          
        </v-row>
        
        
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
              button-text="Add City"
              @submit-Form="addUserCity"
          >
          </submit-btn>

      </v-container>
      </v-form>
     </div>
    `
});