export default {
	position: 'bottom-left',
	duration: 50000,
	keepOnHover: true,
	className: 'toast-message',
	register: [
		// Register custom toasts
		{
			name: 'server_error',
			message: (payload) => {
				if (!payload.message) return "Opss, something went wrong"
				return payload.message
			},
			options: {
				type: 'error',
				icon: 'error'
			}
		},
		{
			name: 'unauthorize_error',
			message: 'Unauthenticated action',
			options: {
				type: 'error',
				icon: 'error'
			}
		},

	]
}
