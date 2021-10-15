Vue.component('SubmitBtn', {

    props: {
        buttonText: {
            type: String,
            default: "Submit",
        }
    },

    methods: {
        submit(){
            this.$emit('submit-Form')
        },
    },

    template: `
      
      <div class="my-2">
      <v-btn type="submit"
             color="purple"
             @click.prevent="submit"
             dark large>
        Add State
      </v-btn>
      </div>
      
    `
});