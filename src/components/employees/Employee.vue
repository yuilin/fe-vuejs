<template>
    <div id="employee">
        <div id="employee-info">
            <div id="employee-photo"><img src="../../assets/user-icons/4.png" id="user-icon" alt="username"></div>
            <div id="employee-personal-data">
                <div class="employee-personal-data-item"><h2>Name Surname</h2></div>
                <div class="employee-personal-data-item">Email: test.test@test.com</div>
                <div class="employee-personal-data-item">Workplace: 11AA</div>
                <div class="employee-personal-data-item">Projects: Test project</div>
            </div>
        </div>
        <div id="tabs">
            <div id="labels">
                <label class="label-item" @click="openInfo" title="Info">Info</label>
                <label class="label-item" @click="openSkills" title="Skills">Skills</label>
            </div>
            <div id="employee-box" class="box">
                <div id="tab-info">
                    <div class="info box">
                        <div class="info-header"><h2>Personal info</h2></div>
                        <hr>
                        <div class="info-items">
                            <div class="info-item">Other ID: 654321</div>
                            <div class="info-item">Start Date: 01-01-1970</div>
                            <div class="info-item">Gender: Male</div>
                            <div class="info-item">Birthday: 01-01-1970</div>
                        </div>
                    </div>
                    <br>
                    <div class="info box">
                        <div class="info-header"><h2>Job Details</h2></div>
                        <hr>
                        <div class="info-items">
                            <div class="info-item">Job Title: test test</div>
                            <div class="info-item">Supervisor: Test Test</div>
                            <div class="info-item">Department: Test</div>
                        </div>
                    </div>
                </div>
                <div id="tab-skills">
                    <div id="skills-header">
                        <div id="skills-label"><h2>My Skills</h2>
                        </div>
                        <div id="add-icon">
                            <img src="../../assets/icons/add.png" alt="add">
                        </div>
                    </div>
                    <div id="skills-table">
                        <div class="skills-table-row" id="skills-table-header">
                            <div class="skills-table-item">Skill</div>
                            <div class="skills-table-item">Level</div>
                            <div class="skills-table-item">Date update</div>
                            <div class="skills-table-item">Actions</div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">jQuery</div>
                            <div class="skills-table-item">7/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">JavaScript</div>
                            <div class="skills-table-item">9/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">Powerpoint</div>
                            <div class="skills-table-item">5/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">Java</div>
                            <div class="skills-table-item">7/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    openInfo () {
      document.getElementById('tab-info').style.display = 'inline'
      document.getElementById('tab-skills').style.display = 'none'
    },
    openSkills () {
      document.getElementById('tab-info').style.display = 'none'
      document.getElementById('tab-skills').style.display = 'inline'
    }
  }
}
</script>

<style scoped>
  #employee-info, .info-items {
      display: flex;
  }
  #employee-photo {
      display: flex;
      height: 200px;
      width: 200px;
      margin: 50px;
  }
  #employee-personal-data {
      text-align: left;
      margin-top: 20px;
  }
  .employee-personal-data-item {
      padding: 10px;
  }
  #employee-box {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      width: auto;
      padding: 20px;
      border-radius: 0 10px 10px 10px;
  }
  .info {
      width: auto;
      margin: 10px;
      text-align: left;
  }
  .info-header {
      padding-left: 10px;
      padding-top: 5px;
  }
  .info-item {
      padding: 20px;
  }
  #labels {
      text-align: left;
      box-shadow: 0 0 15px 1px #afafaf, inset 0 0 15px 1px #afafaf;
      border-radius: 10px 10px 0 0;
      padding: 10px;
      width: 110px;
  }
  .label-item {
      padding: 10px;
  }
  #tab-skills {
      display: none;
  }
  #skills-table {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
      display: table;
  }
  #skills-table-header {
      border-radius: 10px 10px 0 0;
      box-shadow: inset 0 0 10px 3px #afafaf;
  }
  .skills-table-row {
      display: table-row;
      box-shadow: inset 0 0 1px 0 #afafaf;
  }
  .skills-table-item {
      display: table-cell;
      padding: 10px;
  }
  #skills-label {
      display: inline-block;
  }
  #skills-header {
      width: 700px;
      margin-left: auto;
      margin-right: auto;
  }
  #add-icon {
    text-align: right;
      float: right;
      margin-top: 30px;
  }
</style>
