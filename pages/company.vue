<template>
	<view class="l-page">
		<view class="container-div flex-column">
			<view class="title-sty flex-center">
				<image src="/static/company/about_title1.png" mode="widthFix" style="width: 260px;"></image>
			</view>
			<view class="content-sty">
				<text>云南软捷科技有限公司（简称软捷科技）成立于2012年，注册资金1100万元，在昆明于2013年设立研发中心，目前共计70名员工。软捷科技是国家认定的高新技术企业和双软认定企业，承建了国家创新基金项目，荣获了质量管理体系认证证书、软件产品证书和三十多项计算机软件著作权登记证书。</text>
			</view>
			<view class="content-sty">
				<text>软捷科技自成立以来专注于政府、企事业单位及集团企业管理咨询、软件开发及信息化规划及相关技术支持等服务，基于以业务为导向的技术研发和服务思想，通过打造业务架构平台+定制化开发+业务应用集成协同的模式得到了业内的广泛认同，实现了业务导向和业务驱动的新一代管理软件开发和技术支持与服务的技术体系和运营模式，为现代信息化建设提供给了一套整体规划，分步实施，灵活调整，随需应变的需求的技术平台和实现手段。</text>
			</view>
		</view>
		<view class="container-div flex-column">
			<view class="title-sty flex-center">
				<image src="/static/company/about_title2.png" mode="widthFix" style="width: 260px;"></image>
			</view>
			<view class="flex-space-between">
				<view class="item-block flex-column flex-align">
					<view class="item-image">
						<image src="/static/company/about_img2.png" mode="widthFix" style="width: 170px;"></image>
					</view>
					<view class="item-about-title">
						<text>团队文化</text>
					</view>
					<view class="item-content">
						<text>踏实做人、认真做事、实现自我价值</text>
					</view>
				</view>
				<view class="item-block flex-column flex-align">
					<view class="item-image">
						<image src="/static/company/about_img3.png" mode="widthFix" style="width: 170px;"></image>
					</view>
					<view class="item-about-title">
						<text>经营理念</text>
					</view>
					<view class="item-content">
						<text>诚信、责任、双赢、合作、创新</text>
					</view>
				</view>
				<view class="item-block flex-column flex-align">
					<view class="item-image">
						<image src="/static/company/about_img4.png" mode="widthFix" style="width: 170px;"></image>
					</view>
					<view class="item-about-title">
						<text>企业愿景</text>
					</view>
					<view class="item-content">
						<text>做中国企业最需要的信息化领导厂商</text>
					</view>
				</view>
				<view class="item-block flex-column flex-align">
					<view class="item-image">
						<image src="/static/company/about_img5.png" mode="widthFix" style="width: 170px;"></image>
					</view>
					<view class="item-about-title">
						<text>企业使命</text>
					</view>
					<view class="item-content">
						<text>改善和引领企业信息化创新和变革</text>
					</view>
				</view>
			</view>
		</view>
		<view class="container-bg">
			<view class="container-div flex-column">
				<view class="title-sty flex-center">
					<image src="/static/company/about_title3.png" mode="widthFix" style="width: 260px;"></image>
				</view>
				<view class="flex-space-around container-item">
					<view class="item-sty flex-column flex-center">
						<view class="item-padding">
							<view class="item-title">
								<text>企业价值来源于客户成功</text>
							</view>
							<view class="item-title-x">
								<text>
									ENTERPRISE VALUE COMES FROM
									CUSTOMER SUCCESS
								</text>
							</view>
							<view class="item-title-fu">
								<text>软捷科技通过专业化的客户服务培训体系，不遗余力地提升全体员工服务意识。依托不断优化的服务流程，本着“企业价值来源于客户成功”的服务理念，为众多客户提供长期持续服务，客户二次签单率超过95%，软捷科技也以99%以上的平均客户满意度赢得客户的认可，进而推动了公司业务的快速稳定增长。目前，公司除在昆明设有研发中心外，还在洛阳、贵阳、武汉等地设有办事处，为全国客户提供长期优质的技术服务。
								</text>
							</view>
						</view>
					</view>
					<view class="item-sty">
						<image src="/static/company/about_img6.png" mode="widthFix" style="width: 540px;"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="container-div flex-column">
			<view class="title-sty flex-center">
				<image src="/static/company/about_title4.png" mode="widthFix" style="width: 260px;"></image>
			</view>
			<view class="flex-center">
				<image src="/static/company/about_img7.png" mode="widthFix" style="width: 1200px;"></image>
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
		padding: 30px 0;
	}

	.item-sty {
		width: 50%;
	}

	.item-padding {
		padding: 0 130px;
	}

	.item-title {
		text {
			font-size: 36px;
			color: #f29e1c;
			font-weight: bold;
		}
	}

	.item-title-x {
		text {
			font-size: 16px;
			line-height: 20px;
			color: #ccc;
			text-transform: uppercase; // 英文转换为大写
		}
	}

	.item-title-fu {
		margin-top: 20px;
		text-indent: 30px;

		text {
			font-size: 15px;
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

	.title-sty {
		width: 100%;
		padding-top: 80px;
		padding-bottom: 40px;
	}

	.content-sty {
		margin: 0 200px;
		text-indent: 30px;
		text {
			color: #666666;
		}

	}

	.item-block {
		width: 300px;
		height: 300px;
		margin-bottom: 60px;
	}

	.item-image {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		border: 1px dashed #B9BABA;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item-about-title {
		margin-top: 30px;

		text {
			font-size: 18px;
			color: #333333;
		}
	}

	.item-content {
		text {
			font-size: 15px;
			color: #666666;
		}
	}
</style>
