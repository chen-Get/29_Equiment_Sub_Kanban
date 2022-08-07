<template>
  <div class="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">设备异常信息</span>
        </div>
      </div>
      <div class="d-flex mt-1 jc-center body-box">
        <dv-scroll-board class="dv-scr-board" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const config = reactive({
      header: ["时间", "异常说明", "持续时间", "是否闭环"],
      data: [
        ["2022-4-20 11:33", "异常1", "5", "是"],
        ["2022-4-20 11:33", "异常2", "5", "是"],
        ["2022-4-20 11:33", "异常3", "5", "是"],
        ["2022-4-20 11:33", "异常4", "5", "是"],
        ["2022-4-20 11:33", "异常5", "5", "是"],
        ["2022-4-20 11:33", "异常6", "5", "是"],
        ["2022-4-20 11:33", "异常7", "5", "是"],
      ],
      rowNum: 5, //表格行数
      headerHeight: 35,
      headerBGC: "#0f1325", //表头
      oddRowBGC: "#0f1325", //奇数行
      evenRowBGC: "#171c33", //偶数行
      // index: true,
      columnWidth: [200, 100, 100, 100],
      align: ["center", "center", "center", "center"],
    });
    return { config };
  },
});
</script>

<style lang="scss" scoped>
$box-height: 310px;
$box-width: 100%;
.centerRight2 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 80px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 100%;
      height: 245px;
    }
  }
}
</style>