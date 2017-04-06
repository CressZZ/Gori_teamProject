<template lang="html" >
  <!-- class_nav -->
  <section
  class="class_nav" >
    <nav class="class_nav__wrapper " style="z-index: 99" :style="{ position: cssPosition, top: cssTop + 'px'}" >
      <ul>
        <li class="right-border">
          <a href="#intro">수업소개</a></li>
        <li>
          <a href="#review" class="">리뷰보기</a>
        </li>
        <li class="left-border">
          <a href="#qna" >문의하기</a>
        </li>
      </ul>
    </nav>
  </section>
</template>



<script>
export default {

  data() {
    return{
      cssPosition: "",
      cssTop: null,
      windowTop: null,
      navTop: null,
      ishover: false,
    }
  },
  methods: {
    navPosition(){
        this.windowTop = $(window).scrollTop();
          if($(window).width() < 600){
          if(this.windowTop > 770){
            this.cssPosition = "fixed"
            this.cssTop = 0;
          }
        } if  (this.windowTop < 769){
          this.cssPosition="";
          this.cssTop = null;
        }
   },

  },

  created(){
    $(window).on('scroll', this.navPosition);
    console.log('navTop:');


  },
  destroyed(){
    window.removeEventListener('scroll', this.navPosition);
  },
}
// $(window).on('scroll', function(){

</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_class-nav"
    // .class_nav__wrapper
    //   z-index: 99
    .hover
      background-color: red
  </style>
