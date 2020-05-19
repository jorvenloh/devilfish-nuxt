<template>
	<v-container>
		<h1>Pick the one you need</h1>
		<v-row>
			<v-col>
				<PlanCards></PlanCards>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import PlanCards from '@/components/Landing/PlanCards'
export default {
	components: {
		PlanCards
	}
}
</script>

<style></style>
