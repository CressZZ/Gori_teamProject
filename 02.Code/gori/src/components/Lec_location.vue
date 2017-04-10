<template>
  <!-- location(map) -->
  <section class="location row">
    <h2 class="location__heading">위치</h2>
    <!-- <div class="col-7-12 col-4-4" id="map"></div> -->
    <gmap-map
      :class="['g-map', 'col-7-12', 'col-4-4']"
      :center="center"
      :zoom="8"
    >
      <!-- <gmap-marker
        v-for="m in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker> -->
    </gmap-map>
  </section>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAjUnvTeaPsjSyxabVD9CFTNbEbnS8mZ4o',
    // v: '버전 넘버(옵션)',
    // libraries: 'places', //// 사용자에게 플레이스 정보를 입력 받으려면...
  }
});

export default {

  data(){
    return {
      center: {lat: -34.397, lng: 150.644},
      // markers: [{
      //   position: {lat: 10.0, lng: 10.0}
      // }, {
      //   position: {lat: 11.0, lng: 11.0}
      // }]
    }
  },

  mounted() {
    // var location = document.querySelector('.location')
    // var body = document.querySelector('body')
    // //
    // var script = document.createElement('script');
    // script.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjUnvTeaPsjSyxabVD9CFTNbEbnS8mZ4o&callback=initMap ");
    // script.setAttribute('class', 'map')
    // location.appendChild(script)
    //
    // var scriptInit = document.createElement('script');
    // scriptInit.setAttribute('class', 'init')
    // var initContent = document.createTextNode (
    //   function initMap() {
    //     // Create a map object and specify the DOM element for display.
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       scrollwheel: false,
    //       zoom: 8
    //     });
    //   }
    // )
    // scriptInit.appendChild(initContent)
    // location.appendChild(scriptInit)

//
  },
  beforeDestroy(){
    // var location = document.querySelector('.location')
    // var script = document.querySelector('.map')
    // console.log(location)
    // console.log(script)
    //
    // location.removeChild(script)


    // location.removeChild(script)

    // console.log('destroy')
    // var body = document.querySelector('body')
    // var location = document.querySelector('.location')
    //
    // console.log('locatoin:', location)
    // var maps = document.querySelector('.map')
    // console.log('map:',maps)
    //
    //
    //
    // var scriptInit = document.querySelector('.init')

  },


  computed(){

  },


}
</script>

  <style lang="sass" scoped>
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_location"
    .g-map
      // width: 500px
      height: 300px
  </style>
