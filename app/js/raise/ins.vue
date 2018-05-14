<template>
    <Panel title="in货推荐" :class="$style.panelContainer">
        <section :class="$style.content">
            <div :class="$style.item" v-for="item in items" :key="item.catory">
                <img :src="item.catory" :alt="item.title">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="product in item.list" :key="product.img">
                        <img :src="product.img" :alt="product.title">
                        <p :class="$style.title">{{ product.title }}</p>
                        <p :class="$style.price"><em>{{ product.price }}</em>起</p>
                        <!--进度条-->
                        <article>
                            <div :class="$style.wrapper">
                                <div :class="$style.inner" :style="{width: product.progress + '%'}"></div>
                            </div>
                            <p>{{ product.progress }}</p>
                        </article>
                        <label v-if="product.select">精选</label>
                    </div>
                </section>
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
                    catory: '//img12.360buyimg.com/jrmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png',
                    list: [
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
                            title: '双响炮蓝牙音箱',
                            price: '29.80',
                            progress: 172,
                            select: true
                        },
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
                            title: '脑波相机',
                            price: '998.00',
                            progress: 259,
                            select: false
                        }
                    ]
                },
                {
                    catory: '//img12.360buyimg.com/jrmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png',
                    list: [
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
                            title: '智能电动牙刷',
                            price: '19.00',
                            progress: 481,
                            select: false
                        },
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
                            title: '烟草加热电子烟',
                            price: '258.00',
                            progress: 105,
                            select: false
                        }
                    ]
                },
                {
                    catory: '//img12.360buyimg.com/jrmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png',
                    list: [
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
                            title: '赖公高淮封藏老酒',
                            price: '159.00',
                            progress: 199,
                            select: true
                        },
                        {
                            img: '//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
                            title: '泗洪花雕醉蟹',
                            price: '58.00',
                            progress: 222,
                            select: true
                        }
                    ]
                }
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
            @include list;
            .item {
                >img {
                    display: block;
                    width: 100%;
                    height: 170px; 
                }
                margin-bottom: 40px;
                .list {
                    @include list(row);
                    .product {
                        position: relative;
                        width: 50%;
                        height: 396px;
                        box-sizing: border-box;
                        background: rgba(0, 0, 0, .02);
                        text-align: center;
                        img {
                            margin: 44px auto 20px;
                            width: 180px;
                            height: 180px;
                        }
                        .title {
                            font-size: 28px;
                            font-family: 'PingFangSC-Medium';
                            color: #444;
                        }
                        .price {
                            font-size: 20px;
                            font-family: 'PingFangSC-Semibold';
                            color: #999;
                            line-height: 48px;
                            em {
                                margin-right: 4px;
                                color: #ff3232;
                                font-size: 36px;
                                &:before {
                                    content: "￥";
                                    font-size: 28px;
                                }
                            }
                        }
                        article {
                            @include list(row);
                            align-items: center;
                            justify-content: space-around;
                            margin-top: 16px;
                            padding: 0 20px;
                            height: 30px;
                            line-height: 30px;
                            .wrapper {
                                width: 144px;
                                height: 10px;
                                background: #f6e6e6;
                                border-radius: 22px;
                                .inner {
                                    max-width: 100%;
                                    height: 10px;
                                    background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
                                    border-radius: 22px;
                                }
                            }
                            p {
                                font-size: 24px;
                                color: #999;
                            }
                        }
                        label {
                            position: absolute;
                            left: 0;
                            top: 0;
                            font-size: 20px;
                            font-family: 'PingFangSC-Medium'; 
                            color: #ff0000;
                            text-align: center;
                            padding: 4px 8px;
                            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
                        }
                    }
                }
            }
        }
    }  
</style>