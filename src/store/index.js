import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import counterHot from './modules/counterHot'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        counter,
        counterHot
    }
    // state:{
    //     count:0,
    // },
    // mutations:{
    //     increment (state) {
    //         state.count++
    //     },
    //     decrement (state) {
    //         state.count--
    //     },
    // },
    // actions: {
    //     increment: ({ commit }) => commit('increment'),
    //     decrement: ({ commit }) => commit('decrement'),
    //     incrementIfOdd ({ commit, state }) {
    //         if ((state.count + 1) % 2 === 0) {
    //         commit('increment')
    //         }
    //     },
    //     incrementAsync ({ commit }) {
    //         return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             commit('increment')
    //             resolve()
    //         }, 1000)
    //         })
    //     }
    // },
    // getters: {
    //     evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
    // }
})
export default store;