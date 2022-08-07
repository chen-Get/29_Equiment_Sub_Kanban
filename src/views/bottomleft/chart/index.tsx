import { defineComponent, reactive, onMounted } from "vue";
import Draw from "./draw";
export default defineComponent({
  components: {
    Draw,
  },
  setup() {
    const cdata = reactive({
      date: [],
      data: [
        42, 58, 32, 11, 98, 56, 99, 45, 65, 78, 12, 20, 65, 99, 75, 12, 15, 88,
      ],
    });

    //methods
    // const setData = () => {
    //   for (let i = 1; i < 100; i++) {
    //     cdata.data.push(i);
    //   }
    // };

    // 生命周期
    onMounted(() => {
      // setData();
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
