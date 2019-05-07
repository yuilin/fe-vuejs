<template>
    <div class="info-items">
        <InfoItem :item="items"></InfoItem>
    </div>
</template>

<script>
import InfoItem from '@/components/common/info/InfoItem'

/**
 * A component to group InfoItem.
 */
export default {
  name: 'infoItems',
  components: {InfoItem},
  props: {
    items: Object
  },
  computed: {
    departments () {
      return this.$store.getters['getDepartments']
    },
    selectedEmployee () {
      return this.employees.find(employee => employee.id === Number(this.$route.params.id))
    },
    employees () {
      return this.$store.getters['getEmployees']
    }
  }
}
</script>

<style scoped>
    .info-items {
        display: flex;
    }

    @media screen and (max-width: 400px) {
        .info-items {
            padding-top: 20px;
            display: block;
        }
    }
</style>
