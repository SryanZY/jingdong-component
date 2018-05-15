<template>
    <Panel title="下载APP" :class="$style.panelContainer">
        <section :class="$style.content">
            <div></div>
            <p>立即下载</p>
            <span>copyright</span>
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
    html, body {
        background: #fff;
    }
    .panelContainer {
        margin: 0;
        >h4 {
            display: none;
        }
        .content {
            @include list(row);
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 1136px;
            >div {
                background: url('https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?') center center no-repeat;
                background-size: 100% auto;
                margin-top: -400px;
                width: 600px;
                height: 800px;
            }
            >p {
                @include btn($size: 32px, $color: #fff, $bgcolor: #F1443E, 
                $padding: 5px, $radius: 5px);
                position: fixed;
                bottom: 130px;
                width: 470px;
                height: 100px;
                line-height: 100px;
                background-image: linear-gradient(270deg,#F55C33 0, #EE2D1B 75%);;
                box-shadow: 0 12px 32px 0 rgba(255, 159, 135, .6);
            }
            span {
                position: fixed;
                bottom: 16px;
                font-size: 24px;
                font-weight: 500;
                color: #eee;
            }
        }
    }
</style>