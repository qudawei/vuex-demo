const counterHot = {
    namespaced: true,
    state:{
        count:0,
        limit:5,
        history:[],
        evenOrOdd:''
    },
    mutations:{
        increment(state){
            state.count++;
            state.history.push('increment');
        },
        decrement(state){
            state.count--;
            state.history.push('decrement');
        }
    },
    actions:{
        increment(context){
            context.commit("increment");
        },
        decrement(context){
            context.commit("decrement");
        },
        incrementIfOdd(context){
            if(context.state.count % 2 != 0){
                console.log('context', context);
                context.commit("increment");
            }
        },
        incrementIfAsync(context){
            return new Promise((resolve,reject) =>{
                setTimeout(()=>{
                    context.commit("increment");
                    resolve();
                },1000)
            })
        },
    },
    getters:{
        history:state => {
            debugger
            const end = state.history.length
            const begin = end - state.limit < 0 ? 0 : end - state.limit
            return state.history
              .slice(begin, end).reverse()
              .join(', ')
        },
        evenOrOdd :state => state.count % 2 === 0 ? 'even' : 'odd',
        limit:state => state.limit,
        count:state => state.count
    }
}
export default counterHot;