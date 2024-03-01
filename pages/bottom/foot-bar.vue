<template>
	<view>
		<view class="foot-container">
			<view class="container-div flex-column">
				<view class="foot-top">
					<view class="flex-space-between foot-border">
						<view>
							<view class="flex-column">
								<view class="">
									<image src="/static/er.png" mode="widthFix" style="width: 80px"></image>
								</view>
								<view class="foot-font-small margin-top10"><text>关注或联系我们</text></view>
								<view class="flex-align foot-font-small margin-top10">
									<view>
										<image src="/static/icon/phone.png" mode="widthFix" style="width: 14px;"></image>
									</view>
									<text style="margin-left: 6px;">咨询电话：400-6393-239</text>
								</view>
								<view class="flex-align foot-font-small">
									<view>
										<image src="/static/icon/addr.png" mode="widthFix" style="width: 14px;"></image>
									</view>
									<text style="margin-left: 6px;">昆明市高新区C2-6号地块垠创大厦301号</text>
								</view>
							</view>
						</view>
						<view>
							<view class="foot-title">
								<text>开发平台</text>
							</view>
							<uni-link href="https://www.p9cloud.cn/index.html">
								<view class="foot-title-big">
									<text>开发社区</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/index.html">
								<view class="foot-title-big">
									<text>平台理念</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/introduce">
								<view class="foot-title-big">
									<text>平台介绍</text>
								</view>
							</uni-link>
						</view>
						<view>
							<view class="foot-title">
								<text>技术服务</text>
							</view>
							<uni-link href="https://www.p9cloud.cn/service">
								<view class="foot-title-big">
									<text>培训服务</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/downloads">
								<view class="foot-title-big">
									<text>咨询服务</text>
								</view>
							</uni-link>
						</view>
						<view>
							<view class="foot-title">
								<text>服务支持</text>
							</view>
							<view class="foot-title-big" @click="openPage('/pages/download?id=5')">
								<text>软件下载</text>
							</view>
						</view>
						<view>
							<view class="foot-title">
								<text>关于我们</text>
							</view>
							<uni-link href="https://www.p9cloud.cn/about/zizhi">
								<view class="foot-title-big">
									<text>软捷资质</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/about/culture">
								<view class="foot-title-big">
									<text>软捷文化</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/about/join%20us">
								<view class="foot-title-big">
									<text>加入我们</text>
								</view>
							</uni-link>
							<uni-link href="https://www.p9cloud.cn/about/contact">
								<view class="foot-title-big">
									<text>联系我们</text>
								</view>
							</uni-link>
						</view>
					</view>
				</view>
				<view class="foot-bottom">
					<view class="foot-bottom-font">
						<text>Copyright ©YunNan AgileSoft Technology CO.,LTD.软捷科技有限公司.滇ICP备13005247号-4</text>
					</view>
					<!-- <view class="foot-bottom-font">
						<text> Copyright ©YunNan AgileSoft Technology CO.,LTD</text>
					</view> -->
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openPage(url) {
				uni.navigateTo({ url })
			}
		}
	}
</script>

<style lang="scss">
	.foot-container {
		margin-top: 100px;
		padding: 40px 0 10px 0;
		background-color: #EEEEEE;
	}
	.foot-top {
		width: 100%;
	}
	.foot-font-small {
		text {
			font-size: 15px;
			color: #666666;
		}
	}
	.foot-title {
		text {
			font-size: 18px;
			color: #000000;
			letter-spacing: 2px;
		}
	}
	.foot-title-big {
		margin-top: 6px;
		cursor: pointer;
		text {
			font-size: 15px;
			color: #666666;
		}
	}
	.foot-title-big:hover {
		text {
			color: $maincolor;
		}
	}
	.foot-border {
		padding-bottom: 20px;
	}
	.foot-bottom {
		text-align: center;
	}
	.foot-bottom-font {
		padding: 10px 0;
		text {
			color: #666666;
		}
	}
</style>
