<template >
  <section class="enroll-lec-all">
    <h2 class="enroll-lec__heading">수업등록</h2>
    <fieldset class="">
      <div class="">
        <div class="enroll-lec__list">
          <h3 class="">수업제목</h3>
          <input v-model = "registerInfo.title" type="text" placeholder="과목명을 입력해주세요" class="enroll-lec__list-title">
        </div>
        <div class="enroll-lec__list">
          <h3>카테고리</h3>
          <label class="enroll-lec__category">
            <select @change = "" v-model="registerInfo.category" class="">
              <option value=""> 카테고리 전체</option>
              <option value="HNB"> 헬스/뷰티 </option>
              <option value="LAN">외국어</option>
              <option value="COM">컴퓨터</option>
              <option value="ART">미술/음악</option>
              <option value="SPO">스포츠</option>
              <option value="JOB">전공/취업</option>
              <option value="HOB">이색취미</option>
              <option value="ETC">기타</option>
            </select>
          </label>
        </div>
        <div class="enroll-lec__list">
        <h3 >수업형태</h3>
          <form class="enroll-lec__type">
            <input v-model = "registerInfo.type" id="1on1"type="radio" name="type" value="0"> <label for="1on1">1:1 수업</label>
            <input v-model = "registerInfo.type" id="group"type="radio"  name="type" value="1"><label for="group"> 그룹수업</label>
            <input v-model = "registerInfo.type" id="oneday"type="radio"  name="type" value="2"><label for="oneday"> 원데이</label>
          </form>
        </div>
        <div class="enroll-lec__list enroll-lec__picture">
          <h3 class="">커버사진</h3>
          <label>
            <input @change="sync" class="enroll-lec__picture" type="file" multiple="">
          </label>
        </div>
        <div class="enroll-lec__list enroll-lec__introduce-tutor">
          <h3 class="">튜터소개</h3>
          <input v-model = "registerInfo.tutor_info" type="text" placeholder="내용을 입력해주세요" class="">
        </div>
        <div class="enroll-lec__list enroll-lec__introduce-lec">
          <h3 class="">수업소개</h3>
          <input v-model = "registerInfo.class_info" type="text" placeholder="내용을 입력해주세요" class="">
        </div>
        <div class="enroll-lec__list enroll-lec__timeperday">
          <h3 class="">기본시간</h3>
          <label class="enroll-lec__timeperday-list">
            <select v-model = "registerInfo.hours_per_class" class="">
              <option value = 1 >1 시간</option>
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
        </div>
      <!-- </div> -->
        <!-- <div class="enroll-lec__curriculum">
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

        </div> -->
      </div>
    </fieldset>
    <button type="button" class="enroll__next-btn" @click="register"> 다음 </button>
  </section>
</template>

<script>
export default {
  data(){
    return{
      registerInfo: {
        title: "",
        tutor_info: "",
        class_info: "",
        cover_image: "",
        category: "",
        type: null,
        number_of_class: null,
        price_per_hour: null,
        hours_per_class: null,
        image: ""
      },
      curriculumnum: 2,
      tempcurriculum:
        {
          talent_pk: "",
          information: ""
        },

      curriculum:[],
    }
  },
  methods: {
    sync: function(e) {
    e.preventDefault()
    this.registerInfo.cover_image = e.target.files[0]
    console.log("this.image:",this.cover_image)

  },

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
    },
    register(){
      const data = new FormData()
      data.append('cover_image', this.registerInfo.cover_image)
      data.append('title', this.registerInfo.title)
      data.append('tutor_info', this.registerInfo.tutor_info)
      data.append('class_info', this.registerInfo.class_info)
      data.append('category', this.registerInfo.category)
      data.append('type', this.registerInfo.type)
      data.append('number_of_class', this.registerInfo.number_of_class)
      data.append('price_per_hour', this.registerInfo.price_per_hour)
      data.append('hours_per_class', this.registerInfo.hours_per_class)


      console.log("data:",data)

      this.$http.post('talent/create/',data,  {
      headers: {Authorization: `Token ${this.$store.state.login.Token}`}
      })
      .then(function(response){
        console.log("register-response:",response)
        this.registerInfo.title= ""
        this.registerInfo.tutor_info= ""
        this.registerInfo.class_info= ""
        this.registerInfo.cover_image= ""
        this.registerInfo.category= ""
        this.registerInfo.type= null
        this.registerInfo.number_of_class= null
        this.registerInfo.price_per_hour= null
        this.registerInfo.hours_per_class= null
        this.registerInfo.image= ""

      })
      .then(function(data){
        console.log("register-data:",data)
      })
      .catch( error => {
        console.error("error!!",error)
        alert(error.bodyText)
      });

    }

  },
}
</script>

<style lang="css">
</style>
