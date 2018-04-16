<template lang="html">
    <div>
        <h1 :class="$style.home">Home</h1>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: "SryanZy"
    }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home {
    color: red;
    font-size: 80px;
  }
</style>
