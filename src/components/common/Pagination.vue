<template>
    <div class="pagination" v-if="data.length > 10">
        <button class="pagination-item box" @click="previousPage(1)">&lt;</button>
        <button v-if="newPage > 3" class="pagination-item box" @click="previousPage(3)">{{newPage - 3}}</button>
        <button v-if="newPage > 2" class="pagination-item box" @click="previousPage(2)">{{newPage - 2}}</button>
        <button v-if="newPage > 1" class="pagination-item box" @click="previousPage(1)">{{newPage - 1}}</button>
        <button class="pagination-item box">{{newPage}}</button>
        <button v-if="data.length > 10 * newPage" class="pagination-item box" @click="nextPage(1)">
            {{newPage + 1}}
        </button>
        <button v-if="data.length > 10 * (newPage + 1)" class="pagination-item box" @click="nextPage(2)">
            {{newPage + 2}}
        </button>
        <button v-if="data.length > 10 * (newPage + 2)" class="pagination-item box" @click="nextPage(3)">
            {{newPage + 3}}
        </button>
        <button class="pagination-item box" @click="nextPage(1)">></button>
    </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {
      newPage: this.page
    }
  },
  props: {
    data: Array,
    page: Number
  },
  methods: {
    previousPage (i) {
      if (this.newPage > i) {
        this.newPage -= i
        this.pageChanged()
      }
    },
    nextPage (i) {
      if (this.data.length > 10 * (this.newPage + i - 1)) {
        this.newPage += i
        this.pageChanged()
      }
    },
    pageChanged () {
      this.$emit('pageChanged', this.newPage)
    }
  }
}
</script>

<style scoped>
    .pagination {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        width: 130px;
        height: 40px;
    }

    .pagination-item {
        border-radius: 5px;
        box-shadow: inset 0 0 5px 1px #afafaf;
        margin: 4px;
    }
</style>
