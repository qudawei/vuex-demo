<template>
  <div>
      Clicked:{{$store.state.counter.count}}times,count is {{evenOrOdd}}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    mounted(){
        console.log('我是不是你最疼爱的人？');
    },
    computed: mapGetters('counter',[
        'evenOrOdd'
    ]),
    methods: mapActions('counter',[
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style  @scoped>
</style>