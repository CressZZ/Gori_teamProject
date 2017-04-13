<template lang="html">
    <div>
      <main-carousel></main-carousel>
      <main-categori></main-categori>
      <main-class-list :classlist ="classlist"></main-class-list>

    </div>
</template>

<script>

import MainCarousel from './main_carousel.vue'
import MainCategori from './main_categori.vue'
import MainClassList from './main_class-list.vue'




export default {
  // props: ['classlist'],


  data(){
    return {
      // classlist:[],
    }
  },
  props: ['classlist'],

  components: {
    MainCarousel,
    MainCategori,
    MainClassList,



  },
  created(){
    // this.$http.get('https://mozzi.co.kr/api/talent/list/')
    // .then(function(response){
    //   return response.json()
    // })
    // .then(function(data){
    //   this.classlist = data
    // })
    // .then(function(){
    // })

  },

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
