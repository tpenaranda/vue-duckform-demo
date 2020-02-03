<template>
  <div id="app">
    <b-container class="p-4" fluid>
      <b-row class="w-100">
        <b-col cols="7">
          <p class="text-center py-3 mb-2">Form Model</p>
          <vue-json-pretty :data="form"></vue-json-pretty>
        </b-col>
        <b-col cols="5">
          <p class="text-center py-3 mb-2">Form Model rendered</p>
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
              possible_answers: [{id: 'possible_answer_1'}]
            },
            {
              type: 'single_select',
              required: true,
              text: 'How did you hear about vue-duckform',
              possible_answers: [{id: 'possible_answer_4', text: 'Newspaper'}, {id: 'possible_answer_5', text: 'Search engine'}, {id: 'possible_answer_6', text: 'WTF is vue-duckform?'}]
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
              possible_answers: [{id: 'possible_answer_7', text: 'Option 1'}, {id: 'possible_answer_8', text: 'Option 2'}, {id: 'possible_answer_9', text: 'Other'}]
            },
            {
              type: 'scale',
              required: true,
              text: "In a 1 to 5 scale, how do you like vue-duckform?",
              possible_answers: new Array(5).fill({}).map((v, k) => { return { id: `possible_answer_scale_${k}`} })
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
              possible_answers: [{id: 'possible_answer_2'}]
            },
            {
              type: 'integer',
              required: true,
              text: "Some 'integer' type required question",
              possible_answers: [{id: 'possible_answer_3'}]
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
