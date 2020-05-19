<template>
	<v-app dark>
		<v-content>
			<nuxt />
		</v-content>
		<AppFooter></AppFooter>
	</v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter'

export default {
	components: { AppFooter },
	data() {
		return {}
	}
}
</script>

<style scoped></style>
