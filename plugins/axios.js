import axios from 'axios'
import Qs from 'qs'
// import router from '../router';
import store from '../store'
import eventBus from '@/plugins/eventBus'

const options = {
	baseURL: 'http://devilfish.local/api',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	paramsSerializer(params) {
		return Qs.stringify(params, { arrayFormat: 'brackets' })
	},
	timeout: 60000
}

const axiosInstance = axios.create(options)

// Add a request interceptor
axiosInstance.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		// console.log('Interceptor request: preparing request');

		// check if user login token
		if (store.state.auth.access_token) {
			config.headers.Authorization = `Bearer ${store.state.auth.access_token}`
		}

		// trigger loading instance

		return config
	},
	function(error) {
		// Do something with request error
		// console.log('Interceptor request: Something is wrong, request error!');

		// stop loading instance

		return Promise.reject(error)
	}
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
	function(response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		// console.log('Interceptor response: Response is landing');

		// stop loading instance

		return response
	},
	function(error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// console.log('Interceptor response: An expected error has occured');

		// stop loading instance

		if (error.response) {
			switch (error.response.status) {
				case 401:
					// Unauthorized
					// 401 Eliminate token Information and jump to login page
					// store.commit(types.LOGOUT)
					// store.commit(delPermission)
					eventBus.$emit('open_snackbar', {
						color: 'error',
						message: 'Error 401 - Action unauthorized'
					})
					// Jump only if the current route is not a login page
					// router.currentRoute.path !== 'login' &&
					//     router.replace({
					//         path: 'login',
					//         query: { redirect: router.currentRoute.path }
					//     });
					break
				case 404:
					eventBus.$emit('open_snackbar', {
						message: 'Error 404 - Page not found',
						optionalArgs: {
							bgColor: 'error',
							icon: 'error_outline'
						}
					})
					break

				case 500:
					eventBus.$emit('open_snackbar', {
						message: 'Error 500 - Ops, Something went wrong',
						optionalArgs: {
							bgColor: 'error',
							icon: 'error_outline'
						}
					})
					break
			}
		}

		return Promise.reject(error)
	}
)

export default axiosInstance
