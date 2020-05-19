<template>
	<v-container>
		<h1>You are about to subscribe this plan.</h1>
		<v-row>
			<v-col>
				{{ plan }}
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			plan: this.$route.params.plan
		}
	}
}
</script>

<style></style>
