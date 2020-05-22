<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-col class="col-sm-6 col-md-5 col-xl-4">
				<v-card flat color="transparent" class="pa-3">
					<h2 class="mb-3">Reset Password</h2>
					<v-form
						ref="form"
						class="secondary--text"
						lazy-validation
						@submit.prevent="postForgotPassword()"
					>
						<v-text-field
							v-model="form.email"
							autofocus
							prepend-inner-icon="email"
							label="Email"
							outlined
							:rules="[required, email]"
							:error-messages="errors['email']"
						></v-text-field>

						<div class="d-block">Google Recaptcha</div>

						<v-btn
							class="px-12 mt-5 float-right"
							color="primary black--text"
							type="submit"
							:loading="loading"
							:disabled="loading"
							>Send</v-btn
						>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import inputRulesMixin from '@/mixins/inputRulesMixin'

export default {
	mixins: [inputRulesMixin],
	data() {
		return {
			errors: {},
			loading: false,
			form: {
				email: null,
				recaptcha: null
			}
		}
	},
	methods: {
		postForgotPassword() {
			// reset errors
			this.errors = {}
			this.loading = true

			// local validate form
			if (this.$refs.form.validate()) {
				this.$axios
					.$post('/api/forgot-password', this.form)
					.then((response) => {
						// console.log(response)
						if (response.success)
							this.$toast.success(
								'Email resent, please check your inbox',
								{ icon: 'check' }
							)
						this.$refs.form.reset()
					})
					.catch((error) => {
						this.errors = error.response.data.errors
						if (this.errors.message)
							this.$toast.error(this.errors.message, {
								icon: 'error'
							})
					})
					.finally(() => {
						this.loading = false
					})
			} else this.loading = false
		}
	}
}
</script>

<style></style>
