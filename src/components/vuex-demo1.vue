<template>
    <div>
        <div>我是不是你最疼爱的人？你为什么不说话！{{count}}{{flag}}</div>
        <button @click="changeCount">+</button>
        <button @click="dispathAction">分发actions</button>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'


export default {
    computed: mapState({
        count:state => state.count,
        flag:'flag',
    }),
    methods:{
        changeCount(){
            this.$store.commit('updateCount',{count:200});
            console.log('this.$store.state.count', this.$store.state.count);
        },
        dispathAction(){
            this.$store.dispatch('increment')
        }
    },
    mounted(){
        console.log('getter', this.$store.getters.doneTodos)
        let num = this.$store.getters.getTodoById(2) 
        console.log('num', num);
    }
}
</script>

<style>

</style>