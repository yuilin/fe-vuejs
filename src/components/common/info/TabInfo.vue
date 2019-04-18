<template>
    <div class="tab-info">
        <InfoBox v-for="(infoBox, index) in data" v-bind:key="index" :infoHeader="infoBox.name"
                 :infoItems="infoBox.items"></InfoBox>
    </div>
</template>

<script>
import InfoBox from '@/components/common/info/InfoBox'

export default {
  components: {InfoBox},
  name: 'TabInfo',
  props: {
    data: Array
  }
}
</script>

<style scoped>

</style>
