<template>
	<v-app dark>
		<AppNavigationBar></AppNavigationBar>
		<v-content>
			<nuxt />
		</v-content>
		<AppFooter></AppFooter>
	</v-app>
</template>

<script>
import AppNavigationBar from '@/components/AppNavigationBar'
import AppFooter from '@/components/AppFooter'

export default {
	components: { AppNavigationBar, AppFooter },
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'mdi-apps',
					title: 'Welcome',
					to: '/'
				},
				{
					icon: 'mdi-chart-bubble',
					title: 'Inspire',
					to: '/inspire'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Vuetify.js'
		}
	}
}
</script>

<style scoped></style>
