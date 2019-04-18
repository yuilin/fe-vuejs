<template>
    <div class="tabs">
        <div class="labels">
            <label :class="tab === 1 ? 'label-item active-tab' : 'label-item'" @click="showTab(1)" id="tab1"
                   :title="tab1">{{tab1}}</label>
            <label :class="tab === 2 ? 'label-item active-tab' : 'label-item'" @click="showTab(2)" id="tab2"
                   :title="tab2">{{tab2}}</label>
        </div>
        <div class="employee-box box">
            <transition name="fade" mode="out-in">
                <TabInfo v-if="tab === 1" :data="infoTabData"></TabInfo>
                <TabSkills :parent="parent" v-else :data="skillsTabData"></TabSkills>
            </transition>
        </div>
    </div>
</template>

<script>
import TabInfo from '@/components/common/info/TabInfo'
import TabSkills from '@/components/common/skills/TabSkills'

export default {
  name: 'Tabs',
  components: {TabSkills, TabInfo},
  data () {
    return {
      tab: 1
    }
  },
  props: {
    infoTabData: Array,
    skillsTabData: Array,
    tab1: String,
    tab2: String,
    parent: String
  },
  methods: {
    showTab (id) {
      this.tab = id
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
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
