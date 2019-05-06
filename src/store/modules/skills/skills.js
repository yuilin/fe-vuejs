export default {
  state: {
    skills: [
      {
        id: 1,
        personalData: {
          icon: 1,
          credentials: {
            name: 'Java'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'http://java.com',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '12'
                },
                {
                  name: 'GIT',
                  value: 'https://github.com/vuejs/vue',
                  link: true
                },
                {
                  name: 'Category',
                  value: 1
                },
                {
                  name: 'Type',
                  value: 3
                }
              ]
          }
        ]
      },
      {
        id: 2,
        personalData: {
          icon: 2,
          credentials: {
            name: 'JavaScript'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'https://developer.mozilla.org/docs/Web/JavaScript',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: 'ECMAScript 2016'
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 3
                }
              ]
          }
        ]
      },
      {
        id: 3,
        personalData: {
          icon: 3,
          credentials: {
            name: 'CSS'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'https://www.w3.org/Style/CSS/',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '3'
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 3
                }
              ]
          }
        ]
      },
      {
        id: 4,
        personalData: {
          icon: 4,
          credentials: {
            name: 'TypeScript'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'http://www.typescriptlang.org/',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '3.2.4'
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 3
                }
              ]
          }
        ]
      },
      {
        id: 5,
        personalData: {
          icon: 5,
          credentials: {
            name: 'React'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'https://reactjs.org/',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '16.8.6'
                },
                {
                  name: 'GIT',
                  value: 'https://github.com/facebook/react',
                  link: true
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 2
                }
              ]
          }
        ]
      },
      {
        id: 6,
        personalData: {
          icon: 6,
          credentials: {
            name: 'Vue'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'https://vuejs.org/',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '2.6.10'
                },
                {
                  name: 'GIT',
                  value: 'https://github.com/vuejs/vue',
                  link: true
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 2
                }
              ]
          }
        ]
      },
      {
        id: 7,
        personalData: {
          icon: 7,
          credentials: {
            name: 'Angular'
          },
          items: [
            {
              name: 'Staff count'
            },
            {
              name: 'Used in projects'
            }
          ]
        },
        info: [
          {
            name: 'Info',
            items:
              [
                {
                  name: 'URL',
                  value: 'https://angularjs.org/',
                  link: true
                },
                {
                  name: 'Latest ver',
                  value: '1.7.8'
                },
                {
                  name: 'GIT',
                  value: 'https://github.com/angular',
                  link: true
                },
                {
                  name: 'Category',
                  value: 2
                },
                {
                  name: 'Type',
                  value: 3
                }
              ]
          }
        ]
      }
    ],
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
      }
    ],
    editRecord: 0,
    skillTree: [
      {
        id: 1,
        parentId: 0,
        skillId: null,
        categoryId: 1,
        typeId: null
      },
      {
        id: 2,
        parentId: 0,
        skillId: null,
        categoryId: 2,
        typeId: null
      },
      {
        id: 3,
        parentId: 2,
        skillId: null,
        categoryId: null,
        typeId: 2
      },
      {
        id: 4,
        parentId: 2,
        skillId: null,
        categoryId: null,
        typeId: 3
      },
      {
        id: 5,
        parentId: 1,
        skillId: null,
        categoryId: null,
        typeId: 3
      },
      {
        id: 6,
        parentId: 5,
        skillId: 1,
        categoryId: null,
        typeId: null
      }
    ]
  },
  mutations: {
    setEditRecord (state, payload) {
      state.editRecord = Number(payload)
    },
    addSkill (state, payload) {
      state.skills.push(
        {
          id: payload.id,
          personalData: {
            icon: payload.id,
            credentials: {
              name: payload.name
            },
            items: [
              {
                name: 'Staff count'
              },
              {
                name: 'Used in projects'
              }
            ]
          },
          info: [
            {
              name: 'Info',
              items:
                [
                  {
                    name: 'URL',
                    value: payload.url,
                    link: true
                  },
                  {
                    name: 'Latest ver',
                    value: payload.version
                  },
                  {
                    name: 'GIT',
                    value: payload.version,
                    link: true
                  },
                  {
                    name: 'Category',
                    value: payload.category
                  },
                  {
                    name: 'Type',
                    value: payload.type
                  }
                ]
            }
          ]
        }
      )
    },
    addSkillToTree (state, payload) {
      state.skillTree.push(
        {
          id: payload.id,
          parentId: payload.parentId,
          skillId: payload.skillId,
          categoryId: null,
          typeId: null
        }
      )
    }
  },
  getters: {
    getSkills: state => state.skills,
    getSkillsHeaderNames: state => state.skillsHeaderNames,
    getEditRecord: state => state.editRecord,
    getSkillTree: state => state.skillTree
  }
}
