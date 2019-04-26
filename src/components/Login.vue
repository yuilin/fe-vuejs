<template>
    <div>
        <div class="login-box box" v-if="this.display === 'login'">
            <div class="login-item">
                <h1>Login</h1>
            </div>
            <div v-if="messages.includes('1')"
                 class="login-item error">Wrong login or password
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
            <div @click="changeView()" class="login-item registration">
            </div>
        </div>
        <div class="registration-box box" v-else>
            <div class="login-item">
                <h1>Registration</h1>
            </div>
            <div v-if="messages.includes('2')"
                 class="login-item error">Passwords ane not equal
            </div>
            <div v-if="messages.includes('3')"
                 class="login-item error">Employee with this login is already exists
            </div>
            <div v-if="messages.includes('4')"
                 class="login-item error">Please fill all fields
            </div>
            <div v-if="messages.includes('5')"
                 class="login-item error">Something went wrong, please try again
            </div>
            <div v-if="messages.includes('10')"
                 class="login-item success">Registration successful
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
                <input v-model="project" type="text" placeholder="Project">
            </div>
            <div class="login-item">
                <input v-model="email" type="text" placeholder="E-mail">
            </div>
            <div class="login-item">
                <input v-model="startData" type="text" placeholder="Start Date">
            </div>
            <div class="login-item">
                <input v-model="gender" type="text" placeholder="Gender">
            </div>
            <div class="login-item">
                <input v-model="birthDay" type="text" placeholder="Birthday">
            </div>
            <div class="login-item">
                <input v-model="position" type="text" placeholder="Position">
            </div>
            <div class="login-item">
                <button @click="reg">Register</button>
            </div>
            <div @click="changeView()" class="login-item registration">
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
  data () {
    return {
      user: null,
      password: null,
      password2: null,
      employees: this.$store.getters['getEmployees'],
      messages: [],
      display: 'login',
      name: null,
      surname: null,
      project: null,
      email: null,
      startData: null,
      gender: null,
      birthDay: null,
      position: null
    }
  },
  methods: {
    login () {
      this.messages = []
      let validData = this.employees
        .find(employee => employee.auth.login === this.user && employee.auth.password === this.password)
      if (validData !== undefined) {
        this.$store.commit('setId', validData.id)
        this.$router.push('/employees')
      } else {
        this.messages.push('1')
      }
    },
    reg () {
      this.messages = []
      if (this.user === null || this.password === null ||
        this.name === null || this.surname === null || this.project === null) {
        this.messages.push('4')
      } else if (this.password !== this.password2) {
        this.messages.push('2')
      } else {
        let validData = this.employees
          .find(employee => employee.auth.login === this.user)
        if (validData === undefined) {
          this.$store.commit('addEmployee', {
            user: this.user,
            password: this.password,
            name: this.name,
            surname: this.surname,
            project: this.project,
            email: this.email,
            startDate: this.startDate,
            gender: this.gender,
            birthday: this.birthday,
            position: this.position,
            id: 1 + this.employees[this.employees.length - 1].id
          })
          this.messages.push('10')
        } else {
          this.messages.push('3')
        }
      }
    },
    changeView () {
      this.clearFields()
      this.display = this.display === 'login' ? 'registration' : 'login'
    },
    clearFields () {
      this.user = null
      this.password = null
      this.password2 = null
      this.messages = []
      this.name = null
      this.surname = null
      this.project = null
      this.email = null
      this.startData = null
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
        .login-box {
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
