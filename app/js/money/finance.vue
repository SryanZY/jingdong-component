<template>
    <Panel title="理财精选" :class="$style.panelContainer">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="icon">
                <div>
                    <h4>月度理财</h4>
                    <p>预期年化收益率4.56%</p>
                </div>
                <em>去赚钱 >></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="icon">
                <div>
                    <h4>季度理财</h4>
                    <p>历史预期年化收益率5.50%</p>
                </div>
                <em>去赚钱 >></em>
            </div>
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="icon">
                <div>
                    <h4>一年理财</h4>
                    <p>预期年化收益率6.56%</p>
                </div>
                <em>去赚钱 >></em>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
    data () {
        return {}
    },
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
                    width: 344px;
                    p {
                        color: #ff3232;
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
                    color:#FFD700;
                }
            }
        }
    }
</style>