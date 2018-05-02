<template>
    <Panel title="更多服务" :class="$style.panelContainer">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.num">
                <img :src="item.src" :alt="item.title">
                <p>{{ item.title }}</p>
            </div>
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
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t18103/37/490404196/5076/dfe2d74f/5a8440f1Nbda4f02a.png?width=90&height=90",
                   num: 1,
                   title: "领红包"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t18073/271/483133084/5159/f8133cd6/5a844103N02f95449.png?width=90&height=90",
                   num: 2,
                   title: "领福利"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t17710/198/468680838/4169/de69ccb0/5a844046N1f4f2958.png?width=90&height=90",
                   num: 3,
                   title: "领券"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t19330/108/485433577/4856/13f8bcb9/5a844068N464525c2.png?width=90&height=90",
                   num: 4,
                   title: "支付抽奖"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                   num: 5,
                   title: "抢钢镚"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                   num: 6,
                   title: "医美"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                   num: 7,
                   title: "房抵债"
                },
                {
                   src: "//img12.360buyimg.com/jrpmobile/jfs/t17563/145/489151866/3943/bed46aef/5a8440cfN4a1fabc3.png?width=90&height=90",
                   num: 8,
                   title: "全部"
                },
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
        .content {
            @include list(row);
            .item {
                margin-bottom: 40px;
                width: 160px;
                height: 146px;
                text-align: center;
                img {
                    width: 90px;
                    height: 90px;
                }
                p {
                    margin-top: 12px;
                    font-size: 26px;
                    color: #666;
                }
            }
        }
    }
</style>