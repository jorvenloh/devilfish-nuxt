<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-col class="col-sm-6 col-md-5 col-xl-4">
				<v-card flat color="transparent" class="pa-3">
					<h2 class="mb-3">Reset Password and Login</h2>
					<v-form
						ref="form"
						class="secondary--text"
						lazy-validation
						@submit.prevent="postResetPassword()"
					>
						<v-text-field
							v-model="form.password"
							prepend-inner-icon="verified_user"
							label="Password"
							outlined
							:type="show_password ? 'text' : 'password'"
							:append-icon="
								show_password ? 'mdi-eye' : 'mdi-eye-off'
							"
							:rules="[required, min(8)]"
							:error-messages="errors['password']"
							@click:append="show_password = !show_password"
						></v-text-field>
						<v-text-field
							v-model="form.password_confirmation"
							prepend-inner-icon="verified_user"
							label="Confirm Password"
							outlined
							:type="show_password ? 'text' : 'password'"
							:append-icon="
								show_password ? 'mdi-eye' : 'mdi-eye-off'
							"
							:rules="[
								required,
								min(8),
								passwordConfirmationRule
							]"
							:error-messages="errors['password_confirmation']"
							@click:append="show_password = !show_password"
						></v-text-field>

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
			show_password: false,
			form: {
				password: null,
				password_confirmation: null,
				email: this.$route.query.email,
				token: this.$route.query.token
			}
		}
	},

	computed: {
		passwordConfirmationRule() {
			return () =>
				this.form.password === this.form.password_confirmation ||
				'Passwords must be matched'
		}
	},

	methods: {
		postResetPassword() {
			// reset errors
			this.errors = {}
			this.loading = true

			if (
				this.$refs.form.validate() &&
				this.form.token &&
				this.form.email
			) {
				this.$axios
					.$post('/api/reset-password', this.form)
					.then((response) => {
						if (response.success) {
							this.$toast.success('Password reset successful', {
								icon: 'check'
							})
							this.$router.push({ name: 'authentication-login' })
						}
					})
					.catch((error) => {
						// console.log(error.response);
						if (error.response.data.errors)
							this.errors = error.response.data.errors

						this.$toast.error('Password reset failed', {
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
