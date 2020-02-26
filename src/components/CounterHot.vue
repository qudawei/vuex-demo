<template>
  <div>
      Clicked:{{count}}times,count is {{evenOrOdd}}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementIfAsync">increment async</button>
      <div>
        recentHistory:(last {{limit}} entry): {{history}}
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  mounted(){
      console.log('你为什么不说话？');
  },
  computed:mapGetters('counterHot',[
    'count',
    'history',
    'evenOrOdd',
    'limit'
  ]),
  methods:mapActions('counterHot',[
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementIfAsync'
  ]),
}
</script>

<style>

</style>