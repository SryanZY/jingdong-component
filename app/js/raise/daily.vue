<template>
    <div :class="$style.dailyContainer">
        <Btn :class="$style.memberLevel">会员等级</Btn>
        <p :class="$style.money">立马登录 马上赚钱!</p>
        <Btn :class="$style.signIn">签到</Btn>
    </div>
</template>

<script>
import Btn from "../core/btn";
export default {
    components: {
        Btn
    }

}

</script>
<style lang='scss' module>
    @import "../../css/element.scss";
    .dailyContainer {
        @include list(row);
        width: 586px;
        height: 130px;
        margin: 0 auto;
        background: #fff;
        padding-top: 26px;
        text-align: center;
        border-radius: 4px;
        z-index: 3;
        box-sizing: border-box;
        box-shadow: 0 0 2px 1px rgba(101,118,155,.15);
        .memberLevel {
            width: 96px;
            height: 66px;
            line-height: 66px;
            color: #fff;
            font-size: 22px;
            margin-left: 20px;
            border-radius: 4px;
            border: none;
            background: linear-gradient(#f5da9d, #e4c584, #dcbe81, #d3b67d, #bb9f6e);
            box-shadow: 0 6px 8px 0 hsla(41,44%,63%,.51);
        }
        p.money {
            height: 100%;
            font-family: PingFangSC-Semibold;
            font-size: 28px;
            color: #c6a76f;
            letter-spacing: 0;
            line-height: 65px;
            text-align: left;
            padding-left: 20px;
            box-sizing: border-box;
        }
        .signIn {
            margin-left: 60px;
            margin-top: 10px;
            width: 106px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            font-size: 22px;
            border: none;
            border-radius: 30px;
            background: linear-gradient(#f5da9d, #e4c584, #dcbe81, #d3b67d, #bb9f6e);
            box-shadow: 0 6px 8px 0 hsla(41,44%,63%,.51);
        }
    }
</style>