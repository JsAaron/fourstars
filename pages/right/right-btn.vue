<template>
	<view>
		<view class="right-btn">
			<view class="flex-align flex-column right-item" @click="openAiff()">
				<view class="">
					<image src="/static/icon/message.png" mode="widthFix" style="width: 25px;"></image>
				</view>
				<view class="btn-title">
					<text>在线咨询</text>	
				</view>
			</view>
			<view class="flex-align flex-column right-item" @mouseenter="onChange"  @mouseleave="removeChange">
				<view class="">
					<image src="/static/icon/service.png" mode="widthFix" style="width: 25px;"></image>
				</view>
				<view class="btn-title">
					<text>技术支持</text>
				</view>
			</view>
			<view class="er-sty" v-if="showEr">
				<view class="flex-center margin-top20">
					<image src="/static/er.png" mode="widthFix" style="width: 130px;"></image>
				</view>
				<view class="margin-top10 flex-center er-phone">
					咨询：137-0870-1523
				</view>
			</view>
			<uni-link href="https://bbs.p9cloud.cn/cate/7/seq/0">
				<view class="flex-align flex-column right-item">
					<view class="">
						<image src="/static/icon/help.png" mode="widthFix" style="width: 25px;"></image>
					</view>
					<view class="btn-title">
						<text>帮助中心</text>
					</view>
				</view>
			</uni-link>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				showEr: false
			}
		},
		methods: {
			onChange() {
				this.showEr = true
			},
			removeChange() {
				this.showEr = false
			},
			openAiff() {
				window.open('https://p.qiao.baidu.com/cps/chat?siteId=18676070&userId=21604392&siteToken=9d10377fd4e45238cec3cca40a839e09',
				"newwindow", "height=615, width=815,top=200, left=450, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no"
				)
			}
		}
	}
</script>

<style lang="scss">
	.right-btn {
		background-color: $maincolor;
		border-radius: 10px;
		padding: 10px 0;
		box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.40); 
		position: fixed;
		top: 300px;
		right: 20px;
	}
	.btn-title {
		margin-top: -10px;
		text {
			font-size: 10px;
			color: #fff;
		}
	}
	.right-item {
		padding: 10px;
		cursor: pointer;
	}
	.right-item:hover {
		background-color: #2986e4;
	}
	.er-sty {
		width: 180px;
		height: 200px;
		position: absolute;
		border-radius: 10px;
		right: 100px;
		bottom: 20px;
		background-color: $maincolor;
		box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.40); 
	}
	.er-sty:before {
	  content: "";
	  position: absolute;
	  left: 100%;
	  top: 80px;
	  width: 0;
	  height: 0;
	  border-bottom: 13px solid transparent;
	  border-left: 26px solid $maincolor;
	  border-top: 13px solid transparent;
	}
	.er-phone {
		color: #fff;
		font-size: 13px;
	}
	  
</style>