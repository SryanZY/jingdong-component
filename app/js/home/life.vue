<template>
    <Panel :class="$style.panelContainer" title="生活服务">
        <ul :class="$style.content">
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90" alt="旅游">
                <p>旅游</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90" alt="医美">
                <p>医美</p>
                <p>全新升级</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88" alt="房抵债">
                <p>房抵债</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90" alt="驾校">
                <p>驾校</p>
            </li>
            <li :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88" alt="分期用">
                <p>分期用</p>
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
        .content {
            @include list(row);
            box-sizing: border-box;
            padding-bottom: 40px;
            .item {
                width: 20%;
                text-align: center;
                p {
                    margin-top: 12px;
                    font-size: 26px;
                    color: #666;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    &:nth-child(3) {
                        color: #ff801a;
                        font-weight: 500;
                    }
                }
                img {
                    width: 90px;
                    height: 90px;
                }
            }
        }
    } 
</style>