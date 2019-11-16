import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state={
	isshow:false
}

const mutations={
	showaside(state){
		state.isshow = !state.isshow
	}
}

const actions={
	showaside:({commit})=>{
		commit('showaside')
	}
}

const getters={
	isshow(state){return state.isshow}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
