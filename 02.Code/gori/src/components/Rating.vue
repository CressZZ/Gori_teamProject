<template>
  <div id="rating">
    <div class="star-rating">

        <label class="star-rating__star" v-for="rating in ratings"
        :class="{'is-selected': (value >= rating)}"
        @click="set(rating)" @mouseover="star_over(rating)" @mouseout="star_out">
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" v-model="value" >★</label>
<!-- :class="{'test': is_test}" -->
      </div>
  </div>
</template>


<script>
import {bus} from '../bus'

export default {

  data: function() {
          return {
            temp_value: null,
            ratings: [1, 2, 3, 4, 5],
            value: "",
          }
        },
        props: {
         },
       methods: {
        star_over: function(index) {
              this.temp_value = this.value;
              this.value = index;
          },
        star_out: function() {
              this.value = this.temp_value;
        },
        set: function(value) {
              this.value = value;
              this.temp_value = this.value;

        },
  }
}






</script>

<style lang="sass">


</style>
