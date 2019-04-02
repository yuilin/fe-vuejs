export default {
  state: {
    employees: [
      {
        auth: {
          login: 'John',
          password: 'JohnDue'
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
          icon: 'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields: {
          name: {
            value: 'John'
          },
          surname: {
            value: 'Due'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon: 'icon'
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
          [
            {
              searchFields: {
                skill: {
                  value: 'Java'
                },
                level: {
                  value: 'level'
                },
                date: {
                  value: 'date'
                },
                action: {
                  value: 'action'
                }
              }
            }
          ],
          [
            {
              searchFields: {
                skill: {
                  value: 'Java'
                },
                level: {
                  value: 'level'
                },
                date: {
                  value: 'date'
                },
                action: {
                  value: 'action'
                }
              }
            }
          ]
        ],
        searchFields: {
          name: {
            value: 'Bill'
          },
          surname: {
            value: 'Bogus'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon: 'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields: {
          name: {
            value: 'Arden'
          },
          surname: {
            value: 'Liz'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon: 'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields: {
          name: {
            value: 'Dair'
          },
          surname: {
            value: 'Mick'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon: 'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields: {
          name: {
            value: 'Suzy'
          },
          surname: {
            value: 'Stock'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon: 'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields: {
          name: {
            value: 'Sato'
          },
          surname: {
            value: 'Mori'
          },
          position: {
            value: 'Developer'
          },
          project: {
            value: 'Test project'
          },
          department: {
            value: 'Test Department'
          },
          skills: {
            value: 'Java'
          }
        }
      },
      {
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
          icon:
            'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields:
          {
            name: {
              value: 'Peck'
            },
            surname: {
              value: 'Greg'
            },
            position: {
              value: 'Developer'
            },
            project: {
              value: 'Test project'
            },
            department: {
              value: 'Test Department'
            },
            skills: {
              value: 'Java'
            }
          }
      },
      {
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
          icon:
            'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields:
          {
            name: {
              value: 'Vice'
            },
            surname: {
              value: 'Lee'
            },
            position: {
              value: 'Developer'
            },
            project: {
              value: 'Test project'
            },
            department: {
              value: 'Test Department'
            },
            skills: {
              value: 'Java'
            }
          }
      },
      {
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
          icon:
            'icon'
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
            skill: {
              value: 'Java'
            },
            level: {
              value: 'level'
            },
            date: {
              value: 'date'
            },
            action: {
              value: 'action'
            }
          }
        ],
        searchFields:
          {
            name: {
              value: 'West'
            },
            surname: {
              value: 'Clint'
            },
            position: {
              value: 'Developer'
            },
            project: {
              value: 'Test project'
            },
            department: {
              value: 'Test Department'
            },
            skills: {
              value: 'Java'
            }
          }
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
  mutations: {},
  actions: {},
  getters: {
    getEmployees: state => state.employees,
    getEmployeesHeaderNames: state => state.employeesHeaderNames,
    getEmployeesSkillTableHeaderNames: state => state.employeesSkillTableHeaderNames
  }
}
