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
            <router-link to="/employee">
                <div class="username">username</div>
            </router-link>
            <router-link to="/employee">
                <div class="icon"><img src="../assets/user-icons/4.png" class="user-icon" alt="username"></div>
            </router-link>
        </div>
        <div>
            <hr>
        </div>
        <nav>
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
  name: 'AppHeader'
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

    .username {
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
