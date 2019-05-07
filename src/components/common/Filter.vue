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

/**
 * Component with all filters.
 */
export default {
  name: 'myFilter',
  components: {mySwitch},
  props: {
    parent: String
  },
  computed: {
    /**
     * Name / Surname filter for employees.
     * @returns {*}
     */
    filter1 () {
      return this.$store.getters['getFilter1']
    },
    /**
     * Skill filter for employees.
     * @returns {*}
     */
    filter2 () {
      return this.$store.getters['getFilter2']
    },
    /**
     * Project filter for employees.
     * @returns {*}
     */
    filter3 () {
      return this.$store.getters['getFilter3']
    },
    /**
     * Department filter for employees.
     * @returns {*}
     */
    filter4 () {
      return this.$store.getters['getFilter4']
    },
    /**
     * Skill filter for skills.
     * @returns {*}
     */
    filter5 () {
      return this.$store.getters['getFilter5']
    },
    /**
     * Type filter for skills.
     * @returns {*}
     */
    filter6 () {
      return this.$store.getters['getFilter6']
    },
    /**
     * Category filter for skills.
     * @returns {*}
     */
    filter7 () {
      return this.$store.getters['getFilter7']
    },
    /**
     * Tags filter for skills.
     * @returns {*}
     */
    filter8 () {
      return this.$store.getters['getFilter8']
    },
    /**
     * Name filter for departments.
     * @returns {*}
     */
    filter9 () {
      return this.$store.getters['getFilter9']
    },
    /**
     * Manager filter for departments.
     * @returns {*}
     */
    filter10 () {
      return this.$store.getters['getFilter10']
    },
    /**
     * Name filter for projects.
     * @returns {*}
     */
    filter11 () {
      return this.$store.getters['getFilter11']
    },
    /**
     * Manager filter for projects
     * @returns {*}
     */
    filter12 () {
      return this.$store.getters['getFilter12']
    },
    /**
     * Department filter for projects.
     * @returns {*}
     */
    filter13 () {
      return this.$store.getters['getFilter13']
    },
    /**
     * Name / Surname filter for project
     * @returns {*}
     */
    filter14 () {
      return this.$store.getters['getFilter14']
    },
    /**
     * Position filter for project
     * @returns {*}
     */
    filter15 () {
      return this.$store.getters['getFilter15']
    },
    /**
     * Skills filter for project
     * @returns {*}
     */
    filter16 () {
      return this.$store.getters['getFilter16']
    }
  },
  methods: {
    /**
     * Update data in filter
     * @param value
     */
    updateFilter (value) {
      this.$store.commit('set' + value.target.id, value.target.value)
    },
    /**
     * Throw the value from switch
     * @param value
     */
    getSwitchValue (value) {
      this.$emit('changed', value)
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
