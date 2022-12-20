
<template>
  <div id="app">
    <div class="header">
      <img class="logo" src="./assets/register-icon.svg" width="30px" height="30px" />
      <h2 style="display: inline-block;">Hansa School</h2>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #000000;
  color: #fff;
  font-size: 25px;
}

body {
  background-color: #1e1e1c;
  color: #fff;
}

.container {
  color: #fff;
}

.loginbox {
  border-radius: 20px;
  color: #fff;
  align-items: center;
}

.cover-container {
  margin-top: 2em;
  max-width: 42em;
}

.input-group-addon {
  width: 15%;
  height: 45px;
  padding: 0.6em;
  text-align: left;
  background-color: #30302d;
  border-radius: 10px;
  border-right: 1px black solid;
  font-size: 1em;
}

.formstyle1 {
  background-color: #30302d;
  color: #fff;
  width: 85%;
  border-radius: 10px;
  height: 40px;
  border: none;
}

.formstyle2 {
  background-color: #30302d;
  color: #fff;
  width: 80%;
  border-radius: 10px;
  height: 40px;
  border: none;
}

.logo {
  margin: 5px;
  margin-top: 15px;
}

.formstylecon {
  background-color: #30302d;
  color: #fff;
  width: 70%;
  border-radius: 10px;
  height: 40px;
  border: none;
}

a {
  color: #fff;
  text-decoration: none;
  display: inline;
}

a:hover {
  color: #b9b9af;
}

.sidebar-text {
  font-size: 3vh;
}

.sidebar{
  background-color: #000000;
}

.editInput{
  margin-bottom: 12px;
}

.text{
  margin-bottom: 20px;
}

.btn{
  margin-top: 10px;
}

</style>

