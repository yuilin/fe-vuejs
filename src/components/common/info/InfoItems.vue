<template>
    <div class="info-items">
        <InfoItem v-for="(item, index) in items" v-bind:key="index" :item="item"></InfoItem>
    </div>
</template>

<script>
import InfoItem from '@/components/common/info/InfoItem'

export default {
  name: 'infoItems',
  components: {InfoItem},
  props: {
    items: Array
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
