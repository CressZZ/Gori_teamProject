<template lang="html">
    <div>

      <section class="wish-list row">

        <div class="class-list__carousel" id="carousel-class" >

          <ul class="class-list__carousel__list row">
              <router-link tag="li" class="class-list__item" :to="{ name: 'lec', params: { lecid: item.pk }}" :key="item.id" >
                <img :src="item.tutor.profile_image" :alt="`${item.tutor.nickname}`" class="class__tutor-picture">
                <p class="class__tutor-name">{{item.tutor.name}}</p>
                <div class="class__star-total">
                  <div v-if = "item.average_rate >= 5" class="star-1st"><i class="icon-star"></i></div>
                  <div v-if = "item.average_rate >= 4"><i class="icon-star"></i></div>
                  <div v-if = "item.average_rate >= 3"><i class="icon-star"></i></div>
                  <div v-if = "item.average_rate >= 2"><i class="icon-star"></i></div>
                  <div v-if = "item.average_rate >= 1"><i class="icon-star"></i></div>
                  <p class="start-total-num"> ({{item.review_count}})</p>
                </div>
                <h2 class="class__intro__title">{{item.title}}</h2>
                <dl class="class__intro">
                  <dd class="class__intro__group">{{item.type}}</dd>
                  <dd class="class__intro__review-num">{{item.regions[0] ? item.regions[0] : "대한민국"}}</dd>
                  <dd class="class__intro__location">{{item.number_of_class}} 회</dd>
                  <dd class="class__intro__times">{{item.hours_per_class}} 시간</dd>
                </dl>
            </router-link>
          <!-- </li> -->

          </ul>
        </div>
      </section>




    </div>
</template>

<script>

export default {
  data: function() {
    return{
      WindowWidth: window.innerWidth,
      trans: 0,
    }
  },
  created(){
    // console.log('classlist:',this.classlist)
  },
  watch:{

  },
  props:['classlist'],
  methods: {
    moveRight(){
      if (this.trans >= this.classLength) {
        this.trans = this.trans - 102;
        console.log("this.trans:",this.trans)
        console.log("this.classLength():",this.classLength)
       }
    // console.log(this.classLists.length)
    },
    moveLeft(){
      if (this.trans < 0) {
        this.trans = this.trans + 102;
        console.log("this.trans:",this.trans)
      }
    },
    windowResize(e){
      this.windowWidth = e.currentTarget.innerWidth;
      console.log("windowWidth:",this.windowWidth)
      if (this.windowWidth > 960){
      document.querySelector(".class-list__carousel").scrollLeft = 0
      }
      if (this.windowWidth < 959){
        this.trans = 0;
      }


    }
    },

  computed: {
    classLength(){
        return (-102 * (this.classlist.length - 5) )
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
    cursor: pointer
</style>
