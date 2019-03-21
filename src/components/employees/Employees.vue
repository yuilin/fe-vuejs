<template>
    <div id="employees">
        <h1>Employees</h1>
        <div id="employee-filter-box" class="box">
            <input class="employee-filter-item" type="text" placeholder="Name / Surname">
            <input class="employee-filter-item" type="text" placeholder="Skill">
            <input class="employee-filter-item" type="text" placeholder="Project">
            <input class="employee-filter-item" type="text" placeholder="Department">
        </div>
        <div id="employee-search-box" class="box">
            <div class="employee-search-box-row" id="employee-search-box-header">
                <div class="employee-search-item">Name</div>
                <div class="employee-search-item">Surname</div>
                <div class="employee-search-item">Position</div>
                <div class="employee-search-item">Project</div>
                <div class="employee-search-item">Department</div>
                <div class="employee-search-item">Skills</div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
            <div class="employee-search-box-row">
                <div class="employee-search-item"><router-link to="/employee">John</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Due</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Developer</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test project</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Test Department</router-link></div>
                <div class="employee-search-item"><router-link to="/employee">Java</router-link></div>
            </div>
        </div>
        <div id="employee-pagination">
            <button class="employee-pagination-item box"><</button>
            <button class="employee-pagination-item box">1</button>
            <button class="employee-pagination-item box">2</button>
            <button class="employee-pagination-item box">3</button>
            <button class="employee-pagination-item box">></button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
  #employees {
      margin: 50px;
  }
  #employee-filter-box {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
  }
  .employee-filter-item {
      margin: 5px;
  }
  #employee-search-box {
      width: 700px;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
      padding: 20px;
      display: table;
  }
  #employee-search-box-header {
      border-radius: 10px 10px 0 0;
      box-shadow: inset 0 0 10px 3px #afafaf;
  }
  .employee-search-box-row {
      display: table-row;
      text-align: left;
  }
  .employee-search-item {
      display: table-cell;
      padding: 10px;
  }
  #employee-pagination {
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      width: 130px;
      height: 40px;
  }
  .employee-pagination-item {
      border-radius: 5px;
      box-shadow: inset 0 0 5px 1px #afafaf;
      margin: 4px;
      padding: 4px;
  }
</style>
