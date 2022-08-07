<template>
  <div class="lefttop">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon class="iconfont icon-layer-group"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">OEE统计</span>
          <dv-decoration-1 class="dv-dec-1" />
        </div>
      </div>
      <div class="contant">
        <div class="contant-body">
          <div class="contantCloumtop"><span>日开动率</span></div>
          <div class="contantCloum"><span>100.00%</span></div>
          <div class="contantCloumbottom"><span>OEE</span></div>
          <div class="contantCloum"><span class="spanbottom">90%</span></div>
        </div>
        <div class="contant-body">
          <div class="contantCloumtop"><span>周开动率</span></div>
          <div class="contantCloum"><span>90.00%</span></div>
          <div class="contantCloumbottom"><span>OEE</span></div>
          <div class="contantCloum"><span class="spanbottom">80%</span></div>
        </div>
        <div class="contant-body">
          <div class="contantCloumtop"><span>月开动率</span></div>
          <div class="contantCloum"><span>90.00%</span></div>
          <div class="contantCloumbottom"><span>OEE</span></div>
          <div class="contantCloum"><span class="spanbottom">85%</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // 下层数据
    const titleDate = [
      {
        number: 1020,
        text: "今年累计任务建次数",
      },
      {
        number: 18,
        text: "本月累计任务次数",
      },
      {
        number: 4,
        text: "今日累计任务次数",
      },
      {
        number: 71,
        text: "今年失败任务次数",
      },
      {
        number: 949,
        text: "今年失败成功次数",
      },
      {
        number: 811,
        text: "今年达标任务个数",
      },
    ];

    return {
      titleDate,
    };
  },
});
</script>

<style lang="scss" scoped>
.lefttop {
  $box-width: 300px;
  $box-height: 310px;
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
  .contant {
    height: 260px;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    // margin-left: 20px;
  }
  .contant-body {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .contantCloum {
    margin-top: 20px;
    margin-left: 50px;
    width: 100px;
    height: 50px;
  }
  .contantCloumtop {
    margin-top: 30px;
    margin-left: 30px;
    span {
      font-size: 30px;
      color: #d8866a;
    }
  }
  .contantCloumbottom {
    margin-top: -20px;
    margin-left: 40px;
    span {
      font-size: 20px;
      color: #5ec7db;
    }
  }
  .spanbottom {
    margin-top: -10px;
    margin-left: 5px;
  }
}
</style>
