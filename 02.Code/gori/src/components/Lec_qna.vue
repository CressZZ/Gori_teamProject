<template lang="html">
  <!-- QnA -->
  <section class="qna" id="qna">
    <h2 class="qna__heading" >문의하기 32</h2>
    <div class="row">
      <div class="qna__write col-4-4 col-7-12">
        <textarea name="" placeholder="input text" wrap="on" v-model = "newQuestion.content"></textarea>
        <button type="button" class="" @click = "addNewQuestion">등록</button>
      </div>

    </div>
    <ul class="qna__list">



      <li class="qna__list__q" v-for = "question in questions" >
        <div class="row">
          <div class="qna__list__q__writer col-4-4 col-7-12">
            <span><div>{{question.type}}</div>{{question.name}}</span>
            <span class="qna__list__q__date">{{question.date}}</span>
          </div>
        </div>
        <div class="row">
          <p class="qna__list__q__descrip col-4-4 col-7-12">{{question.content}}</p>
        </div>
        <div class="qna__list__a">
          <div class="row">
            <div class="qna__list__a__writer col-4-4 col-7-12" >
              <span><div>A</div>작성자</span>
              <span class="qna__list__a__date">17.03.24 15:08</span>
            </div>
          </div>
          <div class="row">
            <p class="qna__list__a__descrip col-4-4 col-7-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente laudantium velit adipisci repudiandae, eaque tempora quis aliquam ducimus sequi sit dolore pariatur, eos animi id voluptas molestias praesentium illum eveniet.</p>
          </div>
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
  data: function(){
    return {
      questions: [
        {
          id: 1,
          type: "Q",
          name: "박영진",
          date: "99.03.24",
          time: "99:20",
          content: "되라 제말",
          answer: {
            is_answer: true,
            type: "A",
            name: "xbxj",
            date: "99.03.24",
            time: "99:20",
            content: "답변입니다. "
          },
        },
        {
          // is_answer: false,
          id: 2,
          type: "Q",
          name: "박숙미",
          date: "399.03.24",
          time: "39:20",
          content: "얍!",
          answer: {
            is_answer: false,
            type: "A",
            name: "xbxj",
            date: "99.03.24",
            time: "99:20",
            content: "답변입니다. "
          },
        },
      ],

      newQuestion: {
        id: 4,
        type: "Q",
        name: "박영진",
        date: "99.03.24",
        time: "99:20",
        content: "dsssd"
      }
    }
  },
  methods: {
    addNewQuestion(){
      this.questions.push(this.newQuestion)
      this.newQuestion.content = ""
      // console.log("questions:",this.questions)
    },
  },
  created(){
    // console.log("questions:",this.questions)
    // console.log("newQuestion:",this.newQuestion)

  }
}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_qna"
  </style>
