<template>
	<div class="d-flex justify-center my-12">
		<v-card
			v-for="(item, index) in plans"
			:key="index"
			dark
			class="mx-5 plancard"
			min-width="250"
			nuxt
			@click="navigateToPlan(item.name)"
		>
			<div class="plancard-board">
				<v-row class="mt-10">
					<v-col col class="text-center">
						<v-icon x-large class>fa-fish</v-icon>
					</v-col>
				</v-row>

				<v-row no-gutters>
					<v-col class="col-12 text-left">
						<span class="ml-9 font-weight-bold orange--text">{{
							item.total_amount > 0 ? 'Only' : ''
						}}</span>
					</v-col>
					<v-col class="text-center secondary--text text--darken-2">
						<h2 v-if="item.price > 0" class="font-weight-light">
							{{ item.price | toCurrency }} / month
						</h2>
						<h2 v-else class="font-weight-light">Free Trial</h2>
						<span class="font-weight-bold">
							Subscribe for {{ item.duration }}
							{{ item.duration > 1 ? 'months' : 'month' }}
						</span>
					</v-col>
				</v-row>

				<v-row class="mt-5">
					<v-col class="text-center">
						<v-btn
							large
							rounded
							elevation="5"
							class="orange px-10"
							:to="{
								name: 'subscriptions-plan',
								params: { plan: item.name }
							}"
							nuxt
							>Try it now</v-btn
						>
					</v-col>
				</v-row>

				<div class="d-block text-center mt-5 mb-10">
					<h1>{{ item.total_amount | toCurrency }}</h1>
				</div>
			</div>
		</v-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			plans: [
				{ name: 'package-1', price: 0, duration: 1, total_amount: 0 },
				{ name: 'package-2', price: 9, duration: 3, total_amount: 27 },
				{ name: 'package-3', price: 7, duration: 6, total_amount: 42 },
				{ name: 'package-4', price: 5, duration: 12, total_amount: 60 }
			]
		}
	},
	computed: {},
	methods: {
		navigateToPlan(plan) {
			this.$router.push({
				name: 'subscriptions-plan',
				params: { plan }
			})
		}
	}
}
</script>

<style scoped>
.plancard {
	background: linear-gradient(#f8ff95, #005256);
}

.plancard::after {
	content: '';
	height: 70%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	background: rgba(255, 255, 255, 0.2);
	object-fit: cover;
	border-radius: 0px 0px 150% 0%;
}

.plancard-board {
	position: relative;
	z-index: 3;
}

.orange--text {
	color: #dc6c00 !important;
}

#orange {
	background-color: #dc6c00 !important;
}

.plancard-board .v-icon {
	color: var(--v-secondary-base);
	border: 3px solid var(--v-secondary-base);
	border-radius: 50%;
	padding: 15px;
}
</style>
