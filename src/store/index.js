import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[],
    totalPrice: 0,
    totalCount: 0,
    isAllChecked: false
  },
  mutations: {
    updataList(state, payload){
      let flag = 0;
      for(let i = 0; i < state.cartList.length; i++){
        if(payload.title==state.cartList[i].title){
          state.cartList[i].count++;
          flag = 1;
          break;
        }
      }
      if(flag==0){
        state.cartList.push(payload)
      }
    },
    increment(state, payload){
      for(let i = 0; i < state.cartList.length; i++){
        if(state.cartList[i].title == payload){
          state.cartList[i].count++;
          break;
        }
      }
    },
    decrement(state, payload){
      for(let i = 0; i < state.cartList.length; i++){
        if(state.cartList[i].title == payload && state.cartList[i].count > 1){
          state.cartList[i].count--;
          break;
        }
      }
    },
    calculate(state){
      let total_price = 0;
      let total_count = 0;
      for(let i = 0; i < state.cartList.length; i++){
        if(state.cartList[i].is_checked){
          total_price += state.cartList[i].price * state.cartList[i].count
          total_count += state.cartList[i].count
        }
      }
      state.totalCount = total_count
      state.totalPrice = total_price.toFixed(2)
    },
    checkReverse(state, payload){
      for(let i = 0; i < state.cartList.length; i++){
        if(state.cartList[i].title == payload){
          state.cartList[i].is_checked = !state.cartList[i].is_checked;
          console.log(state.cartList[i].is_checked)
          break;
        }
      }
    },
    allSelected(state, payload){
      for(let i = 0; i < state.cartList.length; i++){
        Vue.set(state.cartList[i], 'is_checked', payload)
      }
    },
    isAllCheckedInit(state){
      for(let i = 0; i < state.cartList.length; i++){
          if(state.cartList[i].is_checked == false){
            state.isAllChecked = false
          }
        }
      }
  },
  actions: {
  },
  modules: {
  }
})
