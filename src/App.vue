<template>
  <div id="app">
    <AppHeader></AppHeader>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  name: 'App',

  components: {
    AppHeader
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

.content {
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.box {
  border: 0px;
  box-shadow: 0 0 15px 1px #afafaf, inset 0 0 15px 1px #afafaf;
  border-radius: 10px;
}
hr {
  border: 0px;
  box-shadow: 0 0 10px 1px #000000;
  width: 90%;
}
body {
  margin: 0;
  padding: 0;
}
h1, h2, a {
  background-color: #565656;
  color: transparent;
  text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
}
input, textarea, button {
  border: 0px;
  box-shadow: 0 0 1px 1px lightgrey, inset 0 0 1px 1px lightgrey;
  border-radius: 3px;
}
button {
  color: #565656;
}
input[type=text], input[type=pwd], textarea {
  color: #565656;
}
input[type=button] {
  margin-top: 10px;
  background-color: #565656;
  color: transparent;
  text-shadow: 0px 2px 3px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  font-size: 16px;
}
</style>
