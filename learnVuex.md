## Vuex
+ 改变store中的state的唯一途径就是显式地提交 (commit) mutation。
+ Getter接受state作为其第一个参数,接受其他getters作为第二个参数
+ getter可以通过返回函数，从而实现传参
+ mutation的载荷（payload）
+ Action函数接受一个与store实例具有相同方法和属性的context对象:commit(mutation),state,getters
+ 分发Actions的两种方式：$store.dispatch(), mapActions
+ 
	+ mapState, mapGetters, mapMutations, mapActions
	+ Vuex.Store()
	+ store.getters
	+ store.commit()
	+ store.dispatch()

+ mapState中传参state
+ modules中的传参
	+ Getter(state, getters, rootState, rootGetters)