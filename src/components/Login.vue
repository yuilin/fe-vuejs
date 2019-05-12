<template>
    <div>
        <div class="login-box box" v-if="this.display === 'login'">
            <div class="login-item">
                <h1>Login</h1>
            </div>
            <div class="login-item">
                <input v-model="user" type="text" placeholder="login">
            </div>
            <div class="login-item">
                <input v-model="password" type="password" placeholder="password">
            </div>
            <div class="login-item">
                <button @click="login">Login</button>
            </div>
            <div @click="changeView()" class="login-item registration">Registration
            </div>
        </div>
        <div class="registration-box box" v-else>
            <div class="login-item">
                <h1>Registration</h1>
            </div>
            <div class="login-item">
                <input v-model="user" type="text" placeholder="login">
            </div>
            <div class="login-item">
                <input v-model="password" type="password" placeholder="password">
            </div>
            <div class="login-item">
                <input v-model="password2" type="password" placeholder="password">
            </div>
            <div class="login-item">
                <input v-model="name" type="text" placeholder="Name">
            </div>
            <div class="login-item">
                <input v-model="surname" type="text" placeholder="Surname">
            </div>
            <div class="login-item">
                <input v-model="email" type="text" placeholder="E-mail">
            </div>
            <div class="login-item">
                <input v-model="gender" type="text" placeholder="Gender">
            </div>
            <div class="login-item">
                <input v-model="birthDay" type="text" placeholder="Birthday">
            </div>
            <div class="login-item">
                <button @click="reg">Register</button>
            </div>
            <div @click="changeView()" class="login-item registration">Login
            </div>
        </div>
        <router-view></router-view>
        <Notification ref="notification"></Notification>
    </div>
</template>

<script>

import Notification from '@/components/common/Notification'

/**
 * Login & registration component.
 */
export default {
  components: {Notification},
  data () {
    return {
      user: null,
      password: null,
      password2: null,
      employees: this.$store.getters['getEmployees'],
      display: 'login',
      name: null,
      surname: null,
      email: null,
      gender: null,
      birthDay: null,
      message: null,
      type: null
    }
  },
  methods: {
    /**
     * Log into the system.
     */
    login () {
      let validData = this.employees
        .find(employee => employee.auth.login === this.user && employee.auth.password === this.password)
      if (validData !== undefined) {
        this.$store.commit('setId', validData.id)
        this.$router.push('/employees')
      } else {
        this.$refs.notification.error('Wrong login or password')
      }
    },
    /**
     * Register a new employee.
     */
    reg () {
      if (this.user === null || this.password === null ||
        this.name === null || this.surname === null) {
        this.$refs.notification.error('Please fill all fields')
      } else if (this.password !== this.password2) {
        this.$refs.notification.error('Passwords ane not equal')
      } else {
        let validData = this.employees
          .find(employee => employee.auth.login === this.user)
        if (validData === undefined) {
          this.$store.commit('addEmployee', {
            user: this.user,
            password: this.password,
            name: this.name,
            surname: this.surname,
            email: this.email,
            gender: this.gender,
            birthday: this.birthday,
            id: 1 + this.employees[this.employees.length - 1].id
          })
          this.$refs.notification.success('Registration successful')
        } else {
          this.$refs.notification.error('Employee with this login is already exists')
        }
      }
    },
    /**
     * Change a view from login to registration.
     */
    changeView () {
      this.clearFields()
      this.display = this.display === 'login' ? 'registration' : 'login'
    },
    /**
     * Clear fields.
     */
    clearFields () {
      this.user = null
      this.password = null
      this.password2 = null
      this.name = null
      this.surname = null
      this.project = null
      this.email = null
      this.gender = null
      this.birthDay = null
      this.position = null
    }
  }
}
</script>

<style scoped>
    .login-box, .registration-box {
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
        padding: 20px;
    }

    @media screen and (max-width: 400px) {
        .login-box, .registration-box {
            width: auto;
            margin-top: 20px;
        }
    }

    .login-item {
        margin: 10px;
    }

    .registration {
        margin-top: 30px;
        cursor: pointer;
    }
</style>
