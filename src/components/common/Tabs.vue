<template>
    <div class="tabs">
        <div class="labels">
            <label class="label-item active-tab" @click="openTab1" id="tab1" :title="tab1">{{tab1}}</label>
            <label class="label-item" @click="openTab2" id="tab2" :title="tab2">{{tab2}}</label>
        </div>
        <div class="employee-box box">
            <TabInfo :data="infoTabData"></TabInfo>
            <TabSkills :data="skillsTabData"></TabSkills>
        </div>
    </div>
</template>

<script>
import TabInfo from '@/components/common/info/TabInfo'
import TabSkills from '@/components/common/skills/TabSkills'

export default {
  name: 'Tabs',
  components: {TabSkills, TabInfo},
  props: {
    infoTabData: Array,
    skillsTabData: Object,
    tab1: String,
    tab2: String
  },
  methods: {
    openTab1 () {
      document.querySelector('.tab-info').style.display = 'inline'
      document.querySelector('#tab1').classList.add('active-tab')
      document.querySelector('.tab-skills').style.display = 'none'
      document.querySelector('#tab2').classList.remove('active-tab')
    },
    openTab2 () {
      document.querySelector('.tab-info').style.display = 'none'
      document.querySelector('#tab2').classList.add('active-tab')
      document.querySelector('.tab-skills').style.display = 'inline'
      document.querySelector('#tab1').classList.remove('active-tab')
    }
  }
}
</script>

<style scoped>
    .labels {
        text-align: left;
        box-shadow: 0 0 5px 0 #afafaf, inset 0 0 1px 1px #afafaf;
        border-radius: 10px 10px 0 0;
        padding: 10px;
        width: 135px;
        text-align: center;
    }

    .label-item {
        padding: 10px;
        cursor: pointer;
    }

    .employee-box {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        width: auto;
        padding: 20px;
        border-radius: 0 10px 10px 10px;
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
    }
</style>
