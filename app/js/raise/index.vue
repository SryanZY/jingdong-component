<template lang="html">
    <div>
        <div :class="$style.container">
          <Header></Header>
          <Slider></Slider>
          <Daily></Daily>
          <Ins></Ins>
          <MoreMOney></MoreMOney>
          <Footer></Footer>
          <Navbar></Navbar>
        </div>
    </div>
</template>

<script>
import Header from "../public/header";
import Slider from "./rslider";
import Daily from "./daily";
import Ins from "./ins";
import MoreMOney from "./moreMoney";
import Footer from "../public/footer";
import Navbar from "../public/navbar";
export default {
  data () {
    return {
      title: "SryanZy"
    }
  },
  components: {
    Header,
    Slider,
    Footer,
    Navbar,
    Daily,
    Ins,
    MoreMOney
  }
}
</script>

<style lang="scss" module>
  .container {
    max-width: 768px;
    width: 100%;
    margin: 0 auto;
  }
</style>
