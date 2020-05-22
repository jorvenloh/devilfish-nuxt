<template>
	<div class="container-home">
		<!-- Parallax -->
		<v-parallax
			dark
			height="600"
			src="https://www.trendinbuzz.com/wp-content/uploads/2019/05/Avengers-Main-Banners.jpg"
		>
			<v-row align="center" justify="center">
				<v-col class="text-center col-sm-6 col-md-3">
					<h1 class="display-1 font-weight-bold mb-4">
						Unlimited movies, watch it anywhere
					</h1>
				</v-col>
			</v-row>
		</v-parallax>

		<v-container>
			<!-- Featuring products -->
			<v-row class="mt-12 justify-center">
				<v-col class="col-sm-11">
					<v-card
						min-height="300"
						width="100%"
						class="d-flex justify-center align-center"
					>
						<h1>Featuring products horse light</h1>
					</v-card>
				</v-col>
			</v-row>

			<!-- Featuring products -->
			<v-row class="mt-12 justify-center">
				<v-col class="col-sm-11">
					<v-card
						min-height="300"
						width="100%"
						class="d-flex justify-center align-center"
					>
						<h1>Featuring post horse light</h1>
					</v-card>
				</v-col>
			</v-row>

			<v-row class="mt-12" style="overflow: auto">
				<v-col class="text-center">
					<h1>Ready to watch?</h1>
					<PlanCards></PlanCards>
				</v-col>
			</v-row>

			<v-row class="mt-12">
				<v-col class>
					<NewsletterSubscriptionPanel></NewsletterSubscriptionPanel>
				</v-col>
			</v-row>

			<v-row>
				<v-col class="col">
					<v-card flat min-height="500">
						<h1>Drop us a email</h1>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import PlanCards from '@/components/Landing/PlanCards'
import NewsletterSubscriptionPanel from '@/components/NewsletterSubscriptionPanel'

export default {
	components: {
		PlanCards,
		NewsletterSubscriptionPanel
	}
}
</script>

<style scoped>
.container-home {
	background-color: var(--v-background-base);
}
</style>
