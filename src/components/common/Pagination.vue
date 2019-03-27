<template>
    <div class="pagination">
        <button class="pagination-item box">&lt;</button>
        <button class="pagination-item box">1</button>
        <button class="pagination-item box">2</button>
        <button class="pagination-item box">3</button>
        <button class="pagination-item box">></button>
    </div>
</template>

<script>
export default {
  name: 'Pagination'
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
