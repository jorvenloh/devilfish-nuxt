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

		<!-- Featuring products -->
		<v-row>
			<v-col class="text-center">
				<h1>Featuring posts horse light</h1>
				<div class="d-flex justify-center">
					<v-btn small>
						Small
					</v-btn>
					<v-btn>
						Defalt
					</v-btn>
					<v-btn large>
						Large
					</v-btn>
					<v-btn x-large>
						X-Large
					</v-btn>
				</div>
			</v-col>
		</v-row>

		<!-- Featuring posts -->
		<v-row>
			<v-col class="text-center">
				<h1>Featuring posts horse light</h1>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<h1>Ready to watch?</h1>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<PlanCards></PlanCards>
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col class="col-md-6">
				<v-card flat min-height="1000" class="background">
					<h1>Follow us</h1>
					<v-form>
						<v-text-field
							prepend-inner-icon="mdi-email"
							label="Email"
							outlined
						></v-text-field>
					</v-form>
				</v-card>
			</v-col>
			<v-col class="col-md-6">
				<v-card flat min-height="500">
					<h1>Drop us a email</h1>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import PlanCards from '@/components/Landing/PlanCards'

export default {
	components: {
		PlanCards
	}
}
</script>

<style scoped>
.container-home {
	background-color: var(--v-background-base);
}
</style>
