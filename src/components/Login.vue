<template>
    <div id="login-box" class="box">
        <div id="login-item"><h1>Login</h1></div>
        <div class="login-item"><input v-model="login" type="text"></div>
        <div class="login-item"><input type="pwd"></div>
        <div class="login-item"><button @click="persist">Login</button></div>
        <div id="reset" class="login-item">
            <router-link to="/ChangePassword">Reset password</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #login-box {
     margin-top: 100px;
     margin-left: auto;
     margin-right: auto;
     width: 400px;
     padding: 20px;
 }
 .login-item {
     margin: 10px;
 }
 #reset {
     margin-top: 30px;
 }
</style>
