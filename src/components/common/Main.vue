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
                <TabInfo :data="infoTabData"></TabInfo>
                <TabSkills :data="skillsTabData"></TabSkills>
            </div>
        </div>
    </div>
</template>

<script>
import TabInfo from '@/components/common/info/TabInfo'
import TabSkills from '@/components/common/skills/TabSkills'

export default {
  name: 'Main',
  components: {TabSkills, TabInfo},
  props: {
    parent: String,
    infoTabData: [],
    skillsTabData: []
  },
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

        .employee-personal-data-item {
            padding: 5px;
        }

        .employee-personal-data {
            padding-left: 35px;
        }
    }
</style>
