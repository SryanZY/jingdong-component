<template>
  <Panel :title="title" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item">
              <h4>下载APP <span :class="$style.red">送888元礼包</span></h4>
              <p :class="$style.gray">新手专享</p>
              <img src="https://img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56" alt="专享">
          </div>
          <div :class="$style.item">
              <ul>
                  <li>
                      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56" alt="车险">
                      <h4>领128元新手礼包</h4>
                      <p :class="$style.gray">立即开通</p>
                  </li>
                  <li>
                      <img src="https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56" alt="校园">
                      <h4>打白条<span :class="$style.red">享免息</span></h4>
                      <p :class="$style.gray">立即开通享好礼</p>
                  </li>
              </ul>
          </div>
      </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  components: {
      Panel
  },
  data () {
      return {
          title: "新手特权"
      }
  }
}

</script>
<style lang="scss" module>
    @import "../../css/element.scss";
    .panel {
        @include panel;
        >h4 {
            border-bottom: 1px solid #ddd;
        }
        .content {
            @include list(row);
            .item {
                width: 50%;
                box-sizing: border-box;
                &:first-child {
                    padding: 32px 20px;
                    text-align: center;
                    border-right: solid 1px #ddd;
                    img {
                        margin: 20px auto;
                        width: 132px;
                        height: 132px;
                    }
                }
                h4 {
                    font-size: 26px;
                    line-height: 40px;
                }
                .red {
                    color: #f00;
                }
                .gray {
                    color: #999;
                    font-size: 24px;
                }
                p {
                    margin-top: 6px;
                    font-size: 24px;
                }
                ul li {
                    width: 100%;
                    height: 144px;
                    padding: 32px 28px;
                    box-sizing: border-box;
                    &:first-child {
                        border-bottom: solid 1px #ddd;
                    }
                    img {
                        float: right;
                        width: 80px;
                        height: 80px;
                    }
                    h4 {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        text-align: left;
                    }
                }
            }
        }
    }
</style>