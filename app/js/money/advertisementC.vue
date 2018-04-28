<template>
    <Panel title="京东智投" :class="$style.panelContainer">
        <section :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t19756/137/1902911799/17823/e19ffe7b/5add9511Nf6984e89.jpg?width=750&height=200" alt="京东智投">
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
        margin-bottom: 0;
        >h4 {
            display: none;
        }
        .content {
            img {
                display: block;
                width: 100%;
                height: 200px;
            }
        }
    }
</style>