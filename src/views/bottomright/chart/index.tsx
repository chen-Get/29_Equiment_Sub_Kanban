import { defineComponent, reactive, onMounted } from "vue";
import Draw from "./draw";

export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      category: [
        "02-20",
        "02-21",
        "02-22",
        "02-23",
        "02-24",
        "02-24",
        "02-24",
        "02-24",
        "02-24",
        "02-24",
        "02-24",
        "02-24",
      ],
      lineData: [100, 120, 123, 125, 66, 77, 50, 129, 60, 129, 80, 90, 66],
      rateData: [],
    });

    // methods
    const setData = () => {
      for (let i = 0; i < cdata.lineData.length; i++) {
        const rate = cdata.lineData[i];
        cdata.rateData.push(rate.toFixed(0));
      }
    };

    // 生命周期
    onMounted(() => {
      setData();
    });

    return () => {
      return (
        <div>
          <Draw cdata={cdata} />
        </div>
      );
    };
  },
});
