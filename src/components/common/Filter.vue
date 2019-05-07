<template>
    <div class="filter-box box">
        <input class="filter-item"
               id="Filter1"
               type="text"
               v-if="parent === 'Employees'"
               placeholder="Name / Surname"
               :value="filter1"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter5"
               type="text"
               v-else-if="parent === 'Skills'"
               placeholder="Skill title"
               :value="filter5"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter9"
               type="text"
               v-else-if="parent === 'Departments'"
               placeholder="Name"
               :value="filter9"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter11"
               type="text"
               v-else-if="parent === 'Projects'"
               placeholder="Name"
               :value="filter11"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter14"
               type="text"
               v-else-if="parent === 'Project'"
               placeholder="Name / Surname"
               :value="filter14"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter2"
               type="text"
               v-if="parent === 'Employees'"
               placeholder="Skill"
               :value="filter2"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter6"
               type="text"
               v-else-if="parent === 'Skills'"
               placeholder="Type"
               :value="filter6"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter10"
               type="text"
               v-else-if="parent === 'Departments'"
               placeholder="Manager"
               :value="filter10"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter12"
               type="text"
               v-else-if="parent === 'Projects'"
               placeholder="Manager"
               :value="filter12"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter15"
               type="text"
               v-else-if="parent === 'Project'"
               placeholder="Position"
               :value="filter15"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter3"
               type="text"
               v-if="parent === 'Employees'"
               placeholder="Project"
               :value="filter3"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter7"
               type="text"
               v-else-if="parent === 'Skills'"
               placeholder="Category"
               :value="filter7"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter13"
               type="text"
               v-else-if="parent === 'Projects'"
               placeholder="Department"
               :value="filter13"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter16"
               type="text"
               v-else-if="parent === 'Project'"
               placeholder="Skills"
               :value="filter16"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter4"
               type="text"
               v-if="parent === 'Employees'"
               placeholder="Department"
               :value="filter4"
               @input="updateFilter">
        <input class="filter-item"
               id="Filter8"
               type="text"
               v-else-if="parent === 'Skills'"
               placeholder="Tags"
               :value="filter8"
               @input="updateFilter">
        <mySwitch v-else-if="parent === 'Project'" @changed="getSwitchValue"></mySwitch>
    </div>
</template>

<script>
import mySwitch from '@/components/common/Switch'

export default {
  name: 'myFilter',
  components: {mySwitch},
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
    },
    filter5 () {
      return this.$store.getters['getFilter5']
    },
    filter6 () {
      return this.$store.getters['getFilter6']
    },
    filter7 () {
      return this.$store.getters['getFilter7']
    },
    filter8 () {
      return this.$store.getters['getFilter8']
    },
    filter9 () {
      return this.$store.getters['getFilter9']
    },
    filter10 () {
      return this.$store.getters['getFilter10']
    },
    filter11 () {
      return this.$store.getters['getFilter11']
    },
    filter12 () {
      return this.$store.getters['getFilter12']
    },
    filter13 () {
      return this.$store.getters['getFilter13']
    },
    filter14 () {
      return this.$store.getters['getFilter14']
    },
    filter15 () {
      return this.$store.getters['getFilter15']
    },
    filter16 () {
      return this.$store.getters['getFilter16']
    }
  },
  methods: {
    updateFilter (e) {
      this.$store.commit('set' + e.target.id, e.target.value)
    },
    getSwitchValue (e) {
      this.$emit('changed', e)
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
