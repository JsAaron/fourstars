<template>
	<view class="l-page">
		<view class="banner-container">
			<view class="container-div">
				<view class="banner-item">
					<view class="flex-column">
						<view class="im-title">
							<text>协同办公</text>
						</view>
						<view class="im-title-fu">
							<text>满足日常协同办公所需的公告、汇报、外出、打卡等功能，让团队合作更加便捷</text>
						</view>
						<view class="im-btn" @click="onRegister">
							<text>免费试用</text>
						</view>
					</view>
				</view>
				<view class="banner-item">
					<image src="/static/synergy/banner-right.png" mode="widthFix" style="width: 650px;"></image>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="flex-space-around container-item">
				<view class="item-sty">
					<image src="/static/synergy/img1.png" mode="widthFix" style="width: 700px;"></image>
				</view>
				<view class="item-sty flex-column flex-center">
					<view class="item-padding">
						<view class="item-title">
							<text>通知公告</text>
						</view>
						<view class="item-title-fu">
							<text>重要的消息由个人到团队光速传至每个终端，已读未读一目了然，实时统计接受情况。</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="container-bg">
			<view class="container-div">
				<view class="flex-space-around container-item">
					<view class="item-sty flex-column flex-center">
						<view class="item-padding">
							<view class="item-title">
								<text>考勤打卡</text>
							</view>
							<view class="item-title-fu">
								<text>手机上轻轻一点即可完成打卡，支持固定时间上下班、灵活排班和外出打卡；后台自动生成考勤记录。</text>
							</view>
						</view>
					</view>
					<view class="item-sty">
						<image src="/static/synergy/img2.png" mode="widthFix" style="width: 739px;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="flex-space-around container-item">
				<view class="item-sty">
					<image src="/static/synergy/img3.png" mode="widthFix" style="width: 700px;"></image>
				</view>
				<view class="item-sty flex-column flex-center">
					<view class="item-padding">
						<view class="item-title">
							<text>工作汇报</text>
						</view>
						<view class="item-title-fu">
							<text>可根据汇报互相了解项目计划以及进度，及时对不合理的方向和方式进行调整，确保项目顺利进行。</text>
						</view>
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
				
			}
		},
		onLoad(params) {
			
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
		}
	}
</script>

<style lang="scss" scoped>
	.banner-container {
		width: 100%;
		height: 600px;
		background-color: #F2F5FB;
		display: flex;
	}
	.banner-item {
		width: 50%;
		height: 600px;
		display: flex;
		align-items: center;
	}
	.im-title {
		text {
			font-size: 46px;
			color: #101010;
		}
	}
	.im-title-fu {
		width: 400px;
		margin-top: 20px;
		text {
			font-size: 18px;
			color: #5a5a5a;
		}
	}
	.im-btn {
		width: 120px;
		height: 38px;
		margin-top: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		text {
			color: #fff;
		}
		background-color: $maincolor;
		border-radius: 20px;
		cursor: pointer;
	}
	.im-btn:hover {
		background-color: #2999FBBF;
	}
	.container-item {
		padding: 100px 0;
	}
	.item-sty {
		width: 50%;
	}
	.item-padding {
		padding: 0 130px;
	}
	.item-title {
		text {
			font-size: 30px;
			color: #333333;
		}
	}
	.item-title-fu {
		margin-top: 20px;
		text {
			font-size: 22px;
			color: #666666;
			font-weight: lighter;
		}
	}
	.container-bg {
		width: 100%;
		background-color: #F2F5FB;
		display: flex;
	}
	
	
	
	.container-title {
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		text {
			font-size: 36px;
		}
	}
	.safety-container {
		width: 100%;
		height: 526px;
		display: flex;
	}
	.safety-item {
		width: 50%;
		height: 526px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.safety-right {
		width: 420px;
		margin-left: 100px;
	}
	.safety-radius {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}
	.safety-title {
		margin-left: 20px;
		text {
			font-size: 22px;
			color: #333333;
		}
	}
	.safety-title-fu {
		margin-left: 30px;
		margin-top: 5px;
		line-height: 20px;
		text {
			font-size: 16px;
			color: #666666;
		}
	}
	.deploy-container {
		width: 100%;
		padding: 0 60px;
		height: 491px;
		background-color: #F9FAFC;
		border-radius: 40px;
		display: flex;
	}
	.deploy-item {
		width: 180px;
		height: 400px;
		margin: 40px 0;
	}
	.deploy-title {
		margin-top: -80px;
		line-height: 30px;
		text {
			font-size: 24px;
			color: #333333;
		}
	}
	.deploy-title-fu {
		margin-top: 30px;
		text {
			font-size: 18px;
			color: #666666;
		}
	}
</style>
