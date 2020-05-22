<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-col class="col-sm-6 col-md-5">
				<v-card v-if="loading" flat color="transparent">
					<v-card-title>
						<h2 class="mb-3">Verifying...</h2>
					</v-card-title>
					<v-card-text>
						<span
							>Please wait...we are digging out your email
							address</span
						>
					</v-card-text>
				</v-card>
				<v-card v-if="is_verified && !loading" flat color="transparent">
					<v-card-title>
						<h2 class="mb-3">Succeeded!</h2>
					</v-card-title>
					<v-card-text>
						Your email is verified successfully, welcome to
						DEVILFISH!
					</v-card-text>
					<v-card-actions>
						<v-btn
							v-if="!isUserLoggedIn"
							block
							class="px-12 mt-5 float-right"
							color="primary black--text"
							@click="openLoginPanel()"
							>Login now</v-btn
						>
						<v-btn
							v-else
							block
							class="px-12 mt-5 float-right"
							color="primary black--text"
							link
							to="/"
							>Take me to home</v-btn
						>
					</v-card-actions>
				</v-card>
				<v-card
					v-else-if="!is_verified && !loading"
					flat
					color="transparent"
				>
					<v-card-title>
						<h2 class="mb-3">Opss...Sorry!</h2>
					</v-card-title>
					<v-card-text>
						Your email verification has failed. Please try again
						later or contact our support for assistance.
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			is_verified: false,
			key: this.$route.query.key || null,
			hash: this.$route.query.hash || null
		}
	},
	computed: {
		isUserLoggedIn() {
			return this.$auth.loggedIn
		}
	},
	mounted() {
		this.postEmailVerify()
	},
	methods: {
		postEmailVerify() {
			this.loading = true
			if (this.key && this.hash) {
				this.$axios
					.$get(`api/email/verify/${this.key}/${this.hash}`)
					.then((response) => {
						this.is_verified = response.is_user_verified
					})
					.catch(() => {
						// console.log(error.response);
						this.$toasted.global.server_error()
					})
					.finally(() => {
						this.loading = false
					})
			}
		},
		openLoginPanel() {
			this.$eventBus.$emit('open_authPanel')
		}
	}
}
</script>

<style></style>
