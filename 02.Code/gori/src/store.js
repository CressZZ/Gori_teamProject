// import Vuex from 'vuex'


export const stores = {
  state: {
    login: {
      is_login: false,
      Token: "39248c0f2405edb4202fc393e5d7df367601f9cb",
      // Token: "",
      loginInfo: {
        username: "",
        email: "",
        password: "",
        },
      },
    join: {
      joinInfo: {
        username: "",
        password1: "",
        password2: "",
        name: ""
      },
    },
    // rating:{
    //   add:{
    //     talent_pk: this.$route.params.lecid,
    //     // v-model="add.curriculum"
    //     curriculum: "",
    //     // v-model="add.readiness"
    //     readiness	: "",
    //     // v-model="add.timeliness"
    //     timeliness: "",
    //     // v-model="add.delivery"
    //     delivery: "",
    //     // v-model="add.friendliness"
    //     friendliness: "",
    //     comment: ""
    //   },
    // },


  },
  mutations: {

      Token (state, Token) {
        state.login.is_login = true;
        state.login.Token = Token;
      },
      loginInfo (state, loginInfo){
        state.login.loginInfo = loginInfo
      },
      joinInfo (state, joinInfo){
        console.log(joinInfo)
        state.join.joinInfo = joinInfo
      },
      logout(state){
        state.login.is_login = false;
        state.login.Token = "";
      },
      setRating(state){

      }

  },
  actions: {
  //  submitLogin: function ({ commit }, { loginInfo }) {
  //    console.log("this.loginInfo:",loginInfo)
  //    this.$http.post('member/login/', loginInfo)
  //    .then(function(response){
  //      return response.json()
  //    })
  //    .then((data) => {
  //      commit('setkey', { key: data.key })
  //    })
  //    .catch( error => {
  //      alert(error.bodyText)
  //    });
  //  }
 },
};
