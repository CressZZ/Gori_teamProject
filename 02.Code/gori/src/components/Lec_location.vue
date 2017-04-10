<template>
  <!-- location(map) -->
  <section class="location row">
    <h2 class="location__heading">위치</h2>
    <div class="col-7-12 col-4-4" id="map"></div>
  </section>
</template>

<script>
import $ from 'jquery'
export default {

  beforeCreate(){
  },
  mounted() {
    var location = document.querySelector('.location')
    var body = document.querySelector('body')

    var script = document.createElement('script');
    script.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=AIzaSyAjUnvTeaPsjSyxabVD9CFTNbEbnS8mZ4o&callback=initMap ")
    script.setAttribute('async', '')
    script.setAttribute('defer', '')
    script.setAttribute('class', 'map')
    location.appendChild(script)
//
////
    var scriptInit = document.createElement('script');
    scriptInit.setAttribute('class', 'init')
    var initContent = document.createTextNode (
      `function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
      }`
    )
    scriptInit.appendChild(initContent)
    location.appendChild(scriptInit)

//
  },
  destroyed(){
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

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_location"
  </style>
