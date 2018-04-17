<template lang="html">
    <div>
        <Header></Header>
        <Slider></Slider>
    </div>
</template>

<script>
import Header from "../public/header";
import Slider from "./hslider";
export default {
  data () {
    return {
      title: "SryanZy"
    }
  },
  components: {
    Header,
    Slider
  }
}
</script>

<style lang="scss" module>
  
</style>
