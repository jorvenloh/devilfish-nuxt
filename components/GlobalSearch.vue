<template>
	<div class="d-flex">
		<v-btn icon @click="show_search_input = !show_search_input">
			<v-icon color="primary">mdi-magnify</v-icon>
		</v-btn>
		<v-text-field
			v-if="show_search_input"
			v-model="form.search"
			class="mt-1 ml-3"
			label="Search"
			single-line
			outlined
			dense
			hide-details="true"
			@keydown.enter="postSearch()"
		></v-text-field>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show_search_input: false,
			form: {
				search: null
			}
		}
	},

	methods: {
		postSearch() {
			console.log('Post Search', this.form.search)
		}
	}
}
</script>

<style></style>
