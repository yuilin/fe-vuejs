<template>
    <div class="search-box box">
        <div class="search-box-row search-box-header">
            <div v-for="(headerName, index) in headerNames" v-bind:key="index"
                 :class="headerName.display ? 'search-item ' + headerName.display : 'search-item'">{{headerName.name}}
            </div>
        </div>
        <div v-for="(row, index) in data" v-bind:key="index" class="search-box-row">
            <div v-for="(r, i) in row.searchFields" v-bind:key="i" :class="r.display ? 'search-item ' + r.display : 'search-item'">
                <router-link v-if="type === 'Employee'" :to="link + row.info[0].items[0][0].value">{{r.value}}</router-link>
                <router-link v-else :to="link">{{r.value}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myTable',
  props: {
    headerNames: Array,
    data: Array,
    link: String,
    type: String
  },
  methods: {}
}
</script>

<style scoped>

    .search-box {
        width: 700px;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        display: table;
    }

    .search-box-header {
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 0 10px 3px #afafaf;
    }

    .search-box-row {
        display: table-row;
        text-align: left;
    }

    .search-item {
        display: table-cell;
        padding: 10px;
    }

    @media screen and (max-width: 1200px) {
        .search-box {
            width: 100%;
            padding: 0;
        }

        .search-box {
            margin-top: 20px;
        }

        .not-mobile {
            display: none;
        }
    }
</style>
