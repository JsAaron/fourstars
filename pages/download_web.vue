<template>
	<view>
		<view class="container-div">
			<view class="left-sty">
				<view class="phone-sty">
					<image src="/static/phone.png" mode="widthFix" style="width: 375px;"></image>
				</view>
				<iframe src="http://imserver.p9cloud.cn:9080/p9app/index.html#" 
					frameborder="0" scrolling="no" class="iframe-sty"></iframe>
			</view>
			<view class="right-sty flex-center flex-align flex-column">
				<view>
					<image src="/static/h5qr.png" mode="widthFix" style="width: 150px;"></image>
				</view>
				<view class="text-sty">
					<text>因部分浏览器限制，部分功能无法在左侧在线预览中体现，可扫描上方二维码在手机浏览器体验或<text style="color: #2999FB;cursor: pointer;" @click="onClick">下载APP</text>客户端进行体验</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {
			uni.$emit('id', 5);
		},
		methods: {
			onClick() {
				window.open('http://im.p9cloud.cn/appdownload/#/')
			}
		}
	}
</script>

<style lang="scss">
	.phone-sty {
		margin-top: 50px;
	}
	.iframe-sty {
		width: 325px;
		height: 710px;
		border-radius: 30px;
		position: absolute;
		top: 70px;
	}
	.right-sty {
		width: 33%;
		display: flex;
	}
	.text-sty {
		margin-top: 10px;
		padding: 0 150upx;
		text-align: center;
		text {
			color: var(--p-text-88);
		}
	}
	.left-sty {
		width: 54%;
		display: flex;
		justify-content: center;
	}
</style>