<template>
	<div>
		<v-navigation-drawer v-model="drawer" app clipped flat>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>whatshot</v-icon>
					</v-list-item-action>

					<v-list-item-content>
						<v-list-item-title>Featuring</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<div class="v-navigation-drawer__footer">
				<v-list dense>
					<v-list-item>
						<ThemeSwitch></ThemeSwitch>
					</v-list-item>
				</v-list>
			</div>
		</v-navigation-drawer>
		<v-app-bar app clipped-left color="background">
			<v-app-bar-nav-icon
				@click.stop="drawer = !drawer"
			></v-app-bar-nav-icon>
			<v-toolbar-title>
				<h2><span class="primary--text">DEVIL</span>FISH</h2>
			</v-toolbar-title>

			<div class="d-md-flex ml-7">
				<div class="my-2">
					<v-btn text to="/" nuxt>Home</v-btn>
				</div>
				<div class="my-2 ml-3">
					<v-menu
						:open-on-hover="true"
						:offset-y="true"
						transition="scale-transition"
						origin="center center"
					>
						<template v-slot:activator="{ on }">
							<v-btn text to="/products" nuxt v-on="on"
								>Watch</v-btn
							>
						</template>
						<v-list class="secondary">
							<v-list-item to="/products/?type=movie" exact nuxt
								>Movie</v-list-item
							>
							<v-list-item to="/products/?type=series" exact nuxt
								>Series</v-list-item
							>
						</v-list>
					</v-menu>
				</div>
				<div class="my-2 ml-3">
					<v-btn text link to="/articles" nuxt>Articles</v-btn>
				</div>
			</div>

			<div class="ml-3">
				<GlobalSearch></GlobalSearch>
			</div>

			<v-spacer></v-spacer>

			<AuthPanel></AuthPanel>
		</v-app-bar>
	</div>
</template>

<script>
import AuthPanel from '@/components/Auth/AuthPanel.vue'
import GlobalSearch from '@/components/GlobalSearch.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'

export default {
	name: 'AppNavigation',
	components: { AuthPanel, GlobalSearch, ThemeSwitch },
	data() {
		return {
			drawer: false
		}
	}
}
</script>

<style scoped>
.v-navigation-drawer__footer {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px 0px;
}
</style>
