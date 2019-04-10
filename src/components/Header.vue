<template>
    <div class="content">
        <div class="header">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.jpg" alt="Skills"></router-link>
            </div>
            <nav>
                <ul class="navigation">
                    <li class="navigation-item">
                        <router-link to="/employees">Employees</router-link>
                    </li>
                    <li class="navigation-item">
                        <router-link to="/skills">Skills</router-link>
                    </li>
                </ul>
            </nav>
            <div @click="logout" v-if="employee !== undefined" class="logout">Logout</div>
            <router-link v-if="employee !== undefined" :to="/employees/ + employee.id">
                <div class="icon"><img :src="'/static/user-icons/' + employee.personalData.icon + '.png'"
                                       class="user-icon" alt="username"></div>
            </router-link>
        </div>
        <div>
            <hr>
        </div>
        <nav class="mobile-navigation-container">
            <ul class="mobile-navigation">
                <li class="navigation-item">
                    <router-link to="/employees">Employees</router-link>
                </li>
                <li class="navigation-item">
                    <router-link to="/skills">Skills</router-link>
                </li>
            </ul>
        </nav>
        <hr class="mobile">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Content',
  methods: {
    logout () {
      this.$router.push('/')
      this.$store.commit('setId', null)
    }
  },
  computed: {
    employee () {
      return this.$store.getters['getEmployees'].find(employee => employee.id === this.$store.getters['getId'])
    }
  }
}
</script>

<style scoped>
    .header {
        display: flex;
    }

    .logo {
        display: flex;
        width: 120px;
    }

    nav {
        display: flex;
        width: calc(100% - 420px);
        margin-right: 50px;
        margin-left: 50px;
    }

    .navigation {
        display: none;
    }

    .navigation-item {
        display: flex;
        margin: 20px;
    }

    .logout {
        display: flex;
        margin: 30px 10px 30px 1px;
        right: 50px;
    }

    .icon {
        display: flex;
    }

    .user-icon {
        margin-right: 0;
        margin-top: 5px;
        height: 60px;
        width: 60px;
    }

    .mobile-navigation {
        display: flex;
        padding: 0;
    }

    .mobile-navigation-container {
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 600px) {
        .navigation {
            display: flex;
        }

        .user-icon {
            margin-right: 5px;
        }

        .mobile-navigation {
            display: none;
        }
    }
</style>
