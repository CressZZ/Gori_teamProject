<template lang="html">
  <!-- curriculum -->
  <section class="curriculum">

      <h2 class="curriculum__heading">커리큘럼</h2>
      <ul class="curriculum__list">
        <li class="row">
          <strong>1회차</strong></br>
          <span class="col-7-12 col-4-4">
            <ul>
              <li v-for = "data in datalist">
                <label>
                  <input type="checkbox" v-model="data.done">{{data.task}}
                </label>
              </li>
            </ul>
          </span>
        </li>
        <li class="row">
          <strong>2회차</strong></br>
          <span class="col-7-12 col-4-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nisi sapiente laboriosam, fugiat nemo fugit, temporibus dolorem nulla non incidunt.</span>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  data(){
    return{
      user_input: {
        done: false,
        task: "hahah"
      },
      datalist: []
    }
  },
   created(){
     this.resource = this.$resource('gori_test.json')
     console.log('this.$resource:', this.resource)
    //  console.log(this.$http);
    // this.$http.post('https://gori-f0de6.firebaseio.com/gori_test.json', this.user_input)
    //           .then(function(response){
    //             console.log(response);
              // })


    // this.$http.get('')
    //           .then(function(r){
    //             console.log("get:",r.json());
    //             return r.json();
    //           })
    //           .then(function(data) {
    //             console.log('data:',data);
    //             console.log('objec.values(Data):', Object.values(data))
    //             const datalist = Object.values(data);
    //             console.log(Array.isArray(datalist));
    //             this.datalist = datalist
    //           })
    this.resource.save({},this.user_input)
                  .then(function(response){
                    console.log(response);
                    return response.json();
                  })
                  .then(function(test){
                    console.log("test:",test)
                    console.log("value:",Object.values(test))
                  })
    this.resource.get({})
                  .then(function(r){
                    console.log(r)
                    console.log('body:', r.body)
                    console.log('body:', Object.values(r.body))

                    return r.json()
                  })
                  .then(function(t){
                    console.log("t:",t)
                    console.log("value:",Object.values(t))

                  })


   }

}
</script>

  <style lang="sass">
    // @import "../sass/gen_source"
    // @import "../sass/gen_mixin"
    // @import "../sass/lec_curriculum"
  </style>
