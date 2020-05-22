// import axios from '@/plugins/axios';
// import eventBus from '@/plugins/eventBus';
// import router from '@/router';

// export const plugins = [eventBus]

export const state = () => ({
	counter: 0
})

export const mutations = {
	// increment(state) {
	// 	state.counter++
	// }
	myEmail: (state) => {
		return state.auth.user.email
	}
}

export const actions = {
	// Refer https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action
	// nuxtServerInit({ commit }, { req }) {
	// 	if (req.session.user) {
	// 		commit('user', req.session.user)
	// 	}
	// }
}
