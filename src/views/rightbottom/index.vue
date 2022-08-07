<template>
  <div class="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">生产作业计划</span>
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
      header: ["产品名称", "产品型号", "开始时间", "结束时间", "持续时间"],
      data: [
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
        ["组件1", "dev-1", "2022-4-20 11:31", "2022-4-20 11:35", "4"],
      ],
      rowNum: 5, //表格行数
      headerHeight: 35,
      headerBGC: "#0f1325", //表头
      oddRowBGC: "#0f1325", //奇数行
      evenRowBGC: "#171c33", //偶数行
      // index: true,
      columnWidth: [100, 100, 200, 200, 100],
      align: ["center", "center", "center", "center", "center"],
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