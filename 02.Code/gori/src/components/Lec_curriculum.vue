<template lang="html">
  <!-- curriculum -->
  <section class="curriculum">

      <h2 class="curriculum__heading">커리큘럼</h2>
      <ul class="curriculum__list">
        <li class="row" v-for = "item in detailAll.curriculums">
          <strong>{{item.talent}} 회차</strong></br>
          <span class="col-7-12 col-4-4">
            {{item.information}}
          </span>
        </li>

      </ul>
    </section>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  props: ["detailAll"],
   created(){
   }

}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_curriculum"
  </style>
