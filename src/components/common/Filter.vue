<template>
    <div class="filter-box box">
        <input class="filter-item" id="Filter1" type="text" :placeholder="parent === 'Employees' ? 'Name / Surname' : 'Skill title'" :value="filter1" @input="updateFilter">
        <input class="filter-item" id="Filter2" type="text" :placeholder="parent === 'Employees' ? 'Skill' : 'Type'" :value="filter2" @input="updateFilter">
        <input class="filter-item" id="Filter3" type="text" :placeholder="parent === 'Employees' ? 'Project' : 'Category'" :value="filter3" @input="updateFilter">
        <input class="filter-item" id="Filter4" type="text" :placeholder="parent === 'Employees' ? 'Department' : 'Tags'" :value="filter4" @input="updateFilter">
    </div>
</template>

<script>
export default {
  name: 'myFilter',
  props: {
    parent: String
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
    }
  },
  methods: {
    updateFilter (e) {
      this.$store.commit('set' + e.target.id, e.target.value)
    }
  }
}
</script>

<style scoped>
    .filter-box {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
    }

    .filter-item {
        margin: 5px;
        padding: 6px;
    }

    @media screen and (max-width: 1200px) {
        .filter-box {
            width: 100%;
            padding: 0;
        }
    }
</style>
