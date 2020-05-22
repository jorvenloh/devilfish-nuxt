<template>
	<v-container fill-height>
		<v-row justify="center">
			<v-col class="col-sm-8 col-md-6 col-xl-4">
				<v-card flat>
					<v-tabs grow>
						<v-tabs-slider color="primary"></v-tabs-slider>
						<v-tab
							key="login"
							class="primary--text"
							href="#tab-login"
						>
							<h2 class="mx-10 font-weight-regular">Login</h2>
						</v-tab>
						<v-tab
							key="register"
							class="primary--text font-weight-regular"
							href="#tab-register"
						>
							<h2 class="mx-10 font-weight-regular">REGISTER</h2>
						</v-tab>
						<v-tab-item key="login" value="tab-login">
							<Login></Login>
						</v-tab-item>
						<v-tab-item key="register" value="tab-register">
							<Register></Register>
						</v-tab-item>
					</v-tabs>

					<SocialAuth></SocialAuth>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Login from '@/components/Auth/Login.vue'
import Register from '@/components/Auth/Register.vue'
import SocialAuth from '@/components/Auth/AuthSocial.vue'

export default {
	layout: 'noAppBar',
	components: { Login, Register, SocialAuth }
}
</script>

<style scoped></style>
