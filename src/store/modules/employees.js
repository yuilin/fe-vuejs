export default {
  state: {
    employees: [
      {
        id: 1,
        auth: {
          login: 'a',
          password: 'a'
        },
        personalData: {
          credentials: {
            name: 'John',
            surname: 'Due'
          },
          items: [
            {
              name: 'E-mail',
              value: 'John.Due@test.ru',
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
          ],
          icon: 1
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 1
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 2,
        auth: {
          login: 'Bill',
          password: 'BillBogus'
        },
        personalData: {
          credentials: {
            name: 'Bill',
            surname: 'Bogus'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Bill.Bogus@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 2
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 2
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 3,
        auth: {
          login: 'Arden',
          password: 'ArdenLiz'
        },
        personalData: {
          credentials: {
            name: 'Arden',
            surname: 'Liz'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Arden.Liz@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 3
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 3
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 4,
        auth: {
          login: 'Dair',
          password: 'DairMick'
        },
        personalData: {
          credentials: {
            name: 'Dair',
            surname: 'Mick'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Dair.Mick@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 4
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 4
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 5,
        auth: {
          login: 'Suzy',
          password: 'SuzyStock'
        },
        personalData: {
          credentials: {
            name: 'Suzy',
            surname: 'Stock'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Suzy.Stock@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 5
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 5
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 6,
        auth: {
          login: 'Sato',
          password: 'SatoMori'
        },
        personalData: {
          credentials: {
            name: 'Sato',
            surname: 'Mori'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Sato.Mori@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 6
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 6
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 7,
        auth: {
          login: 'Peck',
          password:
            'PeckGreg'
        },
        personalData: {
          credentials: {
            name: 'Peck',
            surname:
              'Greg'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Peck.Greg@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 7
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 7
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 8,
        auth: {
          login: 'Vice',
          password:
            'ViceLee'
        },
        personalData: {
          credentials: {
            name: 'Vice',
            surname:
              'Lee'
          },
          items: [
            {
              name: 'E-mail',
              value: 'Vice.Lee@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 8
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 8
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      },
      {
        id: 9,
        auth: {
          login: 'West',
          password:
            'WestClint'
        },
        personalData: {
          credentials: {
            name: 'West',
            surname:
              'Clint'
          },
          items: [
            {
              name: 'E-mail',
              value: 'West.Clint@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 'Test project'
            }
          ],
          icon: 9
        },
        info: [
          {
            name: 'Personal Info',
            items: [
              [
                {
                  name: 'Id',
                  value: 9
                },
                {
                  name: 'Start date',
                  value: '01-01-1970'
                },
                {
                  name: 'Gender',
                  value: 'Male'
                },
                {
                  name: 'Birthday',
                  value: '01-01-1970'
                }
              ]
            ]
          },
          {
            name: 'Job Details',
            items: [
              [
                {
                  name: 'Position',
                  value: 'Developer'
                },
                {
                  name: 'Supervisor',
                  value: 'Supervisor'
                },
                {
                  name: 'Department',
                  value: 'Test department'
                }
              ]
            ]
          }
        ],
        skills: [
          {
            id: 1,
            data: {
              skill: {
                value: 'Java',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          },
          {
            id: 2,
            data: {
              skill: {
                value: 'JavaScript',
                link: true,
                options: 'skillList'
              },
              level: {
                value: 'level',
                options: 'levelList'
              },
              date: {
                value: 'date',
                editable: false
              },
              action: [
                {
                  value: 'edit'
                },
                {
                  value: 'delete'
                }
              ]
            }
          }
        ]
      }
    ],
    employeesHeaderNames: [
      {
        name: 'Name'
      },
      {
        name: 'Surname'
      },
      {
        name: 'Position'
      },
      {
        name: 'Project'
      },
      {
        name: 'Department'
      },
      {
        name: 'Skills'
      }
    ],
    employeesSkillTableHeaderNames: [
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
  },
  mutations: {
    addEmployee (state, payload) {
      state.employees.push(
        {
          id: payload.id,
          auth: {
            login: payload.user,
            password: payload.password
          },
          personalData: {
            credentials: {
              name: payload.name,
              surname: payload.surname
            },
            items: [
              {
                name: 'E-mail',
                value: payload.email,
                type: 'e-mail'
              },
              {
                name: 'Workplace',
                value: payload.workplace
              },
              {
                name: 'Project',
                value: payload.project
              }
            ],
            icon: payload.id
          },
          info: [
            {
              name: 'Personal Info',
              items: [
                [
                  {
                    name: 'Id',
                    value: payload.id
                  },
                  {
                    name: 'Start date',
                    value: payload.startDate
                  },
                  {
                    name: 'Gender',
                    value: payload.gender
                  },
                  {
                    name: 'Birthday',
                    value: payload.birthday
                  }
                ]
              ]
            }
          ],
          data: {
            name: {
              value: payload.name
            },
            surname: {
              value: payload.surname
            },
            position: {
              value: 'Developer'
            },
            project: {
              value: payload.project
            },
            department: {
              value: ''
            },
            skills: {
              value: ''
            }
          }
        }
      )
    },
    addSkillToEmployee (state, payload) {
      state.employees.find(employee => employee.id === payload).skills.push({
        id: 0,
        data: {
          skill: {
            value: 'Select Skill',
            link: true,
            options: 'skillList'
          },
          level: {
            value: '0',
            options: 'levelList'
          },
          date: {
            value: new Date().toLocaleString(),
            editable: false
          },
          action: [
            {
              value: 'edit'
            },
            {
              value: 'delete'
            }
          ]
        }
      })
    },
    deleteEmployeeSkill (state, payload) {
      state.employees.find(employee => employee.id === payload.employeeId).skills.splice(
        state.employees.find(employee => employee.id === payload.employeeId).skills.indexOf(
          state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.skillId)), 1)
    },
    updateEmployeeSkill (state, payload) {
      state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.recordId).data.skill.value = payload.skillName
      state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.recordId).data.date.value = new Date().toLocaleString()
      state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.recordId).id = payload.value
    },
    updateEmployeeSkillLevel (state, payload) {
      state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.recordId).data.level.value = payload.value
      state.employees.find(employee => employee.id === payload.employeeId).skills.find(skill => skill.id === payload.recordId).data.date.value = new Date().toLocaleString()
    }
  },
  actions: {
    addEmployee: (context, payload) => {
      if (this.getEmployees().find(employee => employee.id !== payload.id)) {
        context.commit('addEmployee', payload)
      }
    }
  },
  getters: {
    getEmployees: state => state.employees,
    getEmployeesHeaderNames: state => state.employeesHeaderNames,
    getEmployeesSkillTableHeaderNames: state => state.employeesSkillTableHeaderNames
  }
}
