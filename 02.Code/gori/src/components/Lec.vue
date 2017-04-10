<template lang="html">

  <div>
  <!-- <p>parameter ID {{id}}</p> -->
  <!-- <join>

  </join>

  <login :visible="visibles" @nonVisible = "nonVisible">

  </login> -->

  <lec-summary :classlist = "classlist" :lecid = "id">

  </lec-summary>

  <lec-apply  :classlist = "classlist" :lecid = "id">
  </lec-apply>

  <lec-class-nav >
  </lec-class-nav>


  <lec-speaking  :classlist = "classlist" :lecid = "id">

  </lec-speaking>

  <lec-intro  :classlist = "classlist" :lecid = "id">

  </lec-intro>


  <lec-location  :classlist = "classlist" :lecid = "id">

  </lec-location>


  <lec-curriculum  :classlist = "classlist" :lecid = "id">

  </lec-curriculum>


  <lec-review  :classlist = "classlist" :lecid = "id">

  </lec-review>


  <lec-qna  :classlist = "classlist" :lecid = "id">

  </lec-qna>


  </div>

</template>

<script>
// import Join from './Join.vue'
// import Login from './Login.vue'

import LecSummary from './Lec_summary.vue'
import LecSpeaking from './Lec_speaking.vue'
import LecApply from './Lec_apply.vue'
import LecCurriculum from './Lec_curriculum.vue'
import LecIntro from './Lec_intro.vue'
import LecLocation from './Lec_location.vue'
import LecQna from './Lec_qna.vue'
import LecReview from './Lec_review.vue'
import LecClassNav from './Lec_class-nav.vue'

export default {
  data(){
    return {
      id: this.$route.params.lecid

    }
  },
  watch: {
    '$route' (to, from){
      this.id = to.params.lecid
    }
  },
  mounted(){
    // console.log('this.classitem:', this.clssItem)
    // window.scrollTo(0, 0);
    console.log('router.params.params:',this.id)
      },
  props: ['test', 'classlist', 'item'],

  methods: {
    // isvisible(){
    //   this.isvisibles = !this.isvisibles;
    //   console.log("isissdsdi");
    // },
  },

  components: {
    LecSummary,
    LecSpeaking,
    LecApply,
    LecCurriculum,
    LecIntro,
    LecLocation,
    LecQna,
    LecReview,
    LecClassNav,

  },
  // props: ['visibles'],
  // methods:{
  //   nonVisible(){
  //     this.$emit('nonVisible')
  //   }
  // },
  // created() {
  // },

}
</script>

  <style lang="sass">

    // @import "../sass/total"
    // @import "../sass/lec-index"
  </style>
