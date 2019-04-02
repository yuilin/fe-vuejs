<template>
    <div class="employees">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <myTable :headerNames="headerNames" :data="employees"  link="/employees/" type="Employee"></myTable>
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
      employees: Array,
      headerNames: Array
    }
  },
  created () {
    this.employees = this.$store.getters['getEmployees']
    this.headerNames = this.$store.getters['getEmployeesHeaderNames']
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
