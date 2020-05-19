<template>
	<v-switch
		v-model="$vuetify.theme.dark"
		hide-details
		inset
		label="Dark Mode"
	></v-switch>
</template>

<script>
export default {}
</script>

<style scoped>
.v-input--selection-controls {
	margin-top: 0px;
}
</style>
