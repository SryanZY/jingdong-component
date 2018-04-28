<template>
    <Panel title="小金库" :class="$style.panelContainer">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t18235/248/2021898000/48561/ae45dcc1/5ae28af3Nfcad60fd.png?width=690&height=154" alt="广告">
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
            display: none;
        }
        .content {
            img {
                display: block;
                width: 100%;
                height: 154px;
            }
        }
    }
</style>