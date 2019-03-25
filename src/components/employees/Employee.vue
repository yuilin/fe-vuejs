<template>
    <div class="employee">
        <div class="employee-info">
            <div class="employee-photo"><img src="../../assets/user-icons/4.png" class="user-icon" alt="username"></div>
            <hr class="mobile">
            <div class="employee-personal-data">
                <div class="employee-personal-data-item"><h2>Name Surname</h2></div>
                <div class="employee-personal-data-item">Email: test.test@test.com</div>
                <div class="employee-personal-data-item">Workplace: 11AA</div>
                <div class="employee-personal-data-item">Projects: Test project</div>
            </div>
        </div>
        <div class="tabs">
            <div class="labels">
                <label class="label-item" @click="openInfo" title="Info">Info</label>
                <label class="label-item" @click="openSkills" title="Skills">Skills</label>
            </div>
            <div class="employee-box box">
                <div class="tab-info">
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
                <div class="tab-skills">
                    <div class="skills-header">
                        <div class="skills-label"><h2>My Skills</h2>
                        </div>
                        <div class="add-icon">
                            <img src="../../assets/icons/add.png" alt="add">
                        </div>
                    </div>
                    <div class="skills-table">
                        <div class="skills-table-row skills-table-header">
                            <div class="skills-table-item">Skill</div>
                            <div class="skills-table-item">Level</div>
                            <div class="skills-table-item">Date update</div>
                            <div class="skills-table-item">Actions</div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">
                                <router-link to="/skill">jQuery</router-link>
                            </div>
                            <div class="skills-table-item">7/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">
                                <router-link to="/skill">JavaScript</router-link>
                            </div>
                            <div class="skills-table-item">9/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">
                                <router-link to="/skill">Powerpoint</router-link>
                            </div>
                            <div class="skills-table-item">5/10</div>
                            <div class="skills-table-item">01.01.1970</div>
                            <div class="skills-table-item"><img src="../../assets/icons/edit.png" alt="edit"> <img
                                    src="../../assets/icons/delete.png" alt="delete"></div>
                        </div>
                        <div class="skills-table-row">
                            <div class="skills-table-item">
                                <router-link to="/skill">Java</router-link>
                            </div>
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
      document.getElementsByClassName('tab-info')[0].style.display = 'inline'
      document.getElementsByClassName('tab-skills')[0].style.display = 'none'
    },
    openSkills () {
      document.getElementsByClassName('tab-info')[0].style.display = 'none'
      document.getElementsByClassName('tab-skills')[0].style.display = 'inline'
    }
  }
}
</script>

<style scoped>
    .employee-info, .info-items {
        display: flex;
    }

    @media screen and (max-width: 400px) {
        .employee-info, .info-items {
            display: block;
        }
    }

    .employee-photo {
        display: flex;
        height: 200px;
        width: 200px;
        margin: 50px;
    }

    .employee-personal-data {
        text-align: left;
        margin-top: 20px;
    }

    .employee-personal-data-item {
        padding: 10px;
    }

    .employee-box {
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

    .labels {
        text-align: left;
        box-shadow: 0 0 1px 0 #afafaf, inset 0 0 1px 0 #afafaf;
        border-radius: 10px 10px 0 0;
        padding: 10px;
        width: 110px;
    }

    .label-item {
        padding: 10px;
        cursor: pointer;
    }

    .tab-skills {
        display: none;
    }

    .skills-table {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        display: table;
    }

    .skills-table-header {
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

    .skills-label {
        display: inline-block;
    }

    .skills-header {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .add-icon {
        text-align: right;
        float: right;
        margin-top: 30px;
    }

    @media screen and (max-width: 400px) {
        .labels {
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            text-align: center;
            width: 90%;
            border-radius: 10px;
        }

        .skills-header, .skills-table {
            width: 100%;
        }

        .info-items {
            padding-top: 20px;
        }

        .info-item, .employee-personal-data-item {
            padding: 5px;
        }

        .employee-personal-data {
            padding-left: 35px;
        }
    }
</style>
