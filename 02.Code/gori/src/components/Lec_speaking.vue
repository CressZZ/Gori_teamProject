<template lang="html">
  <!-- speaking -->
  <section class="speaking">
    <h2 class="hidden__heading">튜터소개</h2>
    <div class="row">

      <div class="row">
        <img :src="`${detailAll.tutor.profile_image}`" :alt="`${detailAll.tutor.nickname}`" class="speaking__tutor-picture  col-1-4">
        <strong class="speaking__tutor-speaking  col-5-12  push-2-12"> "{{detailAll.tutor_info ? detailAll.tutor_info : ""}}"</strong>

      </div>
      <p class="speaking__descrip col-4-4 col-7-12"></p>
    </div>
  </section>
</template>

<script>
export default {
  props: ["detailAll"],

}
</script>

  <style lang="sass">
    // .speaking
    //   transition: all 1s
  </style>
