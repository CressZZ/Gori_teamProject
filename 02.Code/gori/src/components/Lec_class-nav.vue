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

      isoffs: true,
      WindowWidth: window.innerWidth,
      currentPage: "pc"
    }
  },
  methods: {
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 600){
        this.isoffs = false
        this.currentPage = "pc"
      } else if (this.windowWidth < 599){
        if(this.currentPage === "pc"){
          this.isoffs = true
          this.currentPage = "mobile"
        }
      }
      // if (this.windowWidth < 599){
        // this.isoffs = true
      // }
    },
    navPosition(){
      if (this.currentPage === "mobile"){
        if( $(window).scrollTop() > $(".class_nav").offset().top ) {
          this.isFixed = true
          this.navHeight = 0
        }
        else{
          this.isFixed = false
          this.navHeight = $(".class_nav__wrapper>ul").height()
        }
      }
      else {
        this.isFixed = false
        this.navHeight = $(".class_nav__wrapper>ul").height()
      }
    },
  },

  mounted(){
    this.windowWidth = window.innerWidth
    if (this.windowWidth > 600){
      this.currentPage = "pc"
      console.log("this.currentPage:",this.currentPage);
      // this.isoffs = false
    } else if (this.windowWidth < 599) {
      this.currentPage = "mobile"
      console.log("this.currentPage:",this.currentPage)

      // this.isoffs = true
    }
    window.addEventListener('resize', this.windowResize);
    window.addEventListener('scroll', this.navPosition);

  },
  beforeDestroy() {
   window.removeEventListener('resize', this.windowResize)
   window.addEventListener('scroll', this.navPosition);

  },
  // mounted(){
  //   // this.window.
  //   $(window).on('scroll', this.navPosition);
  // },
  // destroyed(){
  //   window.removeEventListener('scroll', this.navPosition);
  // },

  computed: {

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
