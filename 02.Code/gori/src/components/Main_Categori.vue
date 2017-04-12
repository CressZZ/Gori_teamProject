<template lang="html">
  <div>
     <!-- Categori -->
    <section class="categori">
      <h2 class="hidden__heading">CATEGORI</h2>
      <!-- categori list 하나 삭제. 어학? -->
      <!-- 반응형 이미지를 구현하기 위해 img를 div에 한번 더 넣음. 괜히 복잡해보이므로 수정 가능하다면 수정 추천 -->
      <div class="categori__section-1">
        <a href="#"><img src="../media/img/categori/health.jpg" class="categori__list-1-2"></a>
        <a href="#"><img src="../media/img/categori/music.jpg" class="categori__list-1-2"></a>
      </div>
      <div class="categori__section-2">

        <h3 class="categori__subtitle categori__subtitle-m">HEALTH</h3>


        <a href="#" ><img src="../media/img/categori/dance.jpg" class="categori__list-1-2"></a>
      </div>
      <div class="categori__section-3">
        <a href="#"><img src="../media/img/categori/computer.jpg" class="categori__list-1-2"></a>
        <a href="#"><img src="../media/img/categori/study2.jpg" class="categori__list-1-2"></a>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  methods: {
  },
}
</script>

<style lang="sass">
  // @import "../sass/total"
  // @import "../sass/main_categori"
  // @import "../sass/main_carousel"

</style>
