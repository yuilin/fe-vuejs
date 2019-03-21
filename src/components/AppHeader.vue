<template>
<div class="content">
        <div id="header">
            <div id="logo">
                <router-link to="/"><img src="../assets/logo.jpg" alt="Skills"></router-link>
            </div>
            <nav>
                <ul id="navigation">
                    <li class="navigation-item">
                        <router-link to="/employees">Employees</router-link>
                    </li>
                    <li class="navigation-item">
                        <router-link to="/skills">Skills</router-link>
                    </li>
                </ul>
            </nav>
            <div id="username">username</div>
            <div id="icon"><img src="../assets/user-icons/4.png" id="user-icon" alt="username"></div>
        </div>
        <div><hr></div>
        <router-view></router-view>
</div>

</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
 #header {
     display: flex;
 }
 #logo {
     display: flex;
     width: 120px;
 }
 nav {
     display: flex;
     width: calc(100% - 420px);
     margin-right: 50px;
     margin-left: 50px;
 }
 #navigation {
     display: flex;
 }
 .navigation-item {
     display: flex;
     margin: 20px;
 }
 #username {
     display: flex;
     margin: 30px 10px 30px 1px;
     right: 50px;
 }
 #icon {
     display: flex;
 }
 #user-icon {
     margin: 5px;
     height: 60px;
 }
</style>
