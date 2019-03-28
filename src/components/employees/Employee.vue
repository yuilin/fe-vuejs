<template>
    <Main parent="Employee" :infoTabData="infoTabData" :skillsTabData="skillsTabData"
          :personalData="personalData" tab1="Info" tab2="Skills"></Main>
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
            link: '/skill'
          },
          level: {
            value: '7/10'
          },
          date: {
            value: '01.01.1970'
          },
          actions: {
            value: 'edit'
          }
        },
        {
          skill: {
            value: 'JavaScript',
            link: '/skill'
          },
          level: {
            value: '9/10'
          },
          date: {
            value: '01.01.1970'
          },
          actions: {
            value: 'edit'
          }
        },
        {
          skill: {
            value: 'Powerpoint',
            link: '/skill'
          },
          level: {
            value: '5/10'
          },
          date: {
            value: '01.01.1970'
          },
          actions: {
            value: 'edit'
          }
        },
        {
          skill: {
            value: 'Java',
            link: '/skill'
          },
          level: {
            value: '7/10'
          },
          date: {
            value: '01.01.1970'
          },
          actions: {
            value: 'edit'
          }
        }
      ],
      headerNames: [
        {
          name: 'Skill'
        },
        {
          name: 'Level'
        },
        {
          name: 'Date update'
        },
        {
          name: 'Actions'
        }
      ]
    }
    this.personalData = {
      type: 'user',
      id: 1,
      data: [
        {
          value: 'Name Surname',
          type: 'header'
        },
        {
          name: 'Email',
          value: 'test.test@test.com',
          type: 'e-mail'
        },
        {
          name: 'Workplace',
          value: '11AA'
        },
        {
          name: 'Project',
          value: 'Test project'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
