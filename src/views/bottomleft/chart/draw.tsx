import { defineComponent, watch, ref } from "vue";
import * as echarts from "echarts";

// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    // 定义 ref
    const chartRef = ref();
    // 配置项
    let options = {};
    //监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            show: false,
            type: "category",
            boundaryGap: false,
            // data: val.date,
          },
          grid: {
            x: "8%",
            width: "88%",
            top: "5%",
            bottom: "25%",
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "100%"],
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
            scale: true,
            max: 100,
            axisLine: {
              show: false,
            },
          },
          series: [
            {
              type: "line",
              symbol: "none",
              smooth: false,
              // sampling: "lttb",
              itemStyle: {
                color: "rgb(37, 85, 127)",
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(37, 85, 127)",
                  },
                  {
                    offset: 1,
                    color: "rgb(37, 85, 127)",
                  },
                ]),
              },
              data: val.data,
            },
          ],
        };
        // 手动触发更新
        if (chartRef.value) {
          // 通过初始化参数打入数据
          chartRef.value.initChart(options);
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return () => {
      const height = "300px";
      const width = "100%";

      return (
        <div>
          <echart options={options} height={height} width={width} />
        </div>
      );
    };
  },
});
