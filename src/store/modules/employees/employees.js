export default {
  state: {
    employees: [
      {
        id: 1,
        auth: {
          login: 'dm1',
          password: 'dm1'
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
              value: '-'
            }
          ],
          icon: 1
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Department Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 1
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 2,
        auth: {
          login: 'dm2',
          password: 'dm2'
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
              value: '-'
            }
          ],
          icon: 2
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Department Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 3,
        auth: {
          login: 'pm1',
          password: 'pm1'
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
              value: 1
            }
          ],
          icon: 3
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 1
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 4,
        auth: {
          login: 'pm2',
          password: 'pm2'
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
              value: 2
            }
          ],
          icon: 4
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 1
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 5,
        auth: {
          login: 'pm3',
          password: 'pm3'
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
              value: 3
            }
          ],
          icon: 5
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 6,
        auth: {
          login: 'pm4',
          password: 'pm4'
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
              value: 4
            }
          ],
          icon: 6
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 1
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 7,
        auth: {
          login: 'pm5',
          password: 'pm5'
        },
        personalData: {
          credentials: {
            name: 'Peck',
            surname: 'Greg'
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
              value: 5
            }
          ],
          icon: 7
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 8,
        auth: {
          login: 'pm6',
          password: 'pm6'
        },
        personalData: {
          credentials: {
            name: 'Vice',
            surname: 'Lee'
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
              value: 6
            }
          ],
          icon: 8
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 9,
        auth: {
          login: 'pm7',
          password: 'pm7'
        },
        personalData: {
          credentials: {
            name: 'West',
            surname: 'Clint'
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
              value: 7
            }
          ],
          icon: 9
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 10,
        auth: {
          login: 'pm8',
          password: 'pm8'
        },
        personalData: {
          credentials: {
            name: 'PM',
            surname: '8'
          },
          items: [
            {
              name: 'E-mail',
              value: 'PM.10@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 8
            }
          ],
          icon: 10
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Project Manager'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 11,
        auth: {
          login: 'd1',
          password: 'd1'
        },
        personalData: {
          credentials: {
            name: 'Developer',
            surname: 'First'
          },
          items: [
            {
              name: 'E-mail',
              value: 'd1@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 1
            }
          ],
          icon: 11
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Developer'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
            }
          }
        ]
      },
      {
        id: 12,
        auth: {
          login: 'd2',
          password: 'd2'
        },
        personalData: {
          credentials: {
            name: 'Developer',
            surname: 'Second'
          },
          items: [
            {
              name: 'E-mail',
              value: 'd2@test.ru',
              type: 'e-mail'
            },
            {
              name: 'Workplace',
              value: '12AA'
            },
            {
              name: 'Project',
              value: 1
            }
          ],
          icon: 12
        },
        info: [
          {
            name: 'Personal Info',
            items: [
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
          },
          {
            name: 'Job Details',
            items: [
              {
                name: 'Position',
                value: 'Developer'
              },
              {
                name: 'Supervisor'
              },
              {
                name: 'Department',
                value: 2
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
                value: 5,
                options: 'levelList'
              },
              date: {
                value: '23.04.2019, 14:37:14',
                editable: false
              }
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
        name: 'Actions',
        display: 'editable'
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
              value: payload.position
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
      state.employees.find(employee => employee.id === payload.employeeId).skills.push({
        id: payload.value,
        data: {
          skill: {
            value: payload.skillName,
            link: true,
            options: 'skillList'
          },
          level: {
            value: '1',
            options: 'levelList'
          },
          date: {
            value: new Date().toLocaleString(),
            editable: false
          }
        }
      })
    },
    deleteEmployeeSkill (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .splice(state.employees
          .find(employee => employee.id === payload.employeeId).skills
          .indexOf(state.employees
            .find(employee => employee.id === payload.employeeId).skills
            .find(skill => skill.id === payload.skillId)), 1)
    },
    updateEmployeeSkill (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .find(skill => skill.id === payload.recordId).data.skill.value = payload.skillName
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .find(skill => skill.id === payload.recordId).data.date.value = new Date().toLocaleString()
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .find(skill => skill.id === payload.recordId).id = Number(payload.value)
    },
    updateEmployeeSkillLevel (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .find(skill => skill.id === payload.recordId).data.level.value = payload.value
      state.employees
        .find(employee => employee.id === payload.employeeId).skills
        .find(skill => skill.id === payload.recordId).data.date.value = new Date().toLocaleString()
    },
    updateEmployeePosition (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).info
        .find(info => info.name === 'Job Details').items
        .find(item => item.name === 'Position').value = payload.position
    },
    updateEmployeeProject (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).personalData.items
        .find(item => item.name === 'Project').value = payload.projectId
    },
    updateEmployeeDepartment (state, payload) {
      state.employees
        .find(employee => employee.id === payload.employeeId).info
        .find(info => info.name === 'Job Details').items
        .find(item => item.name === 'Department').value = payload.departmentId
    }
  },
  actions: {
    addEmployee: (context, payload) => {
      if (this.getEmployees()
        .find(employee => employee.id !== payload.id)) {
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
