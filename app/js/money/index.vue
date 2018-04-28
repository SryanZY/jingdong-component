<template lang="html">
    <div>
        <div :class="$style.container">
          <Header></Header>
          <Slider></Slider>
          <Advertisement></Advertisement>
          <FinanceSelect></FinanceSelect>
          <AdvertisementB></AdvertisementB>
          <Finance></Finance>
          <AdvertisementC></AdvertisementC>
          <Footer></Footer>
          <Navbar></Navbar>
        </div>
    </div>
</template>

<script>
import Header from "../public/header";
import Slider from "./mslider";
import Footer from "../public/footer";
import Navbar from "../public/navbar";
import Advertisement from "./advertisement";
import AdvertisementB from "./advertisementB";
import AdvertisementC from "./advertisementC";
import FinanceSelect from "./finance-select";
import Finance from "./finance";
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
    Advertisement,
    FinanceSelect,
    AdvertisementB,
    Finance,
    AdvertisementC
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
