<template>
    <div class="wrapper">
        <div class="login-box box">
            <div class="login-item"><h1>Login</h1></div>
            <div class="login-item"><input v-model="login" type="text"></div>
            <div class="login-item"><input type="password"></div>
            <div class="login-item">
                <router-link to="/employees">
                    <button>Login</button>
                </router-link>
            </div>
            <div class="login-item reset">
                <router-link to="/ChangePassword">Reset password</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login-box {
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

    .reset {
        margin-top: 30px;
    }

    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        width: 100%;
    }
</style>
