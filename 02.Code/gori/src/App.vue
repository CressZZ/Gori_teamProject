<template>
  <div id="app">
    <router-view name='join'></router-view>
    <router-view name='login'></router-view>
    <router-view name="header"></router-view>
      <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style lang="sass">
  @import "sass/index"

</style>
