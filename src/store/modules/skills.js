export default {
  state: {
    skills: Array,
    skillsInfoTabData: [],
    skillsTreeTabData: [],
    skillsPersonalData: []
  },
  mutations: {
    setSkills () {
      this.state.skills = [
        {
          title: {
            value: 'HTML'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '5',
            display: 'not-mobile'
          },
          employees: {
            value: '20'
          },
          projects: {
            value: '5'
          },
          tags: {
            value: 'Markup'
          }
        },
        {
          title: {
            value: 'CSS'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '3',
            display: 'not-mobile'
          },
          employees: {
            value: '12'
          },
          projects: {
            value: '5'
          },
          tags: {
            value: 'Markup'
          }
        },
        {
          title: {
            value: 'JavaScript'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: 'ES2018',
            display: 'not-mobile'
          },
          employees: {
            value: '10'
          },
          projects: {
            value: '5'
          },
          tags: {
            value: 'Programming language'
          }
        },
        {
          title: {
            value: 'TypeScript'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '3.2.0',
            display: 'not-mobile'
          },
          employees: {
            value: '9'
          },
          projects: {
            value: '3'
          },
          tags: {
            value: 'Programming language'
          }
        },
        {
          title: {
            value: 'React'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '3.16.0',
            display: 'not-mobile'
          },
          employees: {
            value: '8'
          },
          projects: {
            value: '5'
          },
          tags: {
            value: 'Framework'
          }
        },
        {
          title: {
            value: 'Vue'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '3.2.0',
            display: 'not-mobile'
          },
          employees: {
            value: '6'
          },
          projects: {
            value: '2'
          },
          tags: {
            value: 'Framework'
          }
        },
        {
          title: {
            value: 'Angular'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Frontend'
          },
          version: {
            value: '7.2.5',
            display: 'not-mobile'
          },
          employees: {
            value: '7'
          },
          projects: {
            value: '3'
          },
          tags: {
            value: 'Markup'
          }
        }
      ]
    },
    setSkillsHeaderNames () {
      this.state.skillsHeaderNames = [
        {
          name: 'Title'
        },
        {
          name: 'Type'
        },
        {
          name: 'Category'
        },
        {
          name: 'Version',
          display: 'not-mobile'
        },
        {
          name: 'Employees'
        },
        {
          name: 'Projects'
        },
        {
          name: 'Tags'
        }
      ]
    },
    setSkillsPersonalData () {
      this.state.skillsInfoTabData = [
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
      this.state.skillsTreeTabData = {}
      this.state.skillsPersonalData = {
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
  },
  actions: {},
  getters: {
    getSkills: (state, getter, rootState) => rootState.skills,
    getSkillsHeaderNames: (state, getter, rootState) => rootState.skillsHeaderNames,
    getSkillsInfoTabData: (state, getters, rootState) => rootState.skillsInfoTabData,
    getSkillsTreeTabData: (state, getters, rootState) => rootState.skillsTreeTabData,
    getSkillsPersonalData: (state, getters, rootState) => rootState.skillsPersonalData
  }
}
