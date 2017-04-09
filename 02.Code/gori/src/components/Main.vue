<template lang="html">
    <div>
      <main-carousel></main-carousel>
      <main-categori></main-categori>
      <main-class-list></main-class-list>

    </div>
</template>

<script>

import MainCarousel from './main_carousel.vue'
import MainCategori from './main_categori.vue'
import MainClassList from './main_class-list.vue'




export default {
  created(){
    // body.removeChild(script)

  },
  data(){
    return {

    }
  },
  components: {
    MainCarousel,
    MainCategori,
    MainClassList,



  }

}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main-index"
</style>
