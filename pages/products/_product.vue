<template>
	<v-container>
		<h1>Product Details {{ product_id }}</h1>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			product_id: this.$route.params.product
		}
	}
}
</script>

<style></style>
a
