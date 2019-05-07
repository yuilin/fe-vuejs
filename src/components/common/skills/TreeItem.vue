<template>
    <div class="box">
        <div
                :class="{bold: isFolder}"
                @click="openSkill(item.link)"
                @dblclick="toggle">
            {{ item.name }}
            <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
        <div v-show="isOpen" v-if="isFolder">
            <TreeItem
                    class="item"
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
            ></TreeItem>
        </div>
    </div>
</template>

<script>

/**
 * Tree item for skills second tab.
 */
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder: function () {
      return this.item.children &&
        this.item.children.length
    }
  },
  methods: {
    /**
     * Open folders.
     */
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    /**
     * Open skill.
     * @param link the skill id
     */
    openSkill (link) {
      if (link) {
        this.$router.push('/skills/' + link)
      }
    }
  }
}
</script>

<style scoped>
    body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
    }

    .item {
        cursor: pointer;
        margin: 50px;
        padding: 20px;
    }

    .bold {
        font-weight: bold;
    }

    ul, li {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: none;
    }
</style>
