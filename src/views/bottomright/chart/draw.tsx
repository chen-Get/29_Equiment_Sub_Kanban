import { defineComponent, watch, ref } from "vue";
import * as echarts from "echarts";
// 声明类型
const PropsType = {
  cdata: {
    type: Object,
    require: true,
  },
} as const;

// 定义主体
export default defineComponent({
  props: PropsType,
  setup(props) {
    // 配置项
    // 定义 ref
    const chartRef = ref();
    // 配置项
    let options = {};

    // 监听
    watch(
      () => props.cdata,
      (val: any) => {
        options = {
          //   tooltip: {
          //     show: true,
          //     trigger: "axis",
          //     backgroundColor: "rgba(255,255,255,0.1)",
          //     axisPointer: {
          //       type: "shadow",
          //       label: {
          //         show: true,
          //         backgroundColor: "#7B7DDC",
          //       },
          //     },
          //   },
          legend: {
            show: false,
          },
          grid: {
            x: "8%",
            width: "88%",
            top: "5%",
            bottom: "25%",
          },
          xAxis: {
            data: val.category,
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
              },
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: [
            {
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                },
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
          ],
          dataZoom: [
            {
              type: "inside",
            },
          ],
          series: [
            {
              name: "已贯通",
              type: "bar",
              barWidth: 15,
              itemStyle: {
                normal: {
                  //   barBorderRadius: 5,
                  color: new echarts.graphic.LinearGradient(1, 1, 0.5, 0, [
                    { offset: 0, color: "#7dc9cb" },
                    { offset: 0.5, color: "#c59876" },
                    { offset: 1, color: "#d38c6a" },
                  ]),
                },
              },
              data: val.rateData,
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
      const height = "310px";
      const width = "100%";

      return (
        <div>
          <echart options={options} height={height} width={width} />
        </div>
      );
    };
  },
});
