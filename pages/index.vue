<template>
  <view class="l-page">
    <view class="banner-container">
      <view class="container-div">
        <view class="banner-item">
          <view class="flex-column">
            <view class="im-title">
              <text>四星科技建设网</text>
            </view>
            <view class="im-title-fu">
              <text>追踪“最新”定义“最好”</text>
            </view>
            <view class="im-btn" @click="onRegister()">
              <text>免费试用</text>
            </view>
          </view>
        </view>
        <view class="banner-item">
          <!-- <image src="/static/index/banner-right.png" mode="widthFix" style="width: 650px"></image> -->
        </view>
      </view>
    </view>
    <view class="container-div flex-column">
      <view class="container-title">
        <text class="main-color">提供多种</text>
        <text>用户需要的办公及沟通功能</text>
      </view>
      <view class="flex-space-between">
        <view class="message-sty">
          <view class="message-icon" style="background-color: #f1f3ff">
            <image src="/static/index/icon/icon1.png" mode="widthFix"></image>
          </view>
          <view class="message-title">
            <text>一对一或群聊</text>
          </view>
          <view class="message-title-fu">
            <text>提供一对一、多对多的私人聊天、工作群聊，支持2000人大群</text>
          </view>
          <view class="message-border" style="background-color: #4e68fa"></view>
        </view>
        <view class="message-sty">
          <view class="message-icon" style="background-color: #f0fcf5">
            <image src="/static/index/icon/icon2.png" mode="widthFix"></image>
          </view>
          <view class="message-title">
            <text>多种消息类型</text>
          </view>
          <view class="message-title-fu">
            <text>支持文字、图片、语音、视频、文件等多种类型消息传输</text>
          </view>
          <view class="message-border" style="background-color: #3bd078"></view>
        </view>
        <view class="message-sty">
          <view class="message-icon" style="background-color: #fff0f8">
            <image src="/static/index/icon/icon3.png" mode="widthFix"></image>
          </view>
          <view class="message-title">
            <text>消息推送</text>
          </view>
          <view class="message-title-fu">
            <text>支持通过服务器推送系统消息、或定向离线用户发送离线消息</text>
          </view>
          <view class="message-border" style="background-color: #ff007f"></view>
        </view>
        <view class="message-sty">
          <view class="message-icon" style="background-color: #f3f0fe">
            <image src="/static/index/icon/icon4.png" mode="widthFix"></image>
          </view>
          <view class="message-title">
            <text>离线消息</text>
          </view>
          <view class="message-title-fu">
            <text>离线状态下发送的消息可以正常保存，用户登陆后会受到离线消息，覆盖主流手机厂商</text>
          </view>
          <view class="message-border" style="background-color: #693cf3"></view>
        </view>
      </view>
    </view>
    <view class="container-div flex-column">
      <view class="container-title">
        <text>全方位保障</text>
        <text class="main-color">信息安全</text>
      </view>
      <view class="safety-container">
        <view class="safety-item">
          <image src="/static/index/safety-left.png" mode="widthFix" style="width: 414px"></image>
        </view>
        <view class="safety-item">
          <view class="safety-right">
            <view style="padding: 20px 0">
              <view class="flex-align">
                <view class="safety-radius"></view>
                <view class="safety-title">
                  <text>私有部署</text>
                </view>
              </view>
              <view class="safety-title-fu">
                <text>服务器资源自助掌控，保障内部数据私密安全</text>
              </view>
            </view>
            <view style="padding: 20px 0">
              <view class="flex-align">
                <view class="safety-radius"></view>
                <view class="safety-title">
                  <text>业务安全</text>
                </view>
              </view>
              <view class="safety-title-fu">
                <text>登录身份认证丨设备授权管理丨移动安全加固</text>
              </view>
            </view>
            <view style="padding: 20px 0">
              <view class="flex-align">
                <view class="safety-radius"></view>
                <view class="safety-title">
                  <text>服务安全</text>
                </view>
              </view>
              <view class="safety-title-fu">
                <text>基于信息安全的体系搭建，遵循国家信息安全等级保护相关标准</text>
              </view>
            </view>
            <view style="padding: 20px 0">
              <view class="flex-align">
                <view class="safety-radius"></view>
                <view class="safety-title">
                  <text>数据安全</text>
                </view>
              </view>
              <view class="safety-title-fu">
                <text>国密算法进行加密，历史消息自动备份</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="container-div flex-column">
      <view class="container-title">
        <text>IM-部署方式</text>
      </view>
      <view class="deploy-container flex-space-around">
        <view class="deploy-item">
          <view>
            <image src="/static/index/icon/num1.png" mode="widthFix" style="width: 200px"></image>
          </view>
          <view class="deploy-title">
            <text>私有 云托管</text>
          </view>
          <view class="deploy-title-fu">
            <text>使用独立服务器，保证数据独立，客户拥有服务器管理权限。私有云平台通过公安部等保三级。</text>
          </view>
        </view>
        <view class="deploy-item">
          <view>
            <image src="/static/index/icon/num2.png" mode="widthFix" style="width: 200px"></image>
          </view>
          <view class="deploy-title">
            <text>独立 部署</text>
          </view>
          <view class="deploy-title-fu">
            <text>部署在用户指定数据中心，数据存储全部放在客户本地数据中心，客户拥有所有管理权限。</text>
          </view>
        </view>
        <view class="deploy-item">
          <view>
            <image src="/static/index/icon/num3.png" mode="widthFix" style="width: 200px"></image>
          </view>
          <view class="deploy-title">
            <text>信创 云部署</text>
          </view>
          <view class="deploy-title-fu">
            <text>
              遵循国家信息技术应用创新战略，满足各级政府、大型企事业单位等组织对信息技术应用创新的迫切的需求。
            </text>
          </view>
        </view>
        <view class="deploy-item">
          <view>
            <image src="/static/index/icon/num4.png" mode="widthFix" style="width: 200px"></image>
          </view>
          <view class="deploy-title">
            <text>内外网 混合部署</text>
          </view>
          <view class="deploy-title-fu">
            <text>互联网手机、专用网络移动终端、内网PC实现通讯互联。</text>
          </view>
        </view>
      </view>
    </view>
    <foot-bar></foot-bar>
    <right-btn></right-btn>
  </view>
