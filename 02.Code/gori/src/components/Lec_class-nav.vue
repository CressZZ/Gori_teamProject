<template lang="html" >
  <!-- class_nav -->
  <section
  class="class_nav" :class ="{isFixed: isFixed}" :style="{height: navHeight + 'px'}" >
    <nav class="class_nav__wrapper" style="z-index: 99" >
      <ul>
        <li class="right-border">
          <a href="" @click.prevent="scrollTointro">수업소개</a></li>
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
      isFixed: false,
      navHeight: $(".class_nav__wrapper>ul").height(),


    }
  },
  methods: {
    navPosition(){
      if ($(window).width() < 600){
        if( $(window).scrollTop() > $(".class_nav").offset().top ) {
          this.isFixed = true
          this.navHeight = 0
        }
        else{
          this.isFixed= false
          this.navHeight = $(".class_nav__wrapper>ul").height()
        }
      }
      else {
        this.isFixed = false
        this.navHeight = $(".class_nav__wrapper>ul").height()
      }
    },


  },
  computed: {


  },

  mounted(){
    // this.window.
    $(window).on('scroll', this.navPosition);


  },
  destroyed(){
    window.removeEventListener('scroll', this.navPosition);
  },
}

</script>

  <style lang="sass">
    .isFixed
      // height: 0 !important
      .class_nav__wrapper
        position: fixed
        top: 0

    .class_nav
      height:
      transition: 0.7s height
  </style>
