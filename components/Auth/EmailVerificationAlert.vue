<template>
	<v-alert
		:value="showAlert"
		color="success"
		class="mb-7"
		transition="scale-transition"
	>
		<h3 class="headline mb-4">
			<v-icon left class="mr-4">mail</v-icon>Verify Your Email
		</h3>
		<span class="text-centered">
			Please check your email inbox for a verification link sent from
			DEVILFISH before proceeding. If you cannot find the email, check the
			junk or spam category as well.
		</span>
		<v-divider class="my-4 success lighten-1"></v-divider>

		<v-row align="center" no-gutters>
			<v-col class="grow">Still not receiving the email?</v-col>
			<v-col class="shrink">
				<v-btn
					color="primary darken-1"
					:loading="loading"
					@click="resendVerificationEmail()"
				>
					<template v-slot:loader>
						<v-progress-circular
							size="20"
							indeterminate
							color="white"
						></v-progress-circular>
						<h3 class="ml-1" color="black--text">{{ counter }}</h3>
					</template>
					<v-icon left>send</v-icon>Resend
				</v-btn>
			</v-col>
		</v-row>
	</v-alert>
</template>

<script>
export default {
	props: {
		email: {
			type: String,
			required: false,
			default: ''
		},
		showAlert: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			loading: false,
			cooldown_timer: 3,
			counter: this.cooldown_timer
		}
	},

	watch: {
		counter: {
			handler(value) {
				if (value > 0) {
					setTimeout(() => {
						this.counter--
					}, 1000)
				}
			}
		}
	},

	mounted() {
		this.cooldownResendButton()
	},

	methods: {
		resendVerificationEmail() {
			this.cooldownResendButton()
			this.$axios
				.$post('api/email/resend', { email: this.email })
				.then((response) => {
					// console.log(response)
					if (response.resent)
						this.$toast.success(
							'Email resent, please check your inbox',
							{ icon: 'check' }
						)
				})
				.catch((error) => {
					console.log(error)
					this.$toast.error(
						'Failed to resend, please try again later',
						{ icon: 'error' }
					)
				})
		},
		cooldownResendButton() {
			this.loading = true
			this.counter = this.cooldown_timer
			setTimeout(() => {
				this.loading = false
			}, this.cooldown_timer * 1000)
		}
	}
}
</script>

<style></style>
