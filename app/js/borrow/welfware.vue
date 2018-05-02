<template>
    <Panel title="白条福利" :class="$style.panelContainer">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="icon">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <em>立即开通 >></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="icon">
                <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <em>随机立减 >></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="icon">
                <div>
                    <h4>白条提额</h4>
                    <p>金融提额礼包</p>
                </div>
                <em>去提额 >></em>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
    components: {
        Panel
    }

}

</script>
<style lang='scss' module>
    @import "../../css/element.scss";
    .panelContainer {
        >h4 {
            border-bottom: solid 1px #ddd;
        }
        .content {
            @include list;
            .item {
                @include list(row);
                align-items: center;
                height: 140px;
                &:after {
                    content: "";
                    box-sizing: border-box;
                    height: 0;
                    width: 100%;
                    border-bottom: solid 1px #ddd;
                    margin-left: 150px;
                }
                &:last-child:after {
                    border-color: #fff;
                }
                >img {
                    display: inline-block;
                    margin: 0 32px;
                    width: 88px;
                    height: 88px;
                }
                >div {
                    font-size: 32px;
                    color: #333;
                    line-height: 1.8;
                    width: 304px;
                    p {
                        color: #999;
                        font-size: 24px;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                >em {
                    font-size: 28px;
                    font-weight: 400;
                    color:#FF4500;
                }
            }
        }
    }
</style>