export default {
	methods: {
		required: (v) => !!v || 'This field is required.',
		email: (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
		checked: (v) => v || 'This field must be checked',
		min(mininum = 6) {
			return (v) =>
				(v && v.length >= mininum) || `Min ${mininum} characters.`
		},
		max(maximum = 50) {
			return (v) =>
				(v && v.length <= maximum) || `Max ${maximum} characters.`
		}
	}
}
