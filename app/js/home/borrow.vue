<template>
    <Panel :title="borrow" :class="$style.panelContainer">
        <section :class="$style.content">
            <router-link :to="{name: 'home'}">
                <img src="https://img12.360buyimg.com/jrpmobile/jfs/t18658/268/1780571157/50112/f2de25f5/5ad857d7N2ce759f2.jpg?width=750&height=220" alt="借贷">
            </router-link>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
    data () {
        return {
            borrow: "极速借贷"
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
            padding-bottom: 40px;
            img {
                display: block;
                width: 100%;
            }
        }
    }
</style>