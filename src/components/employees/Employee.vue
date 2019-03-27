<template>
    <Main parent="Employee" :infoTabData="infoTabData" :skillsTabData="skillsTabData"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  data () {
    return {
      infoTabData: [],
      skillsTabData: []
    }
  },
  created: function () {
    this.infoTabData = [
      {
        header: 'Personal info',
        items:
          [
            [
              {
                name: 'Other ID',
                value: '654321'
              },
              {
                name: 'Start Date',
                value: '01-01-1970'
              },
              {
                name: 'Gender',
                value: 'Male'
              },
              {
                name: 'Birthday',
                value: '01-01-1970'
              }]
          ]
      },
      {
        header: 'Job Details',
        items:
          [
            [
              {
                name: 'Job Title',
                value: 'test test'
              },
              {
                name: 'Supervisor',
                value: 'Test Test'
              },
              {
                name: 'Department',
                value: 'Test'
              }]
          ]
      }
    ]
    this.skillsTabData = {
      skills: [
        {
          skill: {
            value: 'jQuery',
            display: true,
            link: '/skill'
          },
          level: {
            value: '7/10',
            display: true
          },
          date: {
            value: '01.01.1970',
            display: true
          },
          actions: {
            value: 'edit',
            display: 'true'
          }
        },
        {
          skill: {
            value: 'JavaScript',
            display: true,
            link: '/skill'
          },
          level: {
            value: '9/10',
            display: true
          },
          date: {
            value: '01.01.1970',
            display: true
          },
          actions: {
            value: 'edit',
            display: 'true'
          }
        },
        {
          skill: {
            value: 'Powerpoint',
            display: true,
            link: '/skill'
          },
          level: {
            value: '5/10',
            display: true
          },
          date: {
            value: '01.01.1970',
            display: true
          },
          actions: {
            value: 'edit',
            display: 'true'
          }
        },
        {
          skill: {
            value: 'Java',
            display: true,
            link: '/skill'
          },
          level: {
            value: '7/10',
            display: true
          },
          date: {
            value: '01.01.1970',
            display: true
          },
          actions: {
            value: 'edit',
            display: 'true'
          }
        }
      ],
      headerNames: [
        {
          name: 'Skill',
          display: true
        },
        {
          name: 'Level',
          display: true
        },
        {
          name: 'Date update',
          display: true
        },
        {
          name: 'Actions',
          display: 'not-mobile'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
