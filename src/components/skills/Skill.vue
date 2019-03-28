<template>
    <Main parent="Skill" :infoTabData="infoTabData" :skillsTabData="skillsTabData"
          :personalData="personalData" tab1="Info" tab2="Skill tree"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  data () {
    return {
      infoTabData: Array,
      skillsTabData: Object,
      personalData: Object
    }
  },
  created: function () {
    this.infoTabData = [
      {
        header: 'Technology info',
        items:
          [
            [
              {
                name: 'Latest ver',
                value: '2.6.10'
              },
              {
                name: 'GIT',
                value: 'https://github.com/vuejs/vue',
                link: true
              }]
          ]
      },
      {
        header: 'Description',
        items:
          [
            [
              {
                description: 'Description'
              }
            ],
            [
              {
                button: 'Save'
              }
            ]
          ]
      }
    ]
    this.skillsTabData = {}
    this.personalData = {
      type: 'skill',
      id: 1,
      data: [
        {
          value: 'Technology name',
          type: 'header'
        },
        {
          name: 'URL',
          value: 'test.test@test.com',
          type: 'link'
        },
        {
          name: 'Staff count',
          value: '5'
        },
        {
          name: 'Used in projects',
          value: '4'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
