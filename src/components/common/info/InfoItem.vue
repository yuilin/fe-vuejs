<template>
    <div v-if="item.link" class="info-item">{{item.name}}:
        <a :href="item.value" target="_blank">{{item.value}}</a>
    </div>
    <div v-else-if="item.linkTo" class="info-item">{{item.name}}:
        <router-link :to="item.linkTo">{{item.value}}</router-link>
    </div>
    <div v-else-if="item.description" class="info-item info-textarea">
        <textarea class="info-textarea" :placeholder="item.description"></textarea>
    </div>
    <div v-else-if="item.button" class="info-item info-button">
        <button>{{item.button}}</button>
    </div>
    <div v-else class="info-item">{{item.name}}: {{item.value}}</div>
</template>

<script>

/**
 * A component to display info about employee or skill.
 */
export default {
  name: 'InfoItem',
  props: {
    item: Object
  }
}
</script>

<style scoped>
    .info-item {
        padding: 5pt
    }

    .info-textarea {
        height: 80px;
        width: 100%;
    }

    .info-button {
        padding-top: 0;
    }

    @media screen and (max-width: 400px) {

        .info-item {
            padding: 2pt 5pt
        }
    }
</style>
