Vue.component('SubmitBtn', {

    props: {
        buttonText: {
            type: String,
            default: "Submit",
        },
    },

    methods: {
        doTask(){
            this.$emit('submit-Form')
        },
    },

    template: `
      
      <div class="my-2">
      <v-btn type="submit"
             color="purple"
             @click.prevent="doTask"
             dark large>
        {{buttonText}}
      </v-btn>
      </div>
      
    `
});