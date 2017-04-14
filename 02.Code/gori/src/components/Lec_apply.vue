<template lang="html">
  <!-- apply -->
  <section class="apply">
    <h2 class="hidden__heading">수업 상세정보</h2>

      <div class="apply__wrapper">
        <div class="apply__info">
          <!-- div빼고 ul만 살림 (이전에는 div가 ul을 감싸는 구조로, div가 필요 없다고 판단) -->
          <div class="">
            <ul class="apply__info__list ">
              <li class="apply__info__location">
                <i class="fontello icon-location"></i>

                <strong>
                  {{detailAll.locations[0].region}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                   {{ locationDetail(location, index) }}
                   </template> -->
                </strong>
                <span>
                  {{detailAll.locations[0].specific_location}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                  {{ locationSpecific(location, index) }}
                  </template> -->
                </span>

                </li>
                <li class="apply__info__time">
                <i class="fontello icon-clock"></i>
                <strong>{{detailAll.hours_per_class + " "}} 시간/회 </strong>
                <span>
                  {{detailAll.locations[0].time[0]}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                    {{ locationTime(location, index) }}
                  </template> -->
                </span>
                </li>
                <li class="apply__info__group">
                <i class="fontello icon-group-circled"></i>
                <strong>{{detailAll.type}}</strong>
                <span>{{detailAll.type === "1:1 수업" ? "" : "최소인원 2명"}}</span>
              </li>
              <li class="apply__info__week">
                <i class="fontello icon-calendar"></i>
                <strong>
                  {{detailAll.locations[0].day}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                    {{ locationDay(location, index) }}
                  </template> -->
                </strong>
                <span>총 {{detailAll.number_of_class}}회 / {{String(detailAll.hours_per_class * detailAll.number_of_class * detailAll.price_per_hour).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+ " "}}원</span>
              </li>
              <li class="apply__info__additional-cost">
                <i class="fontello icon-won"></i>
                <strong>추가비용 <span>
                  {{detailAll.locations[0].extra_fee === "y" ? "있음" : "없음"}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                    {{ locationAddCost(location, index) }}
                  </template> -->

                </span></strong>
                <span>
                  {{detailAll.locations[0].extra_fee_amount ? detailAll.locations[0].extra_fee_amount : ""}}
                  <!-- <template v-for="(location, index) in detailAll.locations">
                    {{ locationAddCostAmount(location, index) }}
                  </template> -->

                </span>
              </li>
            </ul>
          </div>
        </div>


          <div class="apply__buttons">
            <button
            class="apply__buttons__btn-wish"
             @click.prevent = "toggleWishList()">찜하기
              <a href="#" class="apply__buttons__heart">
                <i v-bind:class="{ 'icon-heart-empty': !is_wishList, 'icon-heart': is_wishList }"></i>
              </a>
            </button>
            <button class="apply__buttons__btn-apply">수업 신청하기</button>
            <!-- 하트를 div에서 a로 change 함. 클릭이 되야 한다고 판단 -->
          </div>

      </div>

  </section>
</template>

<script>
import {bus} from '../bus'
export default {
  data(){
    return {
      is_wishList: false
    }
  },
  props: ["detailAll"],

  methods: {
    toggleWishList(){
      // console.log("addWishList");
      this.is_wishList = !this.is_wishList
    },


    // 오류가 발생하지 않도록 배열을 돌리기 위해 만든 메서드
    locationDetail(location, index) {
      return location && (index===0) ?
        location.region :
        "";
    },
    locationSpecific(location, index) {
      return location && (index===0) ?
        location.specific_location :
        "";
    },
    locationTime(location, index) {
      return location && (index===0) ?
        location.time[0] :
        "";
    },
    locationDay(location, index) {
      return location && (index===0) ?
        location.day :
        "";
    },
    locationAddCost(location, index) {

      return location && (index===0) ?
        location.extra_fee === "y" ? "있음" : "없음" : "";
    },
    locationAddCostAmount(location, index) {
      return location && (index===0) ?
        location.extra_fee_amount : "";
    },

  },
}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_apply"
  </style>
