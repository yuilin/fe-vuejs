export default {
  state: {
    projects: [
      {
        id: 1,
        name: 'Small backend project',
        manager: 3,
        department: 1
      },
      {
        id: 2,
        name: 'Small project',
        manager: 4,
        department: 1
      },
      {
        id: 3,
        name: 'Senior project',
        manager: 5,
        department: 2
      },
      {
        id: 4,
        name: 'Large project',
        manager: 6,
        department: 1
      },
      {
        id: 5,
        name: 'Project 5',
        manager: 7,
        department: 2
      },
      {
        id: 6,
        name: 'Project 6',
        manager: 8,
        department: 2
      },
      {
        id: 7,
        name: 'Project 7',
        manager: 9,
        department: 2
      },
      {
        id: 8,
        name: 'Project 8',
        manager: 10,
        department: 2
      }
    ],
    projectsHeaderNames: [
      {
        name: 'Name'
      },
      {
        name: 'Manager'
      },
      {
        name: 'Department'
      },
      {
        name: 'Employees'
      }
    ],
    projectHeaderNames: [
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
        name: 'Skills'
      },
      {
        name: 'Actions',
        display: 'editable'
      }
    ]
  },
  mutations: {
    updateProject (state, payload) {
      state.projects.find(project => project.id === payload.projectId).manager = payload.manager
    }
  },
  getters: {
    getProjects: state => state.projects,
    getProjectsHeaderNames: state => state.projectsHeaderNames,
    getProjectHeaderNames: state => state.projectHeaderNames
  }
}
