<template lang="html">
    <div>
        <div :class="$style.container">
          <Header></Header>
          <Slider></Slider>
          <Welfware></Welfware>
          <Service></Service>
          <Footer></Footer>
          <Navbar></Navbar>
        </div>
    </div>
</template>

<script>
import Header from "../public/header";
import Slider from "./bslider";
import Footer from "../public/footer";
import Navbar from "../public/navbar";
import Welfware from "./welfware";
import Service from "./service";
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
    Welfware,
    Service
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
