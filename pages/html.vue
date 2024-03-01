<template>
	<view class="l-page">
		<web-view src="/static/html/register.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad({url}) {
			// this.url = url
			uni.$emit('id', 0);
		},
		
		onPageScroll(res) {
			uni.$emit('onPageScroll', res.scrollTop);
		},
		methods: {
			
		}
	}
</script>

<style>
</style>