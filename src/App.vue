<template>
    <div id="app">
        <Header></Header>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #565656;
    }

    .body {
        margin: 50px;
    }

    .skills-header {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 800px) {
        .body {
            margin: 40px 0 0 0;
        }
    }

    .content {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: 400px) {
        .mobile {
            display: none;
        }

        .box {
            box-shadow: 0 0 1px 0 #afafaf, inset 0 0 0 1px #afafaf;
        }
    }

    @media screen and (min-width: 1280px) {
        .content {
            width: 1280px;
        }
    }

    @media screen and (max-width: 400px) {
        body, input, textarea, button, select {
            font-size: 12px;
        }

        .skills-header {
            width: 100%;
        }
    }

    @media screen and (min-width: 400px) and (max-width: 800px) {
        body, input, textarea, button, select {
            font-size: 12px;
        }
    }

    .box {
        border: 0;
        border-radius: 10px;
    }

    hr {
        border: 0;
        box-shadow: 0 0 1px 1px #000000;
        width: 90%;
    }

    body {
        margin: 0;
        padding: 0;
    }

    h1, h2, a {
        background-color: #565656;
        color: transparent;
        text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
    }

    input, textarea, button, select {
        border: 0;
        box-shadow: 0 0 1px 1px lightgrey, inset 0 0 1px 1px lightgrey;
        border-radius: 3px;
    }

    button {
        color: #565656;
        cursor: pointer;
    }

    input[type=text], input[type=password], textarea, select {
        color: #565656;
    }

    input[type=button] {
        margin-top: 10px;
        background-color: #565656;
        color: transparent;
        text-shadow: 0 2px 3px rgba(255, 255, 255, 0.5);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        font-size: 16px;
    }

    .active-tab {
        text-decoration: underline;
    }

    .error {
        color: red
    }

    .success {
        color: green
    }

    .add-icon {
        text-align: right;
        float: right;
        margin-top: 30px;
    }

    .newItem {
        margin: 10px 20px 0 20px;
        width: 140px;
    }
</style>
