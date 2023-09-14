import { useIntersectionObserver } from "@vueuse/core";

export default {
  mounted(el, binding) {
    // el 绑定的元素 img
    // binding.value 绑定的表达式值 图片url
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 进入视口区域
          el.src = binding.value
          stop()
        }
      }
    )
  }
}
