<template>
    <Panel title="轮播图" :class="$style.panelContainer">
        <section :class="$style.content">
            <Slider :items="items" :cname="$style.slider"></Slider>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
import Slider from "../core/slider";
export default {
    data () {
        return {
            items: [
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19480/73/2067288943/22513/37089e7/5ae317aaN9061feb0.jpg?width=750&height=400"
                },
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17248/248/2009339976/20323/6eb9e117/5ae31772N0af6184e.jpg?width=750&height=400"
                },
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19456/16/2038209525/43745/7c8a08fc/5ae3179bNee10f7e0.jpg?width=750&height=400"
                },
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19789/120/2047801800/47817/5a14a72c/5ae3178bNe7d58e3c.png?width=750&height=400"
                }
            ]
        }
    },
    components: {
        Panel,
        Slider
    }

}

</script>
<style lang='scss' module>
    @import "../../css/element.scss";
    .panelContainer {
        >h4 {
            display: none;
        }
        .content {
            .slider {
                margin-top: 120px;
            }
        }
    }
</style>