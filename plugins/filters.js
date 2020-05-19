import Vue from 'vue'

Vue.filter('toCurrency', function(value) {
	if (!value) return 'FREE'

	if (typeof value !== 'number') return value

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'MYR',
		minimumFractionDigits: 2
	})
	return formatter.format(value)
})
