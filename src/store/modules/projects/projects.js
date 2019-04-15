export default {
  state: {
    projects: [
      {
        id: 1,
        name: 'Project 1',
        manager: 3,
        department: 1
      },
      {
        id: 2,
        name: 'Project 2',
        manager: 4,
        department: 1
      },
      {
        id: 3,
        name: 'Project 3',
        manager: 5,
        department: 2
      },
      {
        id: 4,
        name: 'Project 4',
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
    ]
  },
  getters: {
    getProjects: state => state.projects,
    getProjectsHeaderNames: state => state.projectsHeaderNames
  }
}
