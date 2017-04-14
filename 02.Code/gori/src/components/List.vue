<template lang="html">
    <div>
      <list-search></list-search>
      <list-class-list :classlist ="classlist"></list-class-list>
    </div>
</template>

<script>

import ListSearch from './List_search.vue'
import ListClassList from './List_class_list.vue'




export default {
  // props: ['classlist'],


  data(){
    return {
      // classlist:[],
    }
  },
  props: ['classlist'],
  components: {
    ListSearch,
    ListClassList,

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
