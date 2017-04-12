<template lang="html">

  <div>
  <!-- <p>parameter ID {{id}}</p> -->


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
<<<<<<< HEAD
      id: this.$route.params.lecid,
      detailAll: [],
      detailReview: []
=======
      id: this.$route.params.lecid

>>>>>>> ca702718b5ea9b43d598cca8fd1eeab92a9e5faa
    }
  },
  // beforeRouteEnter (to, from, next) {
  //   // 이 컴포넌트를 렌더링하는 라우트 앞에 호출됩니다.
  //   // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에
  //   // `this` 컴포넌트 인스턴스에 접근 할 수 없습니다!
  //   // console.log(to);
  //   next(function(vm){
  //     console.log(vm.detailAll.tutor);
  //     return false;
  //   });
  // },
  watch: {
    '$route' (to, from){
      this.id = to.params.lecid
    }
  },
<<<<<<< HEAD
  // props: ['classlist'],
  created(){

      // 1. detailAll 데이터 get
      this.$http.get(`https://mozzi.co.kr/api/talent/detail-all/${this.$route.params.lecid}/`)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.detailAll = data;
      });

      // 2. talent Review
      this.$http.get(`https://mozzi.co.kr/api/talent/detail/${this.$route.params.lecid}/review/`)
      .then(function(response){
        return response.json()
      })
      .then(function(data){
        this.detailReview = data
      })





  },
  mounted(){
    // console.log("lec-vue lecid2:", this.id)
    // console.log("class-List2:", this.classlist)
  },

  updated(){
    // console.log("lec-vue lecid3:", this.id)
    // console.log("class-List3:", this.classlist)
  },
  beforeDestroy(){
    // console.log("lec-vue lecid4:", this.id)
    // console.log("class-List4:", this.classlist)

  },
  watch:{

  },
=======
  mounted(){
    // console.log('this.classitem:', this.clssItem)
    // window.scrollTo(0, 0);
    console.log('router.params.params:',this.id)
      },
  props: ['test', 'classlist', 'item'],
>>>>>>> ca702718b5ea9b43d598cca8fd1eeab92a9e5faa

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
