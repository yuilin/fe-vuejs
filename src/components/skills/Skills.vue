<template>
    <div class="skills">
        <h1>Skills</h1>
        <myFilter parent="Skills"></myFilter>
        <Search :headerNames="headerNames" :data="skills" link="/skill"></Search>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import Search from '@/components/common/Search'

export default {
  components: {Search, Pagination, myFilter},
  data () {
    return {
      skills: [],
      headerNames: []
    }
  },
  created: function () {
    this.skills = [
      {
        title: {
          value: 'HTML',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '5',
          display: 'not-mobile'
        },
        employees: {
          value: '20',
          display: true
        },
        projects: {
          value: '5',
          display: true
        },
        tags: {
          value: 'Markup',
          display: true
        }
      },
      {
        title: {
          value: 'CSS',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '3',
          display: 'not-mobile'
        },
        employees: {
          value: '12',
          display: true
        },
        projects: {
          value: '5',
          display: true
        },
        tags: {
          value: 'Markup',
          display: true
        }
      },
      {
        title: {
          value: 'JavaScript',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: 'ES2018',
          display: 'not-mobile'
        },
        employees: {
          value: '10',
          display: true
        },
        projects: {
          value: '5',
          display: true
        },
        tags: {
          value: 'Programming language',
          display: true
        }
      },
      {
        title: {
          value: 'TypeScript',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '3.2.0',
          display: 'not-mobile'
        },
        employees: {
          value: '9',
          display: true
        },
        projects: {
          value: '3',
          display: true
        },
        tags: {
          value: 'Programming language',
          display: true
        }
      },
      {
        title: {
          value: 'React',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '3.16.0',
          display: 'not-mobile'
        },
        employees: {
          value: '8',
          display: true
        },
        projects: {
          value: '5',
          display: true
        },
        tags: {
          value: 'Framework',
          display: true
        }
      },
      {
        title: {
          value: 'Vue',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '3.2.0',
          display: 'not-mobile'
        },
        employees: {
          value: '6',
          display: true
        },
        projects: {
          value: '2',
          display: true
        },
        tags: {
          value: 'Framework',
          display: true
        }
      },
      {
        title: {
          value: 'Angular',
          display: true
        },
        type: {
          value: 'Technology',
          display: true
        },
        category: {
          value: 'Frontend',
          display: true
        },
        version: {
          value: '7.2.5',
          display: 'not-mobile'
        },
        employees: {
          value: '7',
          display: true
        },
        projects: {
          value: '3',
          display: true
        },
        tags: {
          value: 'Markup',
          display: true
        }
      }
    ]
    this.headerNames = [
      {
        name: 'Title',
        display: true
      },
      {
        name: 'Type',
        display: true
      },
      {
        name: 'Category',
        display: true
      },
      {
        name: 'Version',
        display: 'not-mobile'
      },
      {
        name: 'Employees',
        display: true
      },
      {
        name: 'Projects',
        display: true
      },
      {
        name: 'Tags',
        display: true
      }
    ]
  }
}
</script>

<style scoped>
    .skills {
        margin: 50px;
    }

    .skill-search-box {
        width: 700px;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        display: table;
    }

    .skill-search-box-header {
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 0 10px 3px #afafaf;
    }

    .skill-search-box-row {
        display: table-row;
        text-align: left;
    }

    .skill-search-item {
        display: table-cell;
        padding: 10px;
    }

    @media screen and (max-width: 800px) {
        .skill-search-box {
            width: 100%;
            padding: 0;
        }

        .skills {
            margin: 40px 0 0 0;
        }

        .skill-search-item {
            padding: 5px;
        }

        .not-mobile {
            display: none;
        }

        .skill-search-box {
            margin-top: 20px;
        }
    }
</style>
