<template>
  <!-- 遮罩层 -->
  <u-popup @close="close" v-model="show" mode="bottom" border-radius="30" height="50%">

    <view class="customer-service-title">
      <span>长按二维码添加客服</span>
      <view class="customer-service-close">
        <u-icon name="close" @click="close"></u-icon>
      </view>
    </view>
    <view class="customer-service-content">
      <!-- #ifdef MP-WEIXIN -->
      <image class="customer-service-item" :src="imQrCode" mode="widthFix" show-menu-by-longpress></image>
      <!-- #endif -->
    </view>
  </u-popup>
</template>
<script>

export default {
  data() {
    return {
      show: true,
    };
  },
  // 店铺二维码
  props: ["imQrCode"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "mp-customer-service";

.customer-service-title {
  position: relative;
  height: 90rpx;
  font-size: 32rpx;
  line-height: 90rpx;
  text-align: center;

  > .customer-service-close {
    position: absolute;
    right: 20rpx;
    top: 0;
  }
}

button:after {
  border: none;
}

.customer-service-content {
  padding: 0 32rpx;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  .customer-service-item {
    width: 75%;
  }
}
</style>