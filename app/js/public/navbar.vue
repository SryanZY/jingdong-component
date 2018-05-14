<template>
    <Panel title="导航条" :class="$style.panelContainer">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'home' }">
                    <span :class="$style.iconHome2"></span>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'money' }">
                    <span :class="$style.iconRadioChecked2"></span>
                    <p>赚钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'borrow' }">
                    <span :class="$style.iconCoinYen"></span>
                    <p>借钱</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'raise' }">
                    <span :class="$style.iconNewspaper"></span>
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">
                    <span :class="$style.iconUser"></span>
                    <p>金融会员</p>
                </router-link>
            </li>
        </ul>
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
        @include panel;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        height: 100px;
        >h4 {
            display: none;
        }
        .content {
            @include list(row);
            justify-content: space-around;
            li {
                text-align: center;
                a {
                    text-decoration: none;
                }
                span {
                    display: inline-block;
                    margin: 12px auto 6px;
                    width: 44px;
                    height: 44px;
                    color: #999;
                    font-family: 'icomoon' !important;
                    font-style: normal;
                    font-weight: normal;
                    font-variant: normal;
                    text-transform: none;
                    line-height: 1;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                .icon-home2 {
                    &:before {
                        content: "\e901";
                    }
                }
                .icon-newspaper {
                    &:before {
                        content: "\e904";
                    }
                }
                .icon-coin-yen {
                    &:before {
                        content: "\e93e";
                    }
                }
                .icon-user {
                    &:before {
                        content: "\e971";
                    }
                }
                .icon-radio-checked2 {
                    &:before {
                        content: "\ea55";
                    }
                }
                p {
                    font-size: 22px;
                    color: #656565;
                }
            }
        }
    }
</style>