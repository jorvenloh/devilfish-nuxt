export default {
	plugins: ['~/plugins/auth.js'],
	redirect: {
		login: '/login',
		logout: '/',
		callback: '/login',
		user: '/'
	},
	strategies: {
		password_grant_custom: {
			_scheme: '~/schemes/PasswordGrantScheme.js',
			client_id: process.env.PASSPORT_PASSWORD_GRANT_CLIENT_ID,
			client_secret: process.env.PASSPORT_PASSWORD_GRANT_CLIENT_SECRET,
			endpoints: {
				login: {
					url: '/api/login',
					method: 'post',
					propertyName: 'access_token'
				},
				logout: {
					url: '/api/logout',
					method: 'post'
				},
				user: {
					url: 'api/me',
					method: 'get'
				}
			}
		}

		// google: {
		// 	client_id: '...'
		// },

		// facebook: {
		// 	client_id: '...',
		// 	userinfo_endpoint: 'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
		// 	scope: ['public_profile', 'email', 'user_birthday']
		// },
	}
}
