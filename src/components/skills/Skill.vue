<template>
    <div class="skill">
        <div class="skill-info">
            <div class="skill-photo"><img src="../../assets/skill-icons/1.png" class="user-icon" alt="username"></div>
            <div class="skill-personal-data">
                <div class="skill-personal-data-item"><h2>Technology name</h2></div>
                <div class="skill-personal-data-item">URL: <a href="http://vuejs.org" target="_blank">vuejs.org</a>
                </div>
                <div class="skill-personal-data-item">Staff count: 5</div>
                <div class="skill-personal-data-item">Used in projects: 4</div>
            </div>
        </div>
        <div class="tabs">
            <div class="labels">
                <label class="label-item active-tab" @click="openInfo" id="tab1" title="Info">Info</label>
                <label class="label-item" @click="openSkillTree" id="tab2" title="Skill tree">Skill tree</label>
            </div>
            <div class="skill-box box">
                <TabInfo :data="infoTabData" parent="Skill"></TabInfo>
                <div class="tab-skill-tree">
                    <div class="skills-header">
                        <div class="skills-label"><h2>Skill tree</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal">
            <div class="box">
                <div class="info-items">
                    <div class="info-item">Type</div>
                    <div class="info-item">Category</div>
                    <div class="info-item">Skill</div>
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
      document.querySelector('.tab-skill-tree').style.display = 'none'
      document.querySelector('#tab2').classList.remove('active-tab')
    },
    openSkillTree () {
      document.querySelector('.tab-info').style.display = 'none'
      document.querySelector('#tab2').classList.add('active-tab')
      document.querySelector('.tab-skill-tree').style.display = 'inline'
      document.querySelector('#tab1').classList.remove('active-tab')
    }
  },
  data () {
    return {
      infoTabData: []
    }
  },
  created: function () {
    this.infoTabData = [
      {
        header: 'Technology info',
        items:
          [
            [
              {
                name: 'Latest ver',
                value: '2.6.10'
              },
              {
                name: 'GIT',
                value: 'https://github.com/vuejs/vue',
                link: true
              }]
          ]
      },
      {
        header: 'Description',
        items:
          [
            [
              {
                description: 'Description'
              }
            ],
            [
              {
                button: 'Save'
              }
            ]
          ]
      }
    ]
  }
}
</script>

<style scoped>
    .skill-info, .info-items {
        display: flex;
    }

    .skill-photo {
        display: flex;
        height: 200px;
        width: 200px;
        margin: 50px;
    }

    .skill-personal-data {
        text-align: left;
        margin-top: 20px;
    }

    .skill-personal-data-item {
        padding: 10px;
    }

    .skill-box {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        width: auto;
        padding: 20px;
        border-radius: 0 10px 10px 10px;
    }

    .info-item {
        padding: 20px;
    }

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

    .tab-skill-tree {
        display: none;
    }

    .skills-label {
        display: inline-block;
    }

    .skills-header {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        top: 0;
        width: 80%;
        height: 100%;
        overflow: auto;
    }

    .user-icon {
        height: 200px;
        width: 200px;
    }

    @media screen and (max-width: 400px) {
        .skill-info, .info-items {
            display: block;
        }

        .labels {
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            text-align: center;
            width: 90%;
            border-radius: 10px;
        }

        .skills-header {
            width: 100%;
        }

        .info-items {
            padding-top: 20px;
        }

        .info-item, .skill-personal-data-item {
            padding: 5px;
        }

        .skill-personal-data {
            padding-left: 35px;
            margin-top: 0;
        }
    }
</style>
