<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头部-->
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
            <div class="title">
              <dv-decoration-11 class="title-text">{{
                title
              }}</dv-decoration-11>
              <!-- <span class="title-text"></span> -->
              <!-- <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              /> -->
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="['#568aea', '#000000']"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>
        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-before"></span>
              <span class="text">{{ subtitle[0] }}</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">{{ subtitle[1] }}</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">{{ subtitle[2] }}</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text">
                {{ timeInfo.dateYear }} {{ timeInfo.dateWeek }}
                {{ timeInfo.dateDay }}
              </span>
            </div>
          </div>
        </div>
        <div class="content-box">
          <div class="content-top">
            <div class="cloums">
              <div class="cloumchild">
                <div>
                  <dv-border-box-13><lefttop /></dv-border-box-13>
                </div>
                <div>
                  <dv-border-box-13><leftbottom /></dv-border-box-13>
                </div>
              </div>
            </div>
            <div class="cloum">
              <div>
                <center />
              </div>
            </div>
            <div class="cloumchild">
              <div>
                <dv-border-box-13><righttop /></dv-border-box-13>
              </div>
              <div>
                <dv-border-box-13><rightbottom /></dv-border-box-13>
              </div>
            </div>
          </div>
          <div class="cintent-bottom">
            <div class="cintent-bottom-left">
              <dv-border-box-13> <bottomleft /></dv-border-box-13>
            </div>
            <div class="cintent-bottom-right">
              <dv-border-box-13> <bottomright /></dv-border-box-13>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { formatTime } from "@/utils/index";
import { WEEK } from "@/constant/index";
import useDraw from "@/utils/useDraw";
import { title, subtitle, moduleInfo } from "@/constant/index";
import lefttop from "../lefttop/index.vue";
import center from "../center/index.vue";
import righttop from "../righttop/index.vue";
import rightbottom from "../rightbottom/index.vue";
import leftbottom from "../leftbottom/index.vue";
import bottomright from "../bottomright/index.vue";
import bottomleft from "../bottomleft/index.vue";
export default defineComponent({
  components: {
    lefttop,
    center,
    righttop,
    rightbottom,
    leftbottom,
    bottomright,
    bottomleft,
  },
  setup() {
    // * 加载标识
    const loading = ref<boolean>(true);
    // * 时间内容
    const timeInfo = reactive({
      setInterval: 0,
      dateDay: "",
      dateYear: "",
      dateWeek: "",
    });
    // * 适配处理
    const { appRef, calcRate, windowDraw, unWindowDraw } = useDraw();
    // 生命周期
    onMounted(() => {
      cancelLoading();
      handleTime();
      // todo 屏幕适应
      windowDraw();
      calcRate();
    });

    onBeforeUnmount(() => {
      unWindowDraw();
      clearInterval(timeInfo.setInterval);
    });

    // methods
    // todo 处理 loading 展示
    const cancelLoading = () => {
      setTimeout(() => {
        loading.value = false;
      }, 500);
    };

    // todo 处理时间监听
    const handleTime = () => {
      timeInfo.setInterval = setInterval(() => {
        const date = new Date();
        timeInfo.dateDay = formatTime(date, "HH: mm: ss");
        timeInfo.dateYear = formatTime(date, "yyyy-MM-dd");
        timeInfo.dateWeek = WEEK[date.getDay()];
      }, 1000);
    };

    // return
    return {
      loading,
      timeInfo,
      appRef,
      title,
      subtitle,
      moduleInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/index.scss";
</style>