</template>

<script>
/**
 * 程序启动页
 * */
import footBar from '@/pages/bottom/foot-bar.vue'
import rightBtn from '@/pages/right/right-btn.vue'
export default {
  components: {
    footBar,
    rightBtn
  },
  data() {
    return {}
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('pageData', data => {
      console.log(data)
      // data即传过来的参数
    })
  },
  onPageScroll(res) {
    uni.$emit('onPageScroll', res.scrollTop)
  },
  onShow(params) {
    console.log(params)
  },
  methods: {
    // 注册
    onRegister() {
      uni.navigateTo({
        url: '/pages/html'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  width: 100%;
  height: 600px;
  background-color: #f2f5fb;
  background-image: url(https://fourstars.net.cn/static/img/banner.1733075d.png);
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
    // color: #101010;
    color: #fff;
  }
}

.im-title-fu {
  width: 400px;
  margin-top: 20px;

  text {
    font-size: 18px;
    // color: #5a5a5a;
    color: #fff;
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
  background-color: #2999fbbf;
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

.message-sty {
  width: 300px;
  height: 300px;
}

.message-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  image {
    width: 100%;
  }
}

.message-title {
  margin-top: 30px;

  text {
    font-size: 18px;
    font-weight: bold;
    color: #101010;
  }
}

.message-title-fu {
  margin-top: 30px;
  line-height: 20px;

  text {
    color: #6a7180;
  }
}

.message-border {
  width: 30px;
  height: 4px;
  margin-top: 80px;
  border-radius: 16px;
}

.safety-container {
  width: 100%;
  height: 526px;
  background-color: #f9fafc;
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
  width: 620px;
}

.safety-radius {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333333;
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

  text {
    font-size: 16px;
    color: #666666;
  }
}

.deploy-container {
  width: 100%;
  padding: 0 60px;
  height: 491px;
  background-color: #f9fafc;
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
