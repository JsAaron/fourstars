<template>
	<view class="l-page">
		<view class="download-container">
			<view class="container-div flex-column">
				<view class="download-title">
					<text>IM-开通指南</text>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="download-head flex-align flex-row">
				<view>
					<image src="/static/download/head_img1.png" mode="widthFix" style="width: 80px;"></image>
				</view>
				<view class="margin-left30">
					<image src="/static/download/head_img2.png" mode="widthFix" style="width: 150px;"></image>
				</view>
				<view class="margin-left20">
					<view class="head-title">
						<text>
							注册获取授权
						</text>
					</view>
					<view class="head-title-fu flex-align">
						<image src="/static/download/icon1.png" mode="widthFix" style="width: 18px;"></image>
						<text>管理员</text>
						<text>点击注册开通</text>
					</view>
				</view>
				<view class="margin-left30">
					<image src="/static/download/head_img3.png" mode="widthFix" style="width: 80px;"></image>
				</view>
				<view class="margin-left30">
					<image src="/static/download/head_img4.png" mode="widthFix" style="width: 150px;"></image>
				</view>
				<view class="margin-left20">
					<view class="head-title">
						<text>
							安装P9-IM
						</text>
					</view>
					<view class="head-title-fu flex-align">
						<image src="/static/download/icon2.png" mode="widthFix" style="width: 20px;"></image>
						<text>客户端下载</text>
					</view>
				</view>
				<view class="margin-left30">
					<image src="/static/download/banner-right.png" mode="widthFix" style="width: 360px;"></image>
				</view>
			</view>	
		</view>
		<view class="container-div flex-column">
			<view class="download-title" style="margin-top: 100px;">
				<text>客户端下载</text>
			</view>
			<view class="container-padding">
				<view class="container-item">
					<view class="item-logo">
						<image src="/static/download/logo1.png" mode="widthFix" style="width: 112px;"></image>
					</view>
					<view class="item-title">
						<text>IOS客户端</text>
					</view>
					<view class="item-btn" @click="openNewPage('IOS')">
						<text>下载</text>
					</view>
				</view>
				<view class="container-item">
					<view class="item-logo" @mouseenter="onChange"  @mouseleave="removeChange">
						<image src="/static/download/logo2.png" mode="widthFix" style="width: 112px;" v-if="!showIm"></image>
						<image src="/static/qrdown.png" mode="widthFix" style="width: 200px;" v-if="showIm"></image>
					</view>
					<view class="item-title">
						<text>Android客户端</text>
					</view>
					<view class="item-btn" @click="openNewPage('Android')">
						<text>下载</text>
					</view>
				</view>
				<view class="container-item">
					<view class="item-logo">
						<image src="/static/download/logo6.png" mode="widthFix" style="width: 112px;"></image>
					</view>
					<view class="item-title">
						<text>Web版</text>
					</view>
					<view class="item-btn" @click="openNewPage('Web')">
						<text>立即体验</text>
					</view>
				</view>
				<view class="container-item">
					<view class="item-logo">
						<image src="/static/download/logo3.png" mode="widthFix" style="width: 112px;"></image>
					</view>
					<view class="item-title">
						<text>全新Windows客户端</text>
					</view>
					<view class="item-btn" @click="openNewPage('Windows')">
						<text>下载</text>
					</view>
				</view>
				<view class="container-item">
					<view class="item-logo">
						<image src="/static/download/logo4.png" mode="widthFix" style="width: 112px;"></image>
					</view>
					<view class="item-title">
						<text>Mac客户端</text>
					</view>
					<view class="item-btn" @click="openNewPage('Mac')">
						<text>下载</text>
					</view>
				</view>
				<view class="container-item">
					<view class="item-logo">
						<image src="/static/download/logo5.png" mode="widthFix" style="width: 112px;"></image>
					</view>
					<view class="item-title">
						<text>Linux客户端</text>
					</view>
					<view class="item-btn" @click="openNewPage('Liunx')">
						<text>下载</text>
					</view>
				</view>
			</view>
		</view>
		<foot-bar></foot-bar>
		<right-btn></right-btn>
	</view>
</template>

<script>
	import footBar from "@/pages/bottom/foot-bar.vue"
	import rightBtn from "@/pages/right/right-btn.vue"
	export default {
		components: {
			footBar,
			rightBtn
		},
		data() {
			return {
				showIm: false,
			}
		},
		onLoad(params) {
			uni.$emit('id', params.id);
		},
		onPageScroll(res) {
			uni.$emit('onPageScroll', res.scrollTop);
		},
		methods: {
			// 注册
			onRegister() {
				uni.navigateTo({
					url: '/pages/html'
				})
			},
			openNewPage(id) {
				switch (id) {
					case 'Liunx':
					case 'IOS':
						uni.showModal({
							title: '温馨提示',
							content: '请联系客服获取安装包！联系电话：137-0870-1523'
						})
						break
					case 'Android':
						// uni.$as.openPage('/pages/download_link')
						window.open('http://im.p9cloud.cn/appdownload/#/')
						break
					case 'Windows':
						window.open('http://imserver.p9cloud.cn:9080/rainbowchat_pro/app/update/x64/P9-IM-x64-Setup-7.0.15.exe')
						break
					case 'Mac':
						window.open('http://imserver.p9cloud.cn:9080/rainbowchat_pro/app/update/mac/P9 IM-mac-Setup-7.0.11.dmg')
						break
					case 'Web':
						uni.navigateTo({
							url: '/pages/download_web'
						})
						// window.open('http://imserver.p9cloud.cn:9080/rainbowchat_pro/app/update/mac/P9 IM-mac-Setup-7.0.11.dmg')
						break
				}
			},
			onChange() {
				this.showIm = true
			},
			removeChange() {
				this.showIm = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.download-container {
		width: 100%;
		height: 248px;
		background-color: #F2F5FB;
		display: flex;
	}
	.download-title {
		margin-top: 50px;
		text {
			color: #333333;
			font-weight: bold;
			font-size: 22px;
		}
	}
	.download-head {
		margin-top: -135px;
		width: 1344px;
		height: 300px;
		padding: 30px;
		background: #ffffff;
		border-radius: 12px;
		box-shadow: 0px 0px 14px 0px rgba(184,195,217,0.80); 
	}
	.head-title {
		text {
			font-size: 28px;
		}
	}
	.head-title-fu {
		margin-top: -5px;
		text {
			font-size: 16px;
			color: #666666;
		}
	}
	.container-padding {
		display: flex;
		flex-wrap: wrap;
	}
	.container-item {
		width: 240px;
		height: 330px;
		margin-right: 128px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 50px;
	}
	.container-item:nth-child(4) {
		margin-right: 0;
	}
	.item-logo {
		width: 100%;
		height: 256px;
		border-radius: 16px;
		border: 2px solid #E7E7E7;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.item-title {
		width: 100%;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		text {
			font-size: 18px;
		}
	}
	.item-btn {
		width: 112px;
		height: 32px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $maincolor;
		border-radius: 8px;
		cursor: pointer;
		text {
			color: #ffffff;
			font-size: 14px;
		}
	}
	.item-btn:hover {
		background-color: #2999FBBF;
	}
</style>
