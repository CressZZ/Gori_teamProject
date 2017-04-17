<template >

<div class="enroll__detail">
  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading">커리큘럼</h2>
    <fieldset class="">

  <div class="enroll-lec__curriculum">
    <h3 class="">커리큘럼</h3>
    <ul class="enroll-lec__curriculum-list">
      <li v-for = "(item, index) in curriculumnum">
        <p class="enroll-lec__curriculum1">{{item}}회차</p>
        <textarea  v-model = "tempcurriculum" @onchange = "inputCurriculum" placeholder="내용을 입력해주세요" class=""></textarea>
      </li>


      <div class="curriculum__button-wrapper">
        <button @click = "addCurriculum" type= "button"> + </button>
        <button @click = "deleteCurriculum" type= "button"> - </button>

      </div>
    </ul>

  </div>
</fieldset>
</section>


  <section class="enroll-lec__time-cost">
    <h2 class="enroll-lec__time-cost__heading">시간 및 비용 설정</h2>
    <fieldset class="">

      <div class="row_group">
        <div class="enroll-lec__list">
          <h3 class="">수업가능 요일</h3>

          <form  class="enroll-lec__day">
            <input type="checkbox" id="mon" value="mon" v-model="registerdetailInfo.day">
            <label for="mon">월</label>
            <input type="checkbox" id="tue" value="tue" v-model="registerdetailInfo.day">
            <label for="tue">화</label>
            <input type="checkbox" id="wed" value="wed" v-model="registerdetailInfo.day">
            <label for="wed">수</label>
            <input type="checkbox" id="thu" value="thu" v-model="registerdetailInfo.day">
            <label for="thu">목</label>
            <input type="checkbox" id="fri" value="fri" v-model="registerdetailInfo.day">
            <label for="fri">금</label>
            <input type="checkbox" id="sat" value="sat" v-model="registerdetailInfo.day">
            <label for="sat">토</label>
            <input type="checkbox" id="sun" value="sun" v-model="registerdetailInfo.day">
            <label for="sun">일</label>
          </form>

        </div>
        <div class="enroll-lec__list enroll-lec__time">
          <h3 class="">수업시간</h3>
          <input type="text" v-model = "registerdetailInfo.time" placeholder="수업가능한 시간을 적어주세요 예:9:00~11:00/13:00~14:00" class="">
        </div>
        <!-- <div class="enroll-lec__list enroll-lec__timeperday">
          <h3 class="">기본시간</h3>
          <label class="enroll-lec__timeperday-list">
            <select v-model = "registerInfo.hours_per_class" class="">
              <option value = "1">1 시간</option>
              <option value = "2">2 시간</option>
              <option value = "3">3 시간</option>
              <option value = "4">4 시간</option>
              <option value = "5">5 시간</option>
              <option value = "6">6 시간</option>
              <option value = "7">7 시간</option>
              <option value = "8">8 시간</option>
              <option value = "9">9 시간</option>
              <option value = "10">10 시간</option>
            </select>
          </label>
        </div>
        <div class="enroll-lec__list enroll-lec__num">
          <h3 class="">수업횟수</h3>
          <input v-model = "registerInfo.number_of_class" type="text" placeholder="총 수업 횟수를 적어주세요" class=""> &nbsp &nbsp 회
        </div>
        <div class="enroll-lec__list enroll-lec__cost">
          <h3 class="">시간당 가격</h3>
          <input v-model = "registerInfo.price_per_hour" type="text" placeholder="1시간 당 가격을 적어주세요" class="">&nbsp &nbsp 원/시간
        </div>
        <div class="enroll-lec__list enroll-lec__totalcost">
          <h3 class="">수업비용</h3>
          <input type="text" placeholder="총 수업 비용을 안내합니다" class="">
        </div> -->
      </div>
    </fieldset>
  </section>


  <section class="enroll-lec-location">
    <h2 class="enroll-lec-location__heading">장소등록</h2>
    <fieldset class="">
      <div class="">
        <div class="enroll-lec__list ">
          <h3 class="">대표장소</h3>

          <label class="enroll-lec__location">
            <select  v-model = "registerdetailInfo.region" >
              <option value=""> 지역 전체</option>
              <option value="kou">고려대</option>
              <option value="snu">서울대</option>
              <option value="you">연세대</option>
              <option value="hou">홍익대</option>
              <option value="ewwu">이화여대</option>
              <option value="bsu">부산대</option>
              <option value="jau">중앙대</option>
              <option value="ggu">건국대</option>
              <option value="hyu">한양대</option>
              <option value="kn">강남</option>
              <option value="sc">신촌</option>
              <option value="sd">사당</option>
              <option value="js">잠실</option>
              <option value="jr">종로</option>
              <option value="hh">혜화</option>
              <option value="ys">용산</option>
              <option value="hj">합정</option>
              <option value="md">목동</option>
              <option value="etc">기타</option>
            </select>
          </label>
        </div>
        <div class="enroll-lec__list enroll-lec-location-notice-qa">
          <h3 class="enroll-lec-location-notice-q">추가 비용</h3>
          <form class="enroll-lec__addcost">
            <input  v-model = "registerdetailInfo.extra_fee" type="radio" name="addcost" value="y"> <label>예, 있습니다. </label>
            <input  v-model = "registerdetailInfo.extra_fee" type="radio"  name="addcost" value="n"><label> 아니오,없습니다.</label>
          </form>
        </div>
        <div class="enroll-lec__list enroll-lec-location__heading-comment">
          <h3 class="">추가비용 코멘트</h3>
          <input  v-model = "registerdetailInfo.extra_fee_amount" type="text"
          placeholder="신청자 분들이 수업 장소와 시간에 대해 알면 좋은 사항들이 있나요?"
          class="">
        </div>
      </div>
    </fieldset>


  </section>
  <div class="enroll-btn-all">
    <button class="enroll-btn">등록하기</button>
  </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      registerdetailInfo: {
        talent_pk: null,
        region: "",
        specific_location: "NEGO",
        day: [],
        time: "",
        extra_fee: "",
        extra_fee_amount: "",
        location_info: "",
      },
      // registerInfo:{
      //   price_per_hour: "",
      //   hours_per_class: ""
      // },
      curriculumnum: 2,
      tempcurriculum:
        {
          talent_pk: "",
          information: ""
        },

      curriculum:[],
    }
  },
  methods:{
    addCurriculum(){
      this.curriculumnum = this.curriculumnum + 1;
      console.log("this.curriculum:",this.curriculumnum)
    },
    deleteCurriculum(){
      if(this.curriculumnum > 2){
        this.curriculumnum = this.curriculumnum - 1;
      } else {
        console.log("nonononono")
      }
    },
    inputCurriculum(){
      this.curriculum.push(this.tempcurriculum);
      this.tempcurriculum = ""
    }
  },

}
</script>

<style lang="css">
</style>
