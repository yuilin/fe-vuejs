export default {
  state: {
    employees: [],
    employeesHeaderNames: [],
    employeesInfoTabData: [],
    employeesSkillsTabData: [],
    employeesPersonalData: []
  },
  mutations: {
    setEmployees () {
      this.state.employees = [
        {
          name: {
            value: 'John',
            display: true
          },
          surname: {
            value: 'Due',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Bill',
            display: true
          },
          surname: {
            value: 'Bogus',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Arden',
            display: true
          },
          surname: {
            value: 'Liz',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Dair',
            display: true
          },
          surname: {
            value: 'Mick',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Stock',
            display: true
          },
          surname: {
            value: 'Suzy',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Sato',
            display: true
          },
          surname: {
            value: 'Mori',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Peck',
            display: true
          },
          surname: {
            value: 'Greg',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'Vice',
            display: true
          },
          surname: {
            value: 'Lee',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        },
        {
          name: {
            value: 'West',
            display: true
          },
          surname: {
            value: 'Clint',
            display: true
          },
          position: {
            value: 'Developer',
            display: true
          },
          project: {
            value: 'Test project',
            display: true
          },
          department: {
            value: 'Test Department',
            display: true
          },
          skills: {
            value: 'Java',
            display: true
          }
        }
      ]
    },
    setEmployeesHeaderNames () {
      this.state.employeesHeaderNames = [
        {
          name: 'Name',
          display: true
        },
        {
          name: 'Surname',
          display: true
        },
        {
          name: 'Position',
          display: true
        },
        {
          name: 'Project',
          display: true
        },
        {
          name: 'Department',
          display: true
        },
        {
          name: 'Skills',
          display: true
        }
      ]
    },
    setEmployeesPersonalData () {
      this.state.employeesInfoTabData = [
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
      this.state.employeesSkillsTabData = {
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
      this.state.employeesPersonalData = {
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
  },
  actions: {},
  getters: {
    getEmployees: (state, getters, rootState) => rootState.employees,
    getEmployeesHeaderNames: (state, getters, rootState) => rootState.employeesHeaderNames,
    getEmployeesInfoTabData: (state, getters, rootState) => rootState.employeesInfoTabData,
    getEmployeesSkillsTabData: (state, getters, rootState) => rootState.employeesSkillsTabData,
    getEmployeesPersonalData: (state, getters, rootState) => rootState.employeesPersonalData
  }
}
