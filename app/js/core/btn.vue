<template>
  <div :class="[btnClass, cname]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
        type: String,
        default: ""
    }
  },
  data () {
    return {
        btnClass: "btn" // btnClass是默认类名，允许传入一个cname的自定义类名
    };
  }
}

</script>
<style lang='scss'>
    @import "../../css/element.scss";
    .btn {
        @include btn;
    }
</style>