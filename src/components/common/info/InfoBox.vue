<template>
    <div class="info box">
        <div class="info-header"><h2>{{infoHeader}}</h2></div>
        <hr>
        <InfoItems v-for="(items, index) in infoItems" v-bind:key="index"
                   :items="items">
        </InfoItems>
    </div>
</template>

<script>
import InfoItems from '@/components/common/info/InfoItems'

export default {
  name: 'InfoBox',
  components: {InfoItems},
  props: {
    infoHeader: String,
    infoItems: Array
  }
}
</script>

<style scoped>
    .info {
        width: auto;
        margin: 10px;
        text-align: left;
    }

    .info-header {
        padding-left: 10px;
        padding-top: 5px;
    }
</style>
