<template>
    <div class="info-items">
        <InfoItem :item="items"></InfoItem>
    </div>
</template>

<script>
import InfoItem from '@/components/common/info/InfoItem'

export default {
  name: 'infoItems',
  components: {InfoItem},
  props: {
    items: Object
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
