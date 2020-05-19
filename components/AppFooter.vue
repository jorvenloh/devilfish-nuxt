<template>
	<v-footer>
		<span
			>{{ appName }} &copy; {{ new Date().getFullYear() }}. All rights
			reserved</span
		>
	</v-footer>
</template>

<script>
export default {
	data() {
		return {
			appName: process.env.APP_NAME
		}
	}
}
</script>

<style></style>
