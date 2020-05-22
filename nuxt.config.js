import vuetifyOptions from './plugins/vuetify'
import axiosOptions from './plugins/axios'
import authOptions from './plugins/authOptions'
import toastOptions from './plugins/toast'
require('dotenv').config()

export default {
	mode: 'universal',
	env: {
		/* module options */
		apiBaseUrl: process.env.API_BASE_URL || 'http://devilfish.local/',
		baseUrl: process.env.BASE_URL || 'http://nuxt.devilfish.local:8000/',
		appName: process.env.APP_NAME || 'DEVILFISH',
		appDescription:
			process.env.APP_DESCRIPTION ||
			'UNLIMITED MOVIES, STAY DEVIL AND CHILL'
	},
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: '%s - ' + process.env.npm_package_name,
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [
		'@fortawesome/fontawesome-free/css/all.css',
		'@mdi/font/css/materialdesignicons.css',
		'material-design-icons-iconfont/dist/material-design-icons.css',
		'~/css/main.css'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~/plugins/eventBus', '~/plugins/filters'],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/vuetify'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/auth',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
		'@nuxtjs/toast'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: axiosOptions,

	/*
	 ** Auth module configuration
	 ** See https://auth.nuxtjs.org/guide/setup.html
	 */
	auth: authOptions,

	/*
	 ** vuetify module configuration
	 ** https://github.com/nuxt-community/vuetify-module
	 */
	vuetify: vuetifyOptions,

	/*
	 ** toast module configuration
	 ** https://github.com/shakee93/vue-toasted
	 */
	toast: toastOptions,

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
					options: {
						fix: true
					}
				})
			}
		}
	}
}
