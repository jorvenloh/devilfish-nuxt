<template>
	<div>
		<div class="mb-7">
			<EmailVerificationAlert
				:email="registered_email"
				:show-alert="errors.email_not_verified"
			></EmailVerificationAlert>
		</div>
		<v-form
			ref="form"
			class="secondary--text"
			lazy-validation
			@submit.prevent="postLogin()"
		>
			<v-text-field
				v-model="form.email"
				autofocus
				prepend-inner-icon="email"
				label="Email"
				outlined
				:rules="[required]"
				:error-messages="errors['email']"
			></v-text-field>

			<v-text-field
				v-model="form.password"
				prepend-inner-icon="verified_user"
				label="Password"
				outlined
				:type="show_password ? 'text' : 'password'"
				:append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
				:rules="[required]"
				:error-messages="errors['password']"
				@click:append="show_password = !show_password"
			></v-text-field>

			<v-checkbox
				v-model="form.remember_me"
				class="mt-0"
				color="primary"
				label="Remember me"
			></v-checkbox>

			<div class="mt-5 d-flex flex-wrap justify-space-between">
				<v-btn
					large
					outlined
					color="primary"
					to="/forgot-password"
					@click="forgotPassword()"
					>Forgot Password?</v-btn
				>
				<v-btn
					type="submit"
					large
					class="px-12"
					color="accent black--text"
					:loading="loading"
					:disabled="loading"
					>Login</v-btn
				>
			</div>
		</v-form>
	</div>
</template>

<script>
import inputRulesMixin from '@/mixins/inputRulesMixin'
import EmailVerificationAlert from '@/components/Auth/EmailVerificationAlert'

export default {
	components: { EmailVerificationAlert },
	mixins: [inputRulesMixin],
	data() {
		return {
			show_password: false,
			loading: false,
			errors: {},
			formHasErrors: false,
			form: {
				email: '',
				password: '',
				remember_me: false
			},
			registered_email: null
		}
	},

	computed: {
		avatarLabel() {
			return this.$store.getters.userDisplayName({ brief: true })
		}
	},

	methods: {
		postLogin() {
			// reset errors
			this.errors = {}
			this.loading = true

			if (this.$refs.form.validate()) {
				this.$store
					.dispatch('performLogin', this.form)
					.then(() => {
						// console.log(response);
						// reset form
						this.$refs.form.reset()

						// pop snackbar
						this.$eventBus.$emit('open_snackbar', {
							message: 'You have login successfully',
							optionalArgs: { bgColor: 'primary' }
						})

						// close auth panel
						this.$eventBus.$emit('close_authPanel')
					})
					.catch((response) => {
						// console.log(response.errors);
						if (response.errors) this.errors = response.errors
						if (response.registered_email)
							this.registered_email = response.registered_email
					})
			}

			this.loading = false
		},
		forgotPassword() {
			this.$eventBus.$emit('close_authPanel')
		}
	}
}
</script>

<style></style>
