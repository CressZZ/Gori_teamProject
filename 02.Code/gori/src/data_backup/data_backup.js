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

&& detailAll.locations[0] ? detailAll.locations[0].region : ""}}    {{detailAll.locations[1] ? "/" + detailAll.locations[1].region : ""



<strong>{{detailAll.locations[0].region}}</strong>
<span>{{detailAll.locations[0].specific_location}}</span>
</li>
<li class="apply__info__time">
<i class="fontello icon-clock"></i>
<strong>{{detailAll.hours_per_class + " "}} 시간/회 </strong>
<span>{{detailAll.locations[0].time[0]}}</span>
</li>
<li class="apply__info__group">
<i class="fontello icon-group-circled"></i>
<strong>{{detailAll.type}}</strong>
<span>{{detailAll.type === "1:1 수업"}} ? {{""}} | 최소인원 2명</span>



case "고려대" :
self.markers[0].position.lat  = 37.591034;
self.markers[0].position.lng = 127.027796;
break;
case "서울대" :
self.markers[0].position.lat  = 37.481272;
self.markers[0].position.lng = 126.952717;
break;
case "연세대" :
self.markers[0].position.lat  = 37.565988;
self.markers[0].position.lng = 126.938604;
break;
case "홍익대" :
self.markers[0].position.lat  = 37.558335;
self.markers[0].position.lng = 126.925534;
break;
case "이화여대" :
self.markers[0].position.lat  = 37.562096;
self.markers[0].position.lng = 126.946872;
break;
case "부산대" :
self.markers[0].position.lat  = 35.233914;
self.markers[0].position.lng = 129.079764;
break;
case "중앙대" :
self.markers[0].position.lat  = 37.504368;
self.markers[0].position.lng = 126.957018;
break;
case "건국대" :
self.markers[0].position.lat  = 37.541052;
self.markers[0].position.lng = 127.079407;
break;
case "한양대" :
self.markers[0].position.lat  = 37.557445;
self.markers[0].position.lng = 127.045300;
break;
case "강남" :
self.markers[0].position.lat  = 37.498470;
self.markers[0].position.lng = 127.027610;
break;
case "신촌" :
self.markers[0].position.lat  = 37.560218;
self.markers[0].position.lng = 126.942333;
break;
case "사당" :
self.markers[0].position.lat  = 37.476823;
self.markers[0].position.lng = 126.981654;
break;
case "잠실" :
self.markers[0].position.lat  = 37.513610;
self.markers[0].position.lng = 127.101099;
break;
case "종로" :
self.markers[0].position.lat  = 37.573394;
self.markers[0].position.lng = 126.979624;
break;
case "혜화" :
self.markers[0].position.lat  = 37.583979;
self.markers[0].position.lng = 127.002063;
break;
case "용산" :
self.markers[0].position.lat  = 37.530503;
self.markers[0].position.lng = 126.964839;
break;
case "합정" :
self.markers[0].position.lat  = 37.549916;
self.markers[0].position.lng = 126.914034;
break;
case "목동" :
self.markers[0].position.lat  = 37.526577;
self.markers[0].position.lng = 126.864042;
break;









{
  "pk": 1,
  "title": "네일 고수가 되실 수 있어요",
  "category": "헬스 / 뷰티",
  "type": "1:1 수업",
  "locations": [
    {
      "region": "강남",
      "specific_location": "협의 후 결정",
      "day": "월",
      "extra_fee": "Y",
      "extra_fee_amount": "3만원",
      "time": [
        "14:00-18:00"
      ]
    },
    {
      "region": "신촌",
      "specific_location": "협의 후 결정",
      "day": "화",
      "extra_fee": "N",
      "extra_fee_amount": "",
      "time": [
        "16:00-22:00"
      ]
    }
  ]
