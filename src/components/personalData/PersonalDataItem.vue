<template>
    <div class="personal-data-item" v-if="type === 'header'"><h2>{{header}}</h2></div>
    <div class="personal-data-item" v-else-if="item.type === 'e-mail'">{{item.name}}: <a
            :href="'mailto:' + item.value">{{item.value}}</a></div>
    <div class="personal-data-item" v-else-if="item.type === 'link'">{{item.name}}: <a
            :href="'http://' + item.value" target="_blank">{{item.value}}</a>
    </div>
    <div class="personal-data-item" v-else>{{item.name}}: {{item.value}}</div>
</template>

<script>
export default {
  name: 'PersonalDataItem',
  props: {
    item: Object,
    type: String,
    header: String
  }
}
</script>

<style scoped>

    .personal-data-item {
        padding: 10px;
    }

    @media screen and (max-width: 400px) {

        .personal-data-item {
            padding: 5px;
        }
    }
</style>
