<template>
    <div class="skills">
        <h1>Skills</h1>
        <myFilter parent="Skills"></myFilter>
        <myTable :headerNames="headerNames" :data="skills" link="/skill"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  data () {
    return {
      skills: Array,
      headerNames: Array
    }
  },
  created: function () {
    this.skills = [
      {
        title: {
          value: 'HTML'
        },
        type: {
          value: 'Technology'
        },
        category: {
          value: 'Frontend'
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
          value: 'Markup'
        }
      },
      {
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
          value: 'Markup'
        }
      },
      {
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
          value: 'Programming language'
        }
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
    ]
    this.headerNames = [
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
  }
}
</script>

<style scoped>
    .skills {
        margin: 50px;
    }

    @media screen and (max-width: 800px) {
        .skills {
            margin: 40px 0 0 0;
        }
    }
</style>
