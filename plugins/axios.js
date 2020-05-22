import Qs from 'qs'

const options = {
	baseURL: process.env.API_BASE_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	},
	paramsSerializer(params) {
		return Qs.stringify(params, { arrayFormat: 'brackets' })
	},
	timeout: 60000
}

export default options
