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
                <label class="label-item active-tab" @click="openInfo" id="tab1" title="Info">Info</label>
                <label class="label-item" @click="openSkills" id="tab2" title="Skills">Skills</label>
            </div>
            <div class="employee-box box">
                <TabInfo :data="infoBox"></TabInfo>
                <div class="tab-skills">
                    <div class="skills-header">
                        <div class="skills-label"><h2>My Skills</h2>
                        </div>
                        <div class="add-icon">
                            <img src="../../assets/icons/add.png" alt="add">
                        </div>
                    </div>
                    <div class="skills-table">
                        <div class="skills-table-header">
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
import TabInfo from '@/components/common/info/TabInfo'

export default {
  components: {TabInfo},
  methods: {
    openInfo () {
      document.querySelector('#tab1')
      document.querySelector('.tab-info').style.display = 'inline'
      document.querySelector('#tab1').classList.add('active-tab')
      document.querySelector('.tab-skills').style.display = 'none'
      document.querySelector('#tab2').classList.remove('active-tab')
    },
    openSkills () {
      document.querySelector('.tab-info').style.display = 'none'
      document.querySelector('#tab2').classList.add('active-tab')
      document.querySelector('.tab-skills').style.display = 'inline'
      document.querySelector('#tab1').classList.remove('active-tab')
    }
  },
  data () {
    return {
      infoBox: []
    }
  },
  created: function () {
    this.infoBox = [
      {
        header: 'Personal info',
        items:
          [
            [
              {
                name: 'Other ID',
                value: '654321'
              },
              {
                name: 'Start Date',
                value: '01-01-1970'
              },
              {
                name: 'Gender',
                value: 'Male'
              },
              {
                name: 'Birthday',
                value: '01-01-1970'
              }]
          ]
      },
      {
        header: 'Job Details',
        items:
          [
            [
              {
                name: 'Job Title',
                value: 'test test'
              },
              {
                name: 'Supervisor',
                value: 'Test Test'
              },
              {
                name: 'Department',
                value: 'Test'
              }]
          ]
      }
    ]
  }
}
</script>

<style scoped>
    .employee-info {
        display: flex;
    }

    @media screen and (max-width: 400px) {
        .employee-info {
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

    .labels {
        text-align: left;
        box-shadow: 0 0 5px 0 #afafaf, inset 0 0 1px 1px #afafaf;
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
        display: table-row;
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

    .user-icon {
        height: 200px;
        width: 200px;
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

        .employee-personal-data-item {
            padding: 5px;
        }

        .employee-personal-data {
            padding-left: 35px;
        }
    }
</style>
