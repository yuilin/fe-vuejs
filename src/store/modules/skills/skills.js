export default {
  state: {
    skills: [
      {
        id: 1,
        data: {
          title: {
            value: 'Java',
            link: true
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
          tags: {
            value: 'Language'
          }
        }
      },
      {
        id: 2,
        data: {
          title: {
            value: 'JavaScript',
            link: true
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
          tags: {
            value: 'Programming language'
          }
        }
      },
      {
        id: 3,
        data: {
          title: {
            value: 'CSS',
            link: true
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
          tags: {
            value: 'Markup'
          }
        }
      },
      {
        id: 4,
        data: {
          title: {
            value: 'TypeScript',
            link: true
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
          tags: {
            value: 'Programming language'
          }
        }
      },
      {
        id: 5,
        data: {
          title: {
            value: 'React',
            link: true
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
          tags: {
            value: 'Framework'
          }
        }
      },
      {
        id: 6,
        data: {
          title: {
            value: 'Vue',
            link: true
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
          tags: {
            value: 'Framework'
          }
        }
      },
      {
        id: 7,
        data: {
          title: {
            value: 'Angular',
            link: true
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
            {
              name: 'Latest ver',
              value: '2.6.10'
            },
            {
              name: 'GIT',
              value: 'https://github.com/vuejs/vue',
              link: true
            }
          ]
      },
      {
        name: 'Description',
        items:
          [
            {
              description: 'Description'
            },
            {
              button: 'Save'
            }
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
        name: 'Tags'
      },
      {
        name: 'Employees'
      },
      {
        name: 'Projects'
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
