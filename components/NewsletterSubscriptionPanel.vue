<template>
	<v-card dark tile class="card-newsletter text-center pa-10">
		<div class="mb-5">
			<span>Don't miss our latest news</span>
			<h2>Get monthly FREE movies straight to your inbox</h2>
		</div>

		<v-form light class="mt-7">
			<v-row class="justify-center">
				<v-col class="col-12 col-md-6">
					<v-text-field
						v-model="form.email"
						height="52"
						prepend-inner-icon="mail"
						class="float-right"
						label="Email"
						single-line
						solo
						:rules="[required, email]"
						:error-messages="errors['email']"
					></v-text-field>
				</v-col>
				<v-col class="col-12 col-md-6">
					<v-btn
						outlined
						x-large
						tile
						class="primary--text float-left"
						>Get Newsletter</v-btn
					>
				</v-col>
			</v-row>
		</v-form>
		<span class="mb-10">Ofcourse, you can unsubscribe at any time</span>
	</v-card>
</template>

<script>
import inputRulesMixin from '@/mixins/inputRulesMixin'
export default {
	mixins: [inputRulesMixin],
	data() {
		return {
			form: {
				email: null
			},
			errors: []
		}
	}
}
</script>

<style scoped>
.card-newsletter {
	min-height: 200px;
	background: linear-gradient(-75deg, rgb(102, 50, 7), #dc6c00);
}
.v-messages__message {
	color: black !important;
}
.v-application .error--text {
	color: black !important;
}
</style>
