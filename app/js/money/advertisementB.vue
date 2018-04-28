<template>
    <Panel title="钢镚" :class="$style.panelContainer">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264" alt="钢镚">
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
                height: 272px;
            }
        }
    }
</style>