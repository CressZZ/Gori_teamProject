<template lang="html">
  <!-- QnA -->
  <section class="qna">
    <h2 class="qna__heading">문의하기 32</h2>
    <div class="row">
      <div class="qna__write col-4-4 col-7-12">
        <textarea name="" rows="8" cols="80" placeholder="input text" wrap="on"></textarea>
        <button type="button" class="">등록</button>
      </div>

    </div>
    <ul class="qna__list">
      <li class="qna__list__q">
        <div class="row">
          <div class="qna__list__q__writer col-4-4 col-7-12">
            <span><div>Q</div>작성자</span>
            <span class="qna__list__q__date">17.03.24 15:08</span>
          </div>
        </div>
        <div class="row">
          <p class="qna__list__q__descrip col-4-4 col-7-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laudantium velit adipisci repudiandae, eaque tempora quis aliquam ducimus sequi sit dolore pariatur, eos animi id voluptas molestias praesentium illum eveniet.</p>
        </div>
      </li>
      <li class="qna__list__a">
        <div class="row">
          <div class="qna__list__a__writer col-4-4 col-7-12" >
            <span><div>A</div>작성자</span>
            <span class="qna__list__a__date">17.03.24 15:08</span>
          </div>
        </div>
        <div class="row">
          <p class="qna__list__a__descrip col-4-4 col-7-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laudantium velit adipisci repudiandae, eaque tempora quis aliquam ducimus sequi sit dolore pariatur, eos animi id voluptas molestias praesentium illum eveniet.</p>
        </div>
      </li>
    </ul>
    <div class="row">
      <div class="qna__page col-4-4 col-7-12">
        <a href="#" class="qna__page__btn on_page">1</a>
        <a href="#" class="qna__page__btn">2</a>
        <a href="#" class="qna__page__btn">3</a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
}
</script>

  <style lang="sass">
    @import "../sass/gen_source"
    @import "../sass/gen_mixin"
    @import "../sass/lec_qna"
  </style>
