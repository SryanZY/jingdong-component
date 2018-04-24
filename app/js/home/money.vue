<template>
    <Panel :class="$style.panelContainer" title="理财精选">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.title">
                <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
    data () {
        return {
            items: [
                {
                    title: "定期理财",
                    sub: "90天可质押",
                    rate: "5.50%",
                    text: "历史年化结算利率"
                },
                {
                    title: "年年盈",
                    sub: "理财推荐",
                    rate: "5.80%",
                    text: "综合年化收益率"
                },
                {
                    title: "基智账户",
                    sub: "组合投资",
                    rate: "8%-10%",
                    text: "止盈年化收益率"
                },
                {
                    title: "小白基金",
                    sub: "投短期",
                    rate: "5%",
                    text: "7日年化收益率"
                }
            ]
        }
    },
    components: {
        Panel
    }

}

</script>
<style lang='scss' module>
    @import "../../css/element.scss";
    .panelContainer {
        @include panel;
        .content {
            @include list(row);
            justify-content: space-around;
            box-sizing: border-box;
            &:after {
                display: block;
                position: relative;
                top: -168px;
                content: " ";
                width: 100%;
                height: 0;
                box-sizing: border-box;
                border-bottom: solid 1px #ddd;
            }
            .item {
                position: relative;
                width: 50%;
                box-sizing: border-box;
                padding: 16px 34px;
                &:after {
                    display: block;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -68px;
                    border-right: solid 1px #ddd;
                    content: " ";
                    width: 1px;
                    height: 136px;
                }
                &:nth-child(2n) {
                    &:after {
                        display: none;
                    }
                }
                dt {
                    font-size: 30px;
                    line-height: 42px;
                    color: #333;
                    span {
                       margin-left: 4px;
                       font-size: 22px;
                       color: #ff5155;
                       border: solid 1px #ff5155;
                       padding: 0 8px;
                       vertical-align: 1px;
                    } 
                }
                dd {
                    &:nth-child(2) {
                        font-weight: 700;
                        font-size: 44px;
                        height: 58px;
                        line-height: 58px;
                        color: #FF5155;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                    &:nth-child(3) {
                        font-size: 24px;
                        height: 34px;
                        line-height: 34px;
                        color: #999;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>