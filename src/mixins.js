/**
 * 获取title
 * @param {String} vm VueComponent实例
 * @returns $route.meata.title
 */
const getTitle = (vm) => {
  const { title } = vm.$options
  if (title) {
    return typeof title === 'function' ? title.call(vm) : title
  } else {
    return vm.$route?.meta?.title || ''
  }
}

const globalMixin = {
  mounted() {
    // 浏览器title动态修改
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  },
}
export default globalMixin
