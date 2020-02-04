<template>
  <div id="app">
    <b-container class="p-4" fluid>
      <b-row class="w-100 border-bottom border-dark">
        <b-col class="text-center">
          <p class="lead font-weight-bold mb-0">Vue Duckform Demo</p>
          <p class="mb-1">Laravel 5/6 and VueJS packages to handle form rendering and DB storage. I'm not gonna lie, this is a solution when you can't afford Typeform.</p>
          <p class="small mb-4">
            <a href="https://packagist.org/packages/tpenaranda/duckform" target="_blank">https://packagist.org/packages/tpenaranda/duckform</a> |
            <a href="https://www.npmjs.com/package/vue-duckform" target="_blank">https://www.npmjs.com/package/vue-duckform</a>
          </p>
        </b-col>
      </b-row>
      <b-row class="w-100">
        <b-col cols="7">
          <p class="text-center py-4 mb-2">Form Model</p>
          <vue-json-pretty :data="form"></vue-json-pretty>
        </b-col>
        <b-col cols="5">
          <p class="text-center py-4 mb-2">Form Model rendered</p>
          <duckform class="border border-dark" :form-data="formData" v-model="form" @save="handleSave"></duckform>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Duckform from 'vue-duckform'
import VueJsonPretty from 'vue-json-pretty'

export default {
  name: 'app',
  components: { Duckform, VueJsonPretty },
  data: () => ({
    formData: {
      title: 'Vue Duckform Questionnaire',
      sections: [
        {
          title: 'This is the first section',
          description: 'And this is some description for the 1st section...',
          questions: [
            {
              type: 'free_text',
              required: true,
              text: "What's your name?",
              possible_answers: [{id: 'name'}]
            },
            {
              type: 'single_select',
              required: true,
              text: 'How did you hear about vue-duckform',
              possible_answers: [{id: 'newspaper', text: 'Newspaper'}, {id: 'search_engine', text: 'Search engine'}, {id: 'wtf', text: 'WTF is vue-duckform?'}]
            }
          ]
        }, {
          title: 'This is the second section',
          description: 'And this is some description for the 2nd section...',
          questions: [
            {
              type: 'multiselect',
              required: true,
              text: 'Which option do you like more?',
              possible_answers: [{id: 'option_1', text: 'Option 1'}, {id: 'option_2', text: 'Option 2'}, {id: 'other', text: 'Other'}]
            },
            {
              type: 'scale',
              required: true,
              text: "In a 1 to 5 scale, how do you like vue-duckform?",
              possible_answers: [{id: 'like_1', text: 'Nothing'}, {id: 'like_2'}, {id: 'like_3'}, {id: 'like_4'}, {id: 'like_5', text: 'A lot!'}]
            },
          ]
        }, {
          title: 'This is the last section',
          description: 'And this is some description for the last section...',
          questions: [
            {
              type: 'date',
              required: false,
              text: 'Please let us know your birthdate',
              possible_answers: [{id: 'birthdate'}]
            },
            {
              type: 'integer',
              required: true,
              text: "How much does the Eiffel Tower weigh?",
              possible_answers: [{id: 'eiffel_weight', text: 'Tons.'}]
            }
          ]
        }
      ]
    },
    form: null
  }),
  created () {
    this.form = this.formData
  },
  methods: {
    handleSave() {
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss">
  .duckform {
    position: sticky;
    top: 1.5rem;
    transform: translate(0);
  }
</style>
