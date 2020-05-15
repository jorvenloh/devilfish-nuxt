<template>
	<div>
		<div v-if="avatarLabel">
			<AuthAvatar></AuthAvatar>
		</div>
		<v-dialog
			v-else
			v-model="auth_panel_dialog"
			fullscreen
			hide-overlay
			transition="dialog-bottom-transition"
		>
			<template v-slot:activator="{ on }">
				<v-btn outlined class="primary--text px-8" v-on="on"
					>Login</v-btn
				>
			</template>

			<v-card dark>
				<v-toolbar flat color="transparent">
					<v-spacer></v-spacer>
					<v-btn icon dark @click="auth_panel_dialog = false">
						<v-icon>mdi-close</v-icon>
					</v-btn>
				</v-toolbar>
				<v-container>
					<v-row class="mt-5" justify="center">
						<v-col class="col-sm-8 col-md-6 col-xl-4">
							<v-tabs background-color="transparent" dark grow>
								<v-tabs-slider color="primary"></v-tabs-slider>
								<v-tab
									key="login"
									class="primary--text"
									href="#tab-login"
								>
									<h2 class="mx-10 font-weight-regular">
										Login
									</h2>
								</v-tab>
								<v-tab
									key="register"
									class="primary--text font-weight-regular"
									href="#tab-register"
								>
									<h2 class="mx-10 font-weight-regular">
										REGISTER
									</h2>
								</v-tab>
								<v-tab-item key="login" value="tab-login">
									<div class="mt-10">
										<!-- <Login></Login> -->
									</div>
								</v-tab-item>
								<v-tab-item key="register" value="tab-register">
									<div class="mt-10">
										<!-- <Register></Register> -->
									</div>
								</v-tab-item>
							</v-tabs>
						</v-col>
					</v-row>

					<SocialAuth></SocialAuth>
				</v-container>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
// import Login from './Login.vue'
// import Register from './Register.vue'
import { mapGetters } from 'vuex'
import SocialAuth from './AuthSocial.vue'
import AuthAvatar from './AuthAvatar.vue'

export default {
	components: { SocialAuth, AuthAvatar },

	data() {
		return {
			auth_panel_dialog: false
		}
	},

	computed: {
		...mapGetters('auth', ['userDisplayName']),
		avatarLabel() {
			return this.$store.getters[('products/getName', { brief: true })]
		}
	},

	created() {
		this.$eventBus.$on('open_authPanel', () => {
			this.openAuthPanel()
		})
		this.$eventBus.$on('close_authPanel', () => {
			this.closeAuthPanel()
		})
	},

	methods: {
		openAuthPanel() {
			this.auth_panel_dialog = true
		},
		closeAuthPanel() {
			this.auth_panel_dialog = false
		}
	}
}
</script>

<style></style>
