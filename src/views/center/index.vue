<template>
  <div class="lefttop">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon class="iconfont icon-layer-group"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备基础信息</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { title, subtitle, moduleInfo } from "@/views/lefttop/inde";

export default defineComponent({
  setup() {
    return {
      title,
      subtitle,
      moduleInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
.lefttop {
  $box-width: 300px;
  $box-height: 620px;
  padding: 14px;
  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }
}
</style>