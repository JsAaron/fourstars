<template>
  <view :class="pageScroll ? 'p9-section-active' : 'p9-section'">
    <view class="title-div">
      <view class="head-logo" @click="clickLogo">
        <image src="/static/logo.png" mode="widthFix" style="width: 200px"></image>
      </view>
      <view class="head-menu">
        <el-menu
          text-color="#393977"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">新闻中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">四星评价体系</template>
            <el-menu-item index="分类中心">分类中心</el-menu-item>
            <el-menu-item index="产品中心">产品中心</el-menu-item>
            <el-menu-item index="权威榜单">权威榜单</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">科技全景图</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">四星专家库</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">帮助中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </view>
      <view class="head-help">
        <!-- <view class="head-phone">
          <text class="main-color">400-6393-239</text>
        </view> -->
        <view class="head-rule"></view>
        <view class="head-btn" @click="onRegister()">免费试用</view>
      </view>
    </view>
    <view class="popup-sty" v-if="popup" @mouseleave="removeActive">
      <view class="container-div flex-column">
        <view class="popup-title">
          <text>产品介绍</text>
        </view>
        <view class="flex-row">
          <view class="popup-padding">
            <view class="popup-item" @click="openPage('/pages/product')">
              <image src="/static/title1.png" mode="widthFix" style="width: 23px"></image>
              <text class="margin-left10">IM 即时通讯</text>
            </view>
            <view class="popup-item" @click="openPage('/pages/synergy')">
              <image src="/static/title2.png" mode="widthFix" style="width: 23px"></image>
              <text class="margin-left10">协同办公</text>
            </view>
            <view class="popup-item" @click="openPage('/pages/workportal')">
              <image src="/static/title3.png" mode="widthFix" style="width: 23px"></image>
              <text class="margin-left10">工作门户</text>
            </view>
            <view class="popup-item" @click="openPage('/pages/localization')">
              <image src="/static/title4.png" mode="widthFix" style="width: 23px"></image>
              <text class="margin-left10">支持国产化</text>
            </view>
          </view>
          <!-- <view class="popup-padding" style="margin-left: 50px;">
						<view class="popup-item" @click="openPage('/pages/product')">
							<image src="/static/title1.png" mode="widthFix" style="width: 23px;"></image>
							<text class="margin-left10">IM 即时通讯</text>
						</view>
						<view class="popup-item" @click="openPage('/pages/synergy'	)">
							<image src="/static/title2.png" mode="widthFix" style="width: 23px;"></image>
							<text class="margin-left10">协同办公</text>
						</view>
						<view class="popup-item" @click="openPage('/pages/workportal')">
							<image src="/static/title3.png" mode="widthFix" style="width: 23px;"></image>
							<text class="margin-left10">工作门户</text>
						</view>
						<view class="popup-item" @click="openPage('/pages/localization')">
							<image src="/static/title4.png" mode="widthFix" style="width: 23px;"></image>
							<text class="margin-left10">支持国产化</text>
						</view>
					</view> -->
        </view>
      </view>
    </view>
  </view>
</template>

<script>
/**
 * 程序启动页
 * */
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tabs: [
        {
          name: '首页',
          checked: true,
          border: false
        },
        {
          name: '新闻中心',
          checked: false,
          border: false
        },
        {
          name: '四星评价体系',
          checked: false,
          border: false
        },
        {
          name: '科技全景图',
          checked: false,
          border: false
        },
        {
          name: '四星专家库',
          checked: false,
          border: false
        },
        {
          name: '帮助中心',
          checked: false,
          border: false
        }
      ],
      popup: false,
      pageScroll: false
    }
  },
  onLoad(params) {},
  mounted() {
    var that = this
    uni.$on('id', data => {
      if (data == 5) {
        for (var i in that.tabs) {
          if (i == 5) {
            that.tabs[5]['checked'] = true
          } else {
            that.tabs[i]['checked'] = false
          }
        }
      } else if (data == 0) {
        for (var i in that.tabs) {
          that.tabs[i]['checked'] = false
        }
      }
    })
    uni.$on('onPageScroll', function (data) {
      if (data != 0) {
        that.pageScroll = true
      } else {
        that.pageScroll = false
      }
    })
  },
  methods: {
    handleSelect(e) {
      switch (e) {
        case '分类中心':
          uni.navigateTo({
            url: '/pages/news/classifyCenter'
          })
          break
        default:
          break
      }
      console.log('🚀 ~ handleSelect ~ e:', e)
    },

    // 注册
    onRegister() {
      uni.navigateTo({
        url: '/pages/html'
      })
    },
    // 鼠标点击tabs菜单
    onTabs(item) {
      for (var i in this.tabs) {
        if (item.name == this.tabs[i]['name']) {
          this.tabs[i]['checked'] = true
        } else {
          this.tabs[i]['checked'] = false
        }
      }
      if (item.name == '首页') {
        uni.navigateTo({
          url: '/pages/index'
        })
      } else if (item.name == '支持国产化') {
        uni.navigateTo({
          url: '/pages/localization'
        })
      } else if (item.name == '客户案例') {
        uni.navigateTo({
          url: '/pages/customer'
        })
      } else if (item.name == '下载') {
        uni.navigateTo({
          url: '/pages/download'
        })
      } else if (item.name == '公司介绍') {
        uni.navigateTo({
          url: '/pages/company'
        })
      }
    },
    // 鼠标移入tabs菜单
    changeActive(item) {
      for (var i in this.tabs) {
        if (item.name == this.tabs[i]['name']) {
          this.tabs[i]['border'] = true
        } else {
          this.tabs[i]['border'] = false
        }
      }
      if (item.name == '产品介绍') {
        this.popup = true
      } else {
        this.popup = false
      }
    },
    // logo点击事件
    clickLogo() {
      for (var i in this.tabs) {
        if (i == 0) {
          this.tabs[0]['checked'] = true
        } else {
          this.tabs[i]['checked'] = false
        }
      }
      this.popup = false
      uni.navigateTo({
        url: '/pages/index'
      })
    },
    // 鼠标移出tab菜单
    removeTabs() {
      for (var i in this.tabs) {
        this.tabs[i]['border'] = false
      }
    },
    // 鼠标移出二级菜单
    removeActive() {
      this.popup = false
    },
    // 鼠标点击二级菜单栏目事件
    openPage(url) {
      for (var i in this.tabs) {
        this.tabs[i]['checked'] = false
      }
      this.tabs[1]['checked'] = true
      uni.navigateTo({ url })
    }
  }
}
</script>

<style lang="scss" scoped>
.p9-section {
  width: 100%;
  height: 88px;
  background-color: fff;
}
.p9-section-active {
  width: 100%;
  height: 88px;
  background-color: #fff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
}

.title-div {
  width: 1344px;
  height: 88px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.head-logo {
  width: 160px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.head-logo image {
  width: 100%;
}

.head-menu {
  width: 750px;
  margin-left: 80px;
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item-active {
  width: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 29px;
  cursor: pointer;
  text {
    color: $maincolor;
    font-size: 16px;
  }
}

.menu-item:hover {
  color: $maincolor;
}

.menu-item {
  width: 130px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  text {
    font-size: 16px;
  }
}

.head-border {
  width: 100%;
  height: 3px;
  // margin-bottom: -3px;
  margin-top: 27px;
  background-color: $maincolor;
  // border-radius: 6px;
}

.head-help {
  width: 260px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.head-phone {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.head-rule {
  height: 15px;
  border-right: 2px solid #e7e7e7;
}

.head-btn {
  width: 100px;
  height: 35px;
  background-color: $maincolor;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.head-btn:hover {
  background-color: #2999fbbf;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    /*初始状态 透明度为0*/
  }

  50% {
    opacity: 0;
    /*中间状态 透明度为0*/
  }

  100% {
    opacity: 1;
    /*结尾状态 透明度为1*/
  }
}
@-webkit-keyframes fadeOut {
  0% {
    opacity: 0;
    /*初始状态 透明度为0*/
  }

  50% {
    opacity: 0;
    /*中间状态 透明度为0*/
  }

  100% {
    opacity: 1;
    /*结尾状态 透明度为1*/
  }
}

.popup-sty {
  width: 100%;
  padding: 35px 0;
  border-top: 1px solid #eeeeee;
  box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  position: fixed;
  top: 1;
  -webkit-animation-name: fadeIn;
  /*动画名称*/
  -webkit-animation-duration: 0.5s;
  /*动画持续时间*/
  -webkit-animation-iteration-count: 1;
  /*动画次数*/
  -webkit-animation-delay: 0s;
  /*延迟时间*/
  cursor: pointer;
}
.popup-title {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  text {
    color: #666666;
    font-size: 16px;
  }
}
.popup-padding {
  padding-top: 20px;
}
.popup-item {
  width: 140px;
  margin: 15px 0;
  display: flex;
  align-items: center;
  text {
    font-size: 18px;
    color: #666666;
  }
}
.popup-item:hover {
  background-color: #d1e7fbbf;
}
</style>
