<template>
  <article>
      <Slider :items="items" :cname="$style.slider"></Slider>
      <section :class="$style.list">
          <div :class="$style.item" v-for="item in enters" :key="item.img">
              <router-link :to="{ name: item.href }">
                  <img :src="item.img" :alt="item.title">
                  <h4>{{ item.title }}</h4>
              </router-link>
          </div>
      </section>
  </article>
</template>

<script>
import Slider from "../core/slider";
export default {
  data () {
    return {
       items: [
           {
               href: "download",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t17743/102/1419735038/76755/d0974387/5ac97f30N0b690c0c.jpg?width=750&height=320"
           },
           {
               href: "download",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t19750/241/1705646050/49372/ef55bcd2/5ad497a9Ndeea8dff.jpg?width=750&height=320"
           },
           {
               href: "download",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t17167/299/1666167393/51028/aa9d1c3a/5ad49788Nf2c4e8ed.jpg?width=750&height=320"
           },
           {
               href: "download",
               src: "//img12.360buyimg.com/jrpmobile/jfs/t19639/92/1735466487/55081/50c0b4d6/5ad49774N67963a9d.jpg?width=750&height=320"
           }
       ],
       enters: [
           {
               href: "download",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
               title: "优惠券"
           },
           {
               href: "download",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
               title: "领红包"
           },
           {
               href: "download",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
               title: "抢钢镚"
           },
           {
               href: "download",
               img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
               title: "白条提额"
           }
       ] 
    };
  },

  components: {
      Slider
  }
}

</script>
<style lang='scss' module>
    @import "../../css/element.scss";
    .slider {
        margin-top: 120px;
        img {
            width: 100%;
        }
    }
    .list {
        @include list(row);
        justify-content: space-around;
        background: #fff;
        padding-bottom: 20px;
        padding-top: 40px;
        a {
            text-decoration: none;
        }
        .item {
            text-align: center;
            img {
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4 {
                margin-top: 12px;
                font-size: 26px;
                color: #666;
            }
        }
    }
</style>