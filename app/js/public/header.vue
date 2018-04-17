<template>
  <div :class="$style.header">
      <span :class="$style.left">
          <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
      </span>
      <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from "../core/btn";
export default {
  components: {
      btn
  }
}

</script>
<style lang='scss' module>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0; // 相当于width:100%
        color: #666;
        font-size: 32px;
        height: 100px;
        line-height: 100px;
        background: #fff url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
        background-size: auto 50%;
        z-index: 100;
        .left {
            margin: 17px 0 0 18px;
            font-size: 28px;
            height: 30px;
            line-height: 30px;
        }
        .btnDownload {
            float: right;
            margin: 28px 24px 0 0;
            font-size: 24px;
            border-width: 0;
            height: 56px;
            line-height: 56px;
            min-width: 120px;
            padding: 0;
            border-radius: 4px;
        }
    }
</style>