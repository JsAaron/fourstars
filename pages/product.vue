<template>
	<view class="l-page">
		<view class="banner-container">
			<view class="container-div">
				<view class="banner-item">
					<view class="flex-column">
						<view class="im-title">
							<text>IM 即时通讯</text>
						</view>
						<view class="im-title-fu">
							<text>通过阅后即焚、消息加密、密聊会话、文件传输等功能，构建一个安全可靠的通讯环境</text>
						</view>
						<view class="im-btn" @click="onRegister">
							<text>免费试用</text>
						</view>
					</view>
				</view>
				<view class="banner-item">
					<image src="/static/index1/banner-right.png" mode="widthFix" style="width: 650px;"></image>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="flex-space-around container-item">
				<view class="item-sty">
					<image src="/static/index1/img1.png" mode="widthFix" style="width: 700px;"></image>
				</view>
				<view class="item-sty flex-column flex-center">
					<view class="item-padding">
						<view class="item-title">
							<text>阅后即焚 告别泄露</text>
						</view>
						<view class="item-title-fu">
							<text>消息阅读指定时间（可自主设置时间）后，自动从各用户会话中销毁，禁止消息转发 </text>
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
								<text>密聊模式 一键开启</text>
							</view>
							<view class="item-title-fu">
								<text>支持一键开启群组密聊，组内成员消息仅自己可见，他人消息打码防窥处理，禁止消息复制和转发</text>
							</view>
						</view>
					</view>
					<view class="item-sty">
						<image src="/static/index1/img2.png" mode="widthFix" style="width: 739px;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="flex-space-around container-item">
				<view class="item-sty">
					<image src="/static/index1/img3.png" mode="widthFix" style="width: 700px;"></image>
				</view>
				<view class="item-sty flex-column flex-center">
					<view class="item-padding">
						<view class="item-title">
							<text>通讯录 简单易用</text>
						</view>
						<view class="item-title-fu">
							<text>可根据企事业单位架构自定义显示通讯录模板，支持手动添加、批量导入；前后端数据同步，即时维护，统一管理。</text>
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
								<text>视频会议 智能匹配带宽</text>
							</view>
							<view class="item-title-fu">
								<text>一键入会，画面稳定流畅，视频会议可根据网络带宽自动传输不同质量的视频，保障不同环境下的会议稳定流畅；支持多人同时入会，支持多方画面；支持1080P高清模式。</text>
							</view>
						</view>
					</view>
					<view class="item-sty">
						<image src="/static/index1/img4.png" mode="widthFix" style="width: 700px;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="container-div flex-column">
			<view class="container-title">
				<text>产品特点</text>
			</view>
			<view class="safety-container">
				<view class="safety-item">
					<image src="/static//index1/img5.png" mode="widthFix" style="width: 803px;"></image>
				</view>
				<view class="safety-item">
					<view class="safety-right">
						<view style="padding: 20px 0;">
							<view class="flex-align">
								<view class="safety-radius" style="background-color: #C8CAFD;"></view>
								<view class="safety-title">
									<text>智能反垃圾和敏感词过滤</text>
								</view>
							</view>
							<view class="safety-title-fu">
								<text>智能识别用户发消息行为，敏感词识别消息内容，对违规消息进行拦截</text>
							</view>
						</view>
						<view style="padding: 20px 0;">
							<view class="flex-align">
								<view class="safety-radius" style="background-color: #C6E0AB;"></view>
								<view class="safety-title">
									<text>阅后即焚 一键密聊 消息加密</text>
								</view>
							</view>
							<view class="safety-title-fu">
								<text>消息阅读指定时间后，自动从各用户会话中销毁，一键开启密聊模式，指定消息进行加密，禁止消息转发 </text>
							</view>
						</view>
						<view style="padding: 20px 0;">
							<view class="flex-align">
								<view class="safety-radius" style="background-color: #76C0FF;"></view>
								<view class="safety-title">
									<text>多终端设备</text>
								</view>
							</view>
							<view class="safety-title-fu">
								<text>允许用户账号同时在多个平台同时登录，包括移动端、web端、桌面端</text>
							</view>
						</view>
						<view style="padding: 20px 0;">
							<view class="flex-align">
								<view class="safety-radius" style="background-color: #FAC57E;"></view>
								<view class="safety-title">
									<text>消息漫游</text>
								</view>
							</view>
							<view class="safety-title-fu">
								<text>可以实现终端用户的历史消息在服务端进行同步，离线消息也会存储与服务端</text>
							</view>
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
