<template lang="html" >
  <!-- class_nav -->
  <section
  class="class_nav" >
    <nav class="class_nav__wrapper " style="z-index: 99" :style="{ position: position, top: top + 'px'}" >
      <ul>
        <li class="right-border"><a href="#intro" >수업소개</a></li>
        <li><a href="#review" class="">리뷰보기</a></li>
        <li
        class="left-border"
        @click="navPosition()"><a href="#qna" >문의하기</a></li>
      </ul>
    </nav>
  </section>
</template>



<script>
export default {

  data() {
    return{
      position: "",
      top: null,

    }
  },
  methods: {
    navPosition(){
        this.currentTop = $(window).scrollTop();
        if(this.currentTop > 290){
          this.position = "fixed"
          this.top = 0;
        } else{
          this.position="";
          this.top = null;
        }
   },
  },


  created(){
    $(window).on('scroll', this.navPosition)
  },
  destroyed(){
    window.removeEventListener('scroll', this.navPosition);
  },
}
// $(window).on('scroll', function(){

</script>




  <style lang="sass">
    @import "../sass/gen_source"
    @import "../sass/gen_mixin"
    @import "../sass/lec_class-nav"
    // .class_nav__wrapper
    //   z-index: 99
  </style>
