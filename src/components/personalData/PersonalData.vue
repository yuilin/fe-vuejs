<template>
    <div class="info">
        <div class="icon"><img v-if="parent === 'Employee'" src="../../assets/user-icons/4.png" class="user-icon"
                               alt="username"><img v-else src="../../assets/skill-icons/1.png" class="user-icon"
                                                   alt="username"></div>
        <hr class="mobile">
        <div class="personal-data">
            <PersonalDataItem type="header"
                              :header="personalData.credentials.name + ' ' + personalData.credentials.surname"></PersonalDataItem>
            <PersonalDataItem v-for="(item, index) in personalData.items" v-bind:key="index"
                              :item="item"></PersonalDataItem>
        </div>
    </div>
</template>

<script>
import PersonalDataItem from '@/components/personalData/PersonalDataItem'

export default {
  name: 'PersonalData',
  components: {PersonalDataItem},
  props: {
    parent: String,
    personalData: Object
  }
}
</script>

<style scoped>
    .info {
        display: flex;
    }

    .icon {
        display: flex;
        height: 200px;
        width: 200px;
        margin: 50px;
    }

    .personal-data {
        text-align: left;
        margin-top: 20px;
    }

    .user-icon {
        height: 200px;
        width: 200px;
    }

    @media screen and (max-width: 400px) {

        .personal-data {
            padding-left: 35px;
        }

        .info {
            display: block;
        }
    }
</style>
