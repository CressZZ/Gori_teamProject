<template lang="html">
    <div>


          <!-- class -->
          <section class="class-list row">
            <div class="class-list__heading_wrapper">
              <h2 class="class-list__heading ">POPULAR CLASS</h2>
              <p class="class-list__subtitle ">당신이 배우고 싶은것, 무엇이든 Gori</p>
            </div>
            <!-- ::before 선택자로 '+' 기호 추가 요망 -->
            <!-- Carousel -->
            <div class="class-list__carousel" id="carousel-class" >

              <ul class="class-list__carousel__list row">

                <!-- is_new class -->
                <li v-for = "classList in classLists" class="" v-bind:style="{ transform: 'translate(' + test + '%)' }">
                  <!-- <a class="class">는 재활용이 가능 하도록 별도관리. -->
                  <a href="#" class="class">
                    <!-- 아래 <div class="is_new"> 는 가상선택자로 하는 것을 추천  -->
                    <div class="is_new">new</div>
                    <a href="#"><button type="button" class="class__wish is_wish"><i class="icon-heart"></i></button></a>
                    <img src="../media/img/temp/cat_4.jpg" alt="" class="class__tutor-picture">
                    <p class="class__tutor-name">cressZZ</p>
                    <div class="class__star-total">
                      <div class="star-1st"><i class="icon-star"></i></div>
                      <div class="star-2nd"><i class="icon-star"></i></div>
                      <div class="star-3rd"><i class="icon-star"></i></div>
                      <div class="star-4th"><i class="icon-star"></i></div>
                      <div class="star-5th"><i class="icon-star"></i></div>
                      <p class="start-total-num">(3)</p>
                    </div>
                    <h2 class="class__intro__title">{{classList.title}}</h2>
                    <dl class="class__intro">
                      <dd class="class__intro__group">그룹</dd>
                      <dd class="class__intro__review-num">서울대입구</dd>
                      <dd class="class__intro__location">4회</dd>
                      <dd class="class__intro__times">2시간</dd>
                    </dl>
                  </a>
                </li>

              </ul>
            </div>
            <!-- Carousel left button-->
            <button class="class-list__carousel__left " type="button" ><i class="icon-left-open-big" @click="moveLeft"></i></button>
            <button class="class-list__carousel__more" type="button" >더보기</button>
            <!-- Carousel right button-->
            <button class="class-list__carousel__right " type="button"><i class="icon-right-open-big" @click="moveRight"></i></button>
            <!-- carousel 끝! -->
          </section>




    </div>
</template>

<script>
export default {
  data: function() {
    return{
      WindowWidth: window.innerWidth,
      test: 0,
      classLists:[
        {
          title: "1"
        },
        {
          title: "2"
        },
        {
          title: "3"
        },
        {
          title: "4"
        },
        {
          title: "5"
        },
        {
          title: "6"
        },
        {
          title: "7"
        },
        {
          title: "8"
        },
      ],

    }


  },
  methods: {
    moveRight(){
      if (this.test >= this.classLength) {
        this.test = this.test - 102;
        console.log("this.test:",this.test)
        console.log("this.classLength():",this.classLength)
       }
    // console.log(this.classLists.length)
    },
    moveLeft(){
      if (this.test < 0) {
        this.test = this.test + 102;
        console.log("this.test:",this.test)
      }
    },
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 960){
        // this.test = 0
        // $('.class-list__carousel').animate({scrollLeft : 0}, 300);
      }
      if (this.windowWidth < 959){
        // this.test = 0
        this.test = 0;
      }


    }
    },

  computed: {
    classLength(){
        return (-102 * (this.classLists.length - 5) )
    }
  },
  mounted() {
    window.addEventListener('resize', this.windowResize);
  },
  beforeDestroy: function () {
   window.removeEventListener('resize', this.windowResize)
 },

}
</script>

<style lang="sass">
  .class-list__carousel__list>li
    transition: 0.8s all
</style>
