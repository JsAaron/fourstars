<template>
  <view class="classify-center">
    <view class="wrap">
      <!-- 导航 -->
      <view class="breadcrumb-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>四星评价体系</el-breadcrumb-item>
          <el-breadcrumb-item>分类中心</el-breadcrumb-item>
        </el-breadcrumb>
      </view>

      <!-- 搜索 -->
      <view class="yitu-search-component">
        <view class="el-input el-input--medium el-input--suffix">
          <el-input :border="none" v-model="input" placeholder="请输入搜索内容" class="el-input__inner"></el-input>
        </view>
        <el-button class="el-button el-button--default el-button--medium">搜索</el-button>
      </view>

      <!-- 分类 -->
      <view class="head-handle">
        <view class="el-select el-select--medium">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </view>
        <view class="el-select el-select--medium">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </view>
      </view>

      <!-- 卡片 -->
      <view class="card-container">
        <view class="title">建筑</view>
        <view class="content">
          <view class="options">
            <view class="option-item listed-btn formal-declaration">
              <text>铝墙板</text>
              <i class="state-icon"></i>
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
  onLoad(params) {
    this.$api.request({
      url: this.$api.apiUrl.classifyCenter.getIndustryList,
      data: {
        industryKey: '1',
        industryStatus: '',
        pageIndex: 1,
        pageSize: 10,
        productStatus: null
      },
      method: 'POST'
    }).then(res=>{
			console.log(111,res)
		})
  },
  onPageScroll(res) {
    uni.$emit('onPageScroll', res.scrollTop)
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
@import './classifyCenter.scss';
</style>
