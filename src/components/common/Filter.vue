<template>
    <div class="filter-box box">
        <input class="filter-item" type="text" :placeholder="parent === 'Employees' ? 'Name / Surname' : 'Skill title'">
        <input class="filter-item" type="text" :placeholder="parent === 'Employees' ? 'Skill' : 'Type'">
        <input class="filter-item" type="text" :placeholder="parent === 'Employees' ? 'Project' : 'Category'">
        <input class="filter-item" type="text" :placeholder="parent === 'Employees' ? 'Department' : 'Tags'">
    </div>
</template>

<script>
export default {
  name: 'myFilter',
  props: {
    parent: String
  }
}
</script>

<style scoped>
    .filter-box {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
    }

    .filter-item {
        margin: 5px;
        padding: 6px;
    }

    @media screen and (max-width: 1200px) {
        .filter-box {
            width: 100%;
            padding: 0;
        }
    }
</style>
