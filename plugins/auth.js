export default function({ $auth }) {
	$auth.onError((error, name, endpoint) => {
		// console.error(error.response.data)
		$auth.$storage.setState('errors', error.response.data.errors)

		return error.response.data
	})
}
