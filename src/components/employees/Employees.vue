<template>
    <div class="employees">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/employees/" type="Employee"></myTable>
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
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getEmployeesHeaderNames']
  },
  computed: {
    filter1 () {
      return this.$store.getters['getFilter1']
    },
    filter2 () {
      return this.$store.getters['getFilter2']
    },
    filter3 () {
      return this.$store.getters['getFilter3']
    },
    filter4 () {
      return this.$store.getters['getFilter4']
    },
    data () {
      let data = this.parse(this.$store.getters['getEmployees'])
      if (this.filter1 != null && this.filter1.length > 0) {
        data = Array.from(new Set(data.filter(data => data.data.name.value.toUpperCase().search(this.filter1.toUpperCase()) > -1)
          .concat(data.filter(data => data.data.surname.value.toUpperCase().search(this.filter1.toUpperCase()) > -1))))
      }
      if (this.filter2 != null && this.filter2.length > 0) {
        data = data.filter(data => data.data.skills.value.toUpperCase().search(this.filter2.toUpperCase()) > -1)
      }
      if (this.filter3 != null && this.filter3.length > 0) {
        data = data.filter(data => data.data.project.value.toUpperCase().search(this.filter3.toUpperCase()) > -1)
      }
      if (this.filter4 != null && this.filter4.length > 0) {
        data = data.filter(data => data.data.department.value.toUpperCase().search(this.filter4.toUpperCase()) > -1)
      }
      return data
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let parsed = {
            id: object.id,
            name: object.personalData.credentials.name,
            surname: object.personalData.credentials.surname,
            info: object.info.find(i => i.name === 'Job Details').items.map((object) => {
              return {
                position: object.find(o => o.name === 'Position').value,
                department: object.find(o => o.name === 'Department').value
              }
            })[0],
            project: object.personalData.items.find(item => item.name === 'Project').value,
            skills: object.skills.map((object) => {
              return object.data.skill.value
            }).join(' ')
          }
          return {
            id: parsed.id,
            data: {
              name: {value: parsed.name, link: true},
              surname: {value: parsed.surname, link: true},
              position: {value: parsed.info.position},
              department: {value: parsed.info.department},
              project: {value: parsed.project},
              skills: {value: parsed.skills}
            }
          }
        }
      )
    }
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
