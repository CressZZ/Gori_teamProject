<template>
  <div id="app">
      <router-view name='join' :joinvisibles="joinvisibles" @joinnonVisible = "joinnonVisible"></router-view>
      <router-view name='login' :loginvisibles="loginvisibles" @loginnonVisible = "loginnonVisible" ></router-view>
      <router-view name="header" @joinvisible = "joinvisible" @loginvisible = "loginvisible"></router-view>
      <router-view :classlist="classlist"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'app',
  data () {
    return {
      joinvisibles: false,
      loginvisibles: false,
      classlistTemp: [],
      newclasslist: [],
      // datalist:[],
      classlist:
      [
    {
        "pk": 2,
        "title": "4주만 몸짱을 만들어 드립니다~",
        "category": "스포츠",
        "type": "그룹 수업",
        "tutor": {
            "pk": 8,
            "user_id": "suji@gmail.com",
            "name": "박수지",
            "nickname": "건강지킴이",
            "is_verified": true,
            "profile_image": "https://projectgori.s3.amazonaws.com/media/member/profile_image/%E1%84%8B%E1%85%A8%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%AA.jpeg",
            "cellphone": ""
        },
        "is_school": false,
        "cover_image": "https://projectgori.s3.amazonaws.com/media/talent/cover_image/%E1%84%92%E1%85%A2%E1%86%AF%E1%84%89%E1%85%B3.jpeg",
        "price_per_hour": 12000,
        "hours_per_class": 1,
        "number_of_class": 8,
        "is_soldout": false,
        "created_date": "2017-04-05T11:29:52.728809Z",
        "average_rate": 0,
        "review_count": 0,
        "registration_count": 0,
        "regions": [
            "종로"
        ]
    },
    {
        "pk": 3,
        "title": "C언어 어려워도 쉽게 가르쳐드려요",
        "category": "컴퓨터",
        "type": "1:1 수업",
        "tutor": {
            "pk": 10,
            "user_id": "jisungpark@naver.com",
            "name": "박지성",
            "nickname": "컴신",
            "is_verified": true,
            "profile_image": "https://projectgori.s3.amazonaws.com/media/member/profile_image/jisung.jpeg",
            "cellphone": "01056463664"
        },
        "is_school": true,
        "cover_image": "https://projectgori.s3.amazonaws.com/media/talent/cover_image/%E1%84%8A%E1%85%B5%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A5.png",
        "price_per_hour": 12000,
        "hours_per_class": 2,
        "number_of_class": 8,
        "is_soldout": false,
        "created_date": "2017-04-05T11:57:21.278516Z",
        "average_rate": 0,
        "review_count": 0,
        "registration_count": 0,
        "regions": [
            "홍익대",
            "용산"
        ]
    },
    {
        "pk": 4,
        "title": "봉쥬르~불어 어렵지 않아요~",
        "category": "외국어",
        "type": "1:1 수업",
        "tutor": {
            "pk": 11,
            "user_id": "kimdj01@naver.com",
            "name": "김다현",
            "nickname": "불어마스터",
            "is_verified": true,
            "profile_image": "https://projectgori.s3.amazonaws.com/media/member/profile_image/%E1%84%83%E1%85%A1%E1%84%92%E1%85%A7%E1%86%AB.jpeg",
            "cellphone": "01065657387"
        },
        "is_school": true,
        "cover_image": "https://projectgori.s3.amazonaws.com/media/talent/cover_image/%E1%84%87%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%A5.jpg",
        "price_per_hour": 20000,
        "hours_per_class": 2,
        "number_of_class": 4,
        "is_soldout": false,
        "created_date": "2017-04-05T12:08:07.123865Z",
        "average_rate": 3.6,
        "review_count": 1,
        "registration_count": 0,
        "regions": [
            "서울대",
            "사당"
        ]
    },
    {
        "pk": 5,
        "title": "서버시간 테스트",
        "category": "헬스 / 뷰티",
        "type": "1:1 수업",
        "tutor": {
            "pk": 5,
            "user_id": "y.gori",
            "name": "조영나",
            "nickname": "",
            "is_verified": true,
            "profile_image": null,
            "cellphone": ""
        },
        "is_school": false,
        "cover_image": "https://projectgori.s3.amazonaws.com/media/talent/cover_image/201445581418016770.jpg",
        "price_per_hour": 101,
        "hours_per_class": 1,
        "number_of_class": 1,
        "is_soldout": false,
        "created_date": "2017-04-06T05:27:23.757110Z",
        "average_rate": 0,
        "review_count": 0,
        "registration_count": 0,
        "regions": []
    },
    {
        "pk": 1,
        "title": "네일 고수가 되실 수 있어요",
        "category": "헬스 / 뷰티",
        "type": "1:1 수업",
        "tutor": {
            "pk": 6,
            "user_id": "yuna@gmail.com",
            "name": "김유나",
            "nickname": "유나짱",
            "is_verified": true,
            "profile_image": "https://projectgori.s3.amazonaws.com/media/member/profile_image/nail.jpeg",
            "cellphone": "01073858237"
        },
        "is_school": false,
        "cover_image": "https://projectgori.s3.amazonaws.com/media/talent/cover_image/02.jpeg",
        "price_per_hour": 13000,
        "hours_per_class": 2,
        "number_of_class": 4,
        "is_soldout": false,
        "created_date": "2017-04-05T10:21:06.956001Z",
        "average_rate": 0,
        "review_count": 0,
        "registration_count": 0,
        "regions": [
            "강남",
            "신촌"
        ]
    }
]

    }
  },
created() {
  // for (var i = 0; i < this.classlist.length; i++){
  //   if(this.classlist[i].type === "그룹 수업"){
  //     this.classlistTemp[i] = {type: "1:1"};
  //     console.log('temp:', this.classlistTemp[i])
  //   }
  // };

  this.newclasslist = this.classlist.filter(function(item){
    return item.type === "1:1 수업";
});
  console.log("Filter results:",this.newclasslist);

  // this.$http.get('https://gori-f0de6.firebaseio.com/gori_test.json')
  //           .then( function(response) {
  //             console.log("response:",response)
  //             });


  // console.log('$:', $.fn.jquery);
  this.$http.get('https://mozzi.co.kr/api/talent/list/')
  // this.$http.get('https://gori-f0de6.firebaseio.com/gori_test.json')

            .then(function(response){
            //   console.log(r)
              return response.json()
            })
            .then(function(data){
              console.log(data)
              this.datalist = Object.values(data);
              console.log('datalist:',this.datalist)
            })

},
mounted(){
},
methods: {
  loginvisible(){
    this.loginvisibles = true;
  },
  loginnonVisible(){
    this.loginvisibles= false;
  },
  joinvisible(){
    this.joinvisibles = true;
  },
  joinnonVisible(){
    this.joinvisibles= false;
  },
},
}
</script>

<style lang="sass">
  @import "sass/index"
  // @import "fontello/css/fontello.css"



</style>
