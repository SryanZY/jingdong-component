<template>
    <Panel title="轮播" :class="$style.panelContainer">
        <section :class="$style.content">
            <Slider :items="items"></Slider>
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
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17680/66/2058519866/15992/1eac9960/5ae477c1Ne8845944.jpg?width=750&height=400"
                },
                {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16645/229/2167621575/45405/3bc2e55d/5ae915ccN4cdbe2ab.jpg?width=750&height=400"
                },
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
        margin-top: 120px;
        .content {
            width: 100%;
        }
    }
</style>