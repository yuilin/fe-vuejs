<template>
    <div id="skill">
        <div id="skill-info">
            <div id="skill-photo"><img src="../../assets/user-icons/4.png" id="user-icon" alt="username"></div>
            <div id="skill-personal-data">
                <div class="skill-personal-data-item"><h2>Technology name</h2></div>
                <div class="skill-personal-data-item">URL: jsframework.net</div>
                <div class="skill-personal-data-item">Staff count: 5</div>
                <div class="skill-personal-data-item">Used in projects: 4</div>
            </div>
        </div>
        <div id="tabs">
            <div id="labels">
                <label class="label-item" @click="openInfo" title="Info">Info</label>
                <label class="label-item" @click="openSkillTree" title="Skill tree">Skill tree</label>
            </div>
            <div id="skill-box" class="box">
                <div id="tab-info">
                    <h2>Info</h2>
                    <div class="info box">
                        <div class="info-header"><h2>Technology info</h2></div>
                        <hr>
                        <div class="info-items">
                            <div class="info-item">Latest ver: 3.15.15</div>
                            <div class="info-item">GIT: git.test.test.com</div>
                        </div>
                    </div>
                    <br>
                    <div class="info box">
                        <div class="info-header"><h2>Description</h2></div>
                        <hr>
                        <div class="info-items">
                            <div class="info-item skill-description"><textarea class="skill-description" placeholder="Description"></textarea></div>
                        </div>
                        <div class="info-items"><div class="info-item" id="info-save-button"><button>Save</button></div></div>
                    </div>
                </div>
                <div id="tab-skill-tree">
                    <div id="skills-header">
                        <div id="skills-label"><h2>Skill tree</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal">
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
export default {
  methods: {
    openInfo () {
      document.getElementById('tab-info').style.display = 'inline'
      document.getElementById('tab-skill-tree').style.display = 'none'
    },
    openSkillTree () {
      document.getElementById('tab-info').style.display = 'none'
      document.getElementById('tab-skill-tree').style.display = 'inline'
    }
  }
}
</script>

<style scoped>
    #skill-info, .info-items {
        display: flex;
    }
    #skill-photo {
        display: flex;
        height: 200px;
        width: 200px;
        margin: 50px;
    }
    #skill-personal-data {
        text-align: left;
        margin-top: 20px;
    }
    .skill-personal-data-item {
        padding: 10px;
    }
    #skill-box {
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
        width: 135px;
    }
    .label-item {
        padding: 10px;
    }
    #tab-skill-tree {
        display: none;
    }
    #skills-label {
        display: inline-block;
    }
    #skills-header {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    .skill-description {
        height: 80px;
        width: 100%;
    }
    #info-save-button {
        padding-top: 0;
    }
    #modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        top: 0px;
        width: 80%;
        height: 100%;
        overflow: auto;
    }
</style>
