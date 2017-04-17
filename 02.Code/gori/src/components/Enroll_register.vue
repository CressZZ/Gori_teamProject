<template >
  <section class="enroll-lec-all">
    <h2 class="enroll-lec__heading">수업등록</h2>
    <fieldset class="">
      <div class="">
        <div class="enroll-lec__list">
          <h3 class="">수업제목</h3>
          <input type="text" placeholder="과목명을 입력해주세요" class="enroll-lec__list-title">
        </div>
        <div class="enroll-lec__list">
          <h3>카테고리</h3>
          <label class="enroll-lec__category">
            <select class="">
              <option value=""> 카테고리 전체</option>
              <option value="hnb"> 헬스/뷰티 </option>
              <option value="lan">외국어</option>
              <option value="com">컴퓨터</option>
              <option value="art">미술/음악</option>
              <option value="spo">스포츠</option>
              <option value="job">전공/취업</option>
              <option value="hob">이색취미</option>
              <option value="etc">기타</option>
            </select>
          </label>
        </div>
        <div class="enroll-lec__list">
        <h3 >수업형태</h3>
          <form class="enroll-lec__type">
            <label><input type="radio" name="type" value="1"> 1:1 수업</label>
            <label><input type="radio"  name="type" value="2"> 그룹수업</label>
            <label><input type="radio"  name="type" value="3"> 원데이</label>
          </form>
        </div>
        <div class="enroll-lec__list enroll-lec__picture">
          <h3 class="">커버사진</h3>
          <label>
            <input class="enroll-lec__picture"type="file" multiple="">
          </label>
        </div>
        <div class="enroll-lec__list enroll-lec__introduce-tutor">
          <h3 class="">튜터소개</h3>
          <input type="text" placeholder="내용을 입력해주세요" class="">
        </div>
        <div class="enroll-lec__list enroll-lec__introduce-lec">
          <h3 class="">수업소개</h3>
          <input type="text" placeholder="내용을 입력해주세요" class="">
        </div>
        <div class="enroll-lec__curriculum">
          <h3 class="">커리큘럼</h3>
          <ul class="enroll-lec__curriculum-list">
            <li v-for = "item in curriculum">
              <p class="enroll-lec__curriculum1">{{item}}회차</p>
              <textarea placeholder="내용을 입력해주세요" class=""></textarea>
            </li>


            <div class="curriculum__button-wrapper">
              <button @click = "addCurriculum" type= "button"> + </button>
              <button @click = "deleteCurriculum" type= "button"> - </button>

            </div>
          </ul>

        </div>
      </div>
    </fieldset>
    <button type="button" class="enroll__next-btn"> 다음 </button>
  </section>
</template>

<script>
export default {
  data(){
    return {
      curriculum: 2,
    }
  },
  methods: {
    addCurriculum(){
      this.curriculum = this.curriculum + 1;
      console.log("this.curriculum:",this.curriculum)
    },
    deleteCurriculum(){
      if(this.curriculum > 2){
        this.curriculum = this.curriculum - 1;
      } else {
        console.log("nonononono")
      }
    }
  },
}
</script>

<style lang="css">
</style>
