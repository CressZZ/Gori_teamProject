<template>
  <div id="app">
      <router-view name='join' ></router-view>
      <router-view name='login'></router-view>
      <router-view name="header" ></router-view>

      <router-view :classlist = "classlist"></router-view>
    <router-view name="footer"></router-view>

  </div>
</template>

<script>
import {bus} from './bus'

export default {
  name: 'app',
  data () {
    return {
      classlist: [],
    }
  },
watch: {

},
computed:{
  stores(){
  }
},
created() {
  // console.log("$:",$().jquery)
  this.$http.get('talent/list/',{parameter: {page: 1}})
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    this.classlist = data.results

  })
  .then(function(){
    console.log("hhh")
  })
  .catch( error => console.error(error.message) );

},

mounted(){

  },
methods: {

  },

}
</script>

<style lang="sass">
  @import "sass/index"
  // @import "fontello/css/fontello.css"



</style>
