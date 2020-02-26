import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuexDemo1 from '@/components/vuex-demo1'
import counter from '@/components/Counter'
import counterHot from '@/components/CounterHot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuexDemo1',
      component: vuexDemo1
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path: '/counterHot',
      name: 'counterHot',
      component: counterHot
    }
  ]
})
