<template>
	<v-container>
		<h1>Articles Details {{ article_id }}</h1>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			article_id: this.$route.params.article
		}
	}
}
</script>

<style></style>
a
