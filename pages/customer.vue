<template>
	<view class="l-page">
		<view class="banner-container">
			<view class="container-div">
				<view class="banner-item">
					<view class="flex-column">
						<view class="im-title">
							<text>和我们一起</text>
						</view>
						<view class="im-title-fu">
							<text>专注10年，软捷与你携手同行，只为一个目标，为客户提供好用的智慧服务管理平台</text>
						</view>
						<view class="im-btn" @click="onRegister">
							<text>免费试用</text>
						</view>
					</view>
				</view>
				<view class="banner-item">
					<image src="/static/index2/banner-right.png" mode="widthFix" style="width: 573px;"></image>
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="flex-align" style="margin-top: 80px;">
				<view class="width-border"></view>
				<view class="container-title">
					战略合作伙伴
				</view>
			</view>
		</view>
		<view class="container-div container-padding flex-space-between">
			<view class="container-item flex-align flex-center flex-column">
				<view class="item-logo">
					<image src="/static/index2/logo1.png" mode="widthFix" style="width: 260px;"></image>
				</view>
				<view class="item-title">
					<text>北京首钢自动化信息技术有限公司</text>
				</view>	
				<view class="item-title-fu">
					<text style="color: #666666;">联合首自信，秉承“超越自我，创新发展”的企业理念，在立足首钢、服务主业的基础上，致力于突出主营，力求做精主业，强化产业...</text>
				</view>
				<view class="item-title-fu">
					<text class="main-color current">了解更多 ></text>
				</view>
			</view>
			<view class="container-item flex-align flex-center flex-column">
				<view class="item-logo">
					<image src="/static/index2/logo2.png" mode="widthFix" style="width: 198px;"></image>
				</view>
				<view class="item-title">
					<text>北京起步科技股份有限公司</text>
				</view>	
				<view class="item-title-fu">
					<text style="color: #666666;">联手起步，融合BeX5、牛刀PaaS多个系列开发平台，构建企业统一业务基础架构平台，提升企业云应用规划、部署、运维和治理，基于...</text>
				</view>
				<view class="item-title-fu">
					<text class="main-color current">了解更多 ></text>
				</view>
			</view>
			<view class="container-item flex-align flex-center flex-column">
				<view class="item-logo">
					<image src="/static/index2/logo3.png" mode="widthFix" style="width: 240px;"></image>
				</view>
				<view class="item-title">
					<text>视联动力信息技术股份有限公司</text>
				</view>	
				<view class="item-title-fu">
					<text style="color: #666666;">携手视联动力，促进各种技术融合应用，通过战略合作，在技术、产业上共同发力，加快了信息基础设施的建设和应用，促进上下游...</text>
				</view>
				<view class="item-title-fu">
					<text class="main-color current">了解更多 ></text>
				</view>
			</view>
		</view>	
		<view class="container-div">
			<view class="flex-align">
				<view class="width-border"></view>
				<view class="container-title">
					客户案例
				</view>
			</view>
		</view>
		<view class="container-div">
			<view class="container-padding flex-wrap flex-space-between">
				<view class="container-item1 flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo4.png" mode="widthFix" style="width: 260px;"></image>
					</view>
					<view class="item-title">
						<text> 文山壮族苗族自治州人民政府</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">实现政务通讯录统一管理，有效解决跨职能部门找人难的问题；针对文山州政务专网进行方案部署优化，确保数据的安全性；VPN点...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
					</view>
				</view>
				<view class="container-item1 flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo5.png" mode="widthFix" style="width: 260px;"></image>
					</view>
					<view class="item-title">
						<text>国家矿山安全监察局云南局</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">融合原有OA系统，对全局员工办公门户进行统一管理，以满足移动办公的需求；通过持续的版本更新和技术支持服务，实现及时通讯...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
					</view>
				</view>
				<view class="container-item1 flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo6.png" mode="widthFix" style="width: 240px;"></image>
					</view>
					<view class="item-title">
						<text>德钦县财政局</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">解决财政局使用其他通讯工具进行内部交流存在的管理隐患问题，并对具有保密需求的信息进行监管，有效保障德钦财政局内部交流...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
					</view>
				</view>
				<view class="container-item flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo7.png" mode="widthFix" style="width: 260px;"></image>
					</view>
					<view class="item-title">
						<text>东骏药哆哆</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">集成微信小程序，一键授权登录便于消费者与客服的交流与互动；聊天信息的实时记录，方便日后的内容审计和追责；客户端融合自...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
					</view>
				</view>
				<view class="container-item flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo8.png" mode="widthFix" style="width: 120px;"></image>
					</view>
					<view class="item-title">
						<text>昆明市妇幼保健院</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">打通医院不同部门、不同科室的沟通屏障，实现对病人病情问诊的针对性、及时性沟通；优质的售后及技术支持服务，为医院及时通...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
					</view>
				</view>
				<view class="container-item flex-align flex-center flex-column">
					<view class="item-logo">
						<image src="/static/index2/logo9.png" mode="widthFix" style="width: 260px;"></image>
					</view>
					<view class="item-title">
						<text>昭通学院</text>
					</view>	
					<view class="item-title-fu">
						<text style="color: #666666;">融合昭通学院“联奕移动校园平台”，以满足学院对账号同步、待办提醒、单点登录等功能模块的需求，定制化的校园主题客户端，能...</text>
					</view>
					<view class="item-title-fu">
						<text class="main-color current">了解更多 ></text>
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
	.container-padding {
		padding: 80px 0;
	}
	.container-item {
		width: 400px;
		height: 360px;
		padding: 20px;
		border-radius: 12px;
		box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
	}
	.container-item1 {
		width: 400px;
		height: 360px;
		padding: 20px;
		margin-bottom: 80px;
		border-radius: 12px;
		box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.15);
	}
	.item-title {
		width: 100%;
		padding-top: 20px;
		text {
			color: #333333;
			font-size: 20px;
			letter-spacing: 2px;
		}
	}
	.item-title-fu {
		width: 100%;
		padding: 10px 0;
		text {
			font-size: 14px;
		}
	}
	.item-logo {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.current {
		cursor: pointer;
	}
	.width-border {
		width: 5px;
		height: 30px;
		background-color: $maincolor;
	}
	.container-title {
		margin-left: 10px;
		font-size: 20px;
		color: #333333;
		font-weight: bold;
	}
</style>
