<template>
    <div class="employees">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <Search :headerNames="headerNames" :data="employees" link="/employee"></Search>
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
      employees: [],
      headerNames: []
    }
  },
  created: function () {
    this.employees = [
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
    this.headerNames = [
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
  }
}
</script>

<style scoped>
    .employees {
        margin: 50px;
    }

    @media screen and (max-width: 1200px) {
        .employees {
            margin: 40px 0 0 0;
        }
    }
</style>
