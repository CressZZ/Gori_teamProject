<template>
  <div id="app">
      <router-view name='join' :joinvisibles="joinvisibles" @joinnonVisible = "joinnonVisible"></router-view>
    <router-view name='login' :loginvisibles="loginvisibles" @loginnonVisible = "loginnonVisible" ></router-view>
    <router-view name="header" @joinvisible = "joinvisible" @loginvisible = "loginvisible"></router-view>
      <router-view ></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      loginvisibles: false,
      joinvisibles: false,

    }
  },
 methods: {
  loginvisible(){
    this.loginvisibles = true;
    console.log("login:", this.loginvisibles)
  },
  loginnonVisible(){
    this.loginvisibles= false;
  },
  joinvisible(){
    this.joinvisibles = true;
    console.log("join")
  },
  joinnonVisible(){
    this.joinvisibles= false;
  },
 },
}
</script>

<style lang="sass">
  @import "sass/index"




</style>
