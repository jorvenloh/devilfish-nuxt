<template>
	<div>
		<div class="mb-7">
			<EmailVerificationAlert
				:email="registered_email"
				:show-alert="errors.email_not_verified"
			></EmailVerificationAlert>
		</div>
		<v-form ref="form" lazy-validation @submit.prevent="login()">
			<v-text-field
				v-model="form.email"
				autofocus
				prepend-inner-icon="mdi-email"
				label="Email"
				outlined
				:rules="[required, email]"
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

			<div class="mt-5 d-flex flex-wrap justify-space-between">
				<v-btn
					large
					outlined
					color="primary"
					to="/authentication/forgot-password"
					nuxt
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
				password: ''
			},
			registered_email: null
		}
	},

	computed: {},

	methods: {
		login() {
			this.$toast.success('You have logged in', {
				icon: 'done'
			})

			// if (this.$refs.form.validate()) {
			// 	this.errors = {}
			// 	this.loading = true
			// 	this.$auth.$storage.setState('errors', null)

			// 	this.$auth
			// 		.loginWith('password_grant_custom', {
			// 			data: this.form
			// 		})
			// 		.then(() => {
			// 			this.$toast.success('You have logged in', {
			// 				icon: 'done'
			// 			})
			// 		})
			// 		.catch(() => {
			// 			if (this.$auth.$storage.getState('errors')) {
			// 				this.errors = this.$auth.$storage.getState('errors')
			// 				if (this.errors.registered_email)
			// 					this.registered_email = this.errors.registered_email
			// 			}
			// 		})
			// 		.finally(() => {
			// 			this.loading = false
			// 		})
			// }
		},
		forgotPassword() {
			this.$eventBus.$emit('close_authPanel')
		}
	}
}
</script>

<style></style>
