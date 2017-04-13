// import Vuex from 'vuex'


export const stores = {
  state: {
    login: {
      is_login: false,
      Token: "",
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
