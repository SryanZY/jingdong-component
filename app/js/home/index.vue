<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
        <Novice></Novice>
    </div>
</template>

<script>
import Header from "../public/header";
import Slider from "./hslider";
import Novice from "./novice";
export default {
  data () {
    return {
      title: "SryanZy"
    }
  },
  components: {
    Header,
    Slider,
    Novice
  }
}
</script>

<style lang="scss" module>
  
</style>
