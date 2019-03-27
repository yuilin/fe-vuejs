<template>
    <div class="search-box box">
        <div class="search-box-row search-box-header">
            <div v-for="(headerName, index) in headerNames" v-bind:key="index"
                 :class="headerName.display === true ? 'search-item' : 'search-item ' + headerName.display">
                {{headerName.name}}
            </div>
        </div>
        <div v-for="(row, index) in data" v-bind:key="index" class="search-box-row">
            <div v-for="(r, i) in row" v-bind:key="i"
                 :class="r.display === true ? 'search-item' : 'search-item ' + r.display">
                <router-link :to="link">{{r.value}}</router-link>
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
    link: String
  }
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
    }
</style>
