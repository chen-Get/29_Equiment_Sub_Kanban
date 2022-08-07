<template>
  <div class="centerRight2">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <i class="iconfont icon-vector" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">待加工产品信息</span>
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
      header: ["产品名称", "产品型号", "批次", "数量", "计划加工时间", "程序"],
      data: [
        ["组件1", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件2", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件3", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件4", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件5", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件6", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件7", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件8", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
        ["组件9", "dev-1", "2022", "100", "2022-04-20 11:28", "PML"],
      ],
      rowNum: 5, //表格行数
      headerHeight: 35,
      headerBGC: "#0f1325", //表头
      oddRowBGC: "#0f1325", //奇数行
      evenRowBGC: "#171c33", //偶数行
      // index: true,
      columnWidth: [100, 100, 100, 100, 200, 100],
      align: ["center"],
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