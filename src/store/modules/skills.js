export default {
  state: {
    skills: [
      {
        id: 1,
        data: {
          title: {
            value: 'Java'
          },
          type: {
            value: 'Technology'
          },
          category: {
            value: 'Backend'
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
            value: 'Language'
          }
        }
      },
      {
        id: 2,
        data: {
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
            value: 'Programming language'
          }
        }
      },
      {
        id: 3,
        data: {
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
            value: 'Markup'
          }
        }
      },
      {
        id: 4,
        data: {
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
        }
      },
      {
        id: 5,
        data: {
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
        }
      },
      {
        id: 6,
        data: {
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
        }
      },
      {
        id: 7,
        data: {
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
      }
    ],
    skillsInfoTabData: [
      {
        name: 'Technology info',
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
        name: 'Description',
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
    ],
    skillsTreeTabData: [],
    skillsPersonalData: {
      icon: 1,
      credentials: {
        name: 'Technology name'
      },
      items: [
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
    },
    skillsHeaderNames: [
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
  mutations: {},
  actions: {},
  getters: {
    getSkills: state => state.skills,
    getSkillsHeaderNames: state => state.skillsHeaderNames,
    getSkillsInfoTabData: state => state.skillsInfoTabData,
    getSkillsTreeTabData: state => state.skillsTreeTabData,
    getSkillsPersonalData: state => state.skillsPersonalData
  }
}
