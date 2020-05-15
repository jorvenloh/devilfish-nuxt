<template>
	<div class="d-flex justify-center mt-12">
		<v-btn class="mx-2 color-google" fab dark>
			<i class="fab fa-2x fa-google"></i>
		</v-btn>
		<v-btn class="mx-2 color-facebook" fab dark>
			<i class="fab fa-2x fa-facebook-f"></i>
		</v-btn>
		<v-btn class="mx-2 color-wechat" fab dark>
			<i class="fab fa-2x fa-weixin"></i>
		</v-btn>
	</div>
</template>

<script>
export default {}
</script>

<style>
.v-application--is-ltr .v-text-field .v-input__prepend-inner {
	padding-right: 10px !important;
}
.color-google {
	background-color: #db3236 !important;
}
.color-facebook {
	background-color: #3b5998 !important;
}
.color-wechat {
	background-color: #7bb32e !important;
}
</style>
