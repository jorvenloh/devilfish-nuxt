<template>
	<v-app-bar app color="secondary darken-2">
		<v-toolbar-title>
			<h2 class="primary--text">
				<span class="white--text">DEVIL</span>FISH
			</h2>
		</v-toolbar-title>

		<div class="d-none d-md-flex ml-7">
			<div class="my-2">
				<v-btn text link to="/">Home</v-btn>
			</div>
			<div class="my-2 ml-3">
				<v-btn text link to="/posts">Topics</v-btn>
			</div>
			<div class="my-2 ml-3">
				<v-menu
					:open-on-hover="true"
					:offset-y="true"
					transition="scale-transition"
					origin="center center"
				>
					<template v-slot:activator="{ on }">
						<v-btn text dark to="/products" v-on="on">Watch</v-btn>
					</template>

					<v-list class="primary darken-1">
						<v-list-item to="/products/?type=movie" exact>
							<v-list-item-title>Movie</v-list-item-title>
						</v-list-item>
						<v-list-item to="/products/?type=series" exact>
							<v-list-item-title>Series</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
		</div>

		<div>
			<GlobalSearch></GlobalSearch>
		</div>

		<v-spacer></v-spacer>

		<AuthPanel></AuthPanel>
	</v-app-bar>
</template>

<script>
import AuthPanel from '@/components/Auth/AuthPanel.vue'
import GlobalSearch from '@/components/GlobalSearch.vue'

export default {
	name: 'AppNavigation',
	components: { AuthPanel, GlobalSearch },
	data() {
		return {}
	}
}
</script>

<style scoped></style>
