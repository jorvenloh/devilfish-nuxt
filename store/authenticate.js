export const state = () => ({
	email: null,
	username: null,
	access_token: null,
	refresh_token: null
})

export const getters = {
	userDisplayName: (state) => ({ brief = false } = {}) => {
		if (state.auth.username === null && state.auth.email === null)
			return null
		if (!brief) return state.auth.username || state.auth.email
		return (state.auth.username || state.auth.email)
			.substring(0, 2)
			.toUpperCase()
	},
	isUserLoggedIn: (state) => !!state.auth.access_token
}

export const mutations = {
	setEmail(state, email) {
		state.auth.email = email
		// localStorage.setItem('email', email);
	},
	setUsername(state, username) {
		state.auth.username = username
		// localStorage.setItem('username', username);
	},
	setAccessToken(state, token) {
		state.auth.access_token = token
		// localStorage.setItem('access_token', token);
	},
	unsetEmail(state) {
		state.auth.email = null
		// localStorage.removeItem('email');
	},
	unsetUsername(state) {
		state.auth.username = null
		// localStorage.removeItem('username');
	},
	unsetAccessToken(state) {
		state.auth.access_token = null
		// localStorage.removeItem('access_token');
	}
}

export const actions = {
	performLogin(context, loginParams) {
		return new Promise((resolve, reject) => {
			this.$axios
				.$post('/login', loginParams)
				.then((response) => {
					const {
						user: { email },
						user: { username },
						access_token: accessToken
					} = response.data
					context.commit('setAccessToken', accessToken)
					context.commit('setEmail', email)
					if (username) context.commit('setUsername', username)
					resolve(response.data)
				})
				.catch((error) => {
					console.log(error)
					reject(error.response.data)
				})
		})
	},
	performLogout(context) {
		// axios
		// 	.post('/logout')
		// 	.then(() => {
		// 		context.commit('unsetAccessToken')
		// 		context.commit('unsetEmail')
		// 		context.commit('unsetUsername')
		// 		// eventBus.$emit('open_snackbar', {
		// 		// 	message: 'You have logged out successfully'
		// 		// })
		// 		// router.push('/').catch(() => {});
		// 	})
		// 	.catch(() => {
		// 		// eventBus.$emit('open_snackbar', {
		// 		// 	message: 'Logout failed'
		// 		// })
		// 	})
	}
}
