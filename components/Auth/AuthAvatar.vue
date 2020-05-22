<template>
	<div>
		<v-menu open-on-hover :offset-y="true" transition="scale-transition">
			<template v-slot:activator="{ on }">
				<v-avatar color="primary" size="50" v-on="on">
					<span class="white--text headline">{{ avatarLabel }}</span>
				</v-avatar>
			</template>

			<v-list class="mt-3">
				<v-list-item to="profile" exact>
					<v-list-item-title>My Profile</v-list-item-title>
				</v-list-item>
				<v-list-item @click="postLogout()">
					<v-list-item-title>Logout</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {
	computed: {
		avatarLabel() {
			return this.$auth.user.email
		}
	},
	methods: {
		postLogout() {
			this.$auth.logout().then((response) => {
				console.log(['Done logout', response])
			})
		}
	}
}
</script>

<style></style>
