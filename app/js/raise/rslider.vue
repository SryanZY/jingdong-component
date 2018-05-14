<template>
    <Panel title="金融头条" :class="$style.panelContainer">
        <section :class="$style.content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取!!<em>></em></swiper-slide>
                <swiper-slide>签到领流量，1元500M!!<em>></em></swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data () {
        return {
            options: {
                autoplay: true,
                loop: true,
                direction: "vertical"
            }
        }
    },
    components: {
        Panel,
        swiper,
        swiperSlide
    }

}

</script>
<style lang='scss'>
    .swiper-container-vertical {
        height: 72px;
        .swiper-slide {
            font-family: "PingFangSC-Medium";
            font-size: 28px;
            color: #333;
            em {
                float: right;
                margin-right: 20px;
                color: #ddd;
            }
        }
    }
</style>

<style lang='scss' module>
    @import "../../css/element.scss";
    .panelContainer {
        >h4 {
            display: none;
        }
        margin-top: 120px!important;
        .content {
            height: 72px;
            line-height: 72px;
            overflow: hidden;
            padding-left: 178px;
            background: url("//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png") left top no-repeat;
            background-size: 146px 100%;
        }
    }
</style>