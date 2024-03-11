import { customRef } from 'vue'
// 自定义Ref：可设置延迟更新视图的响应式ref
export default function (value: string, delay: number) {
  // 使用Vue提供的customRef定义响应式数据
  let timer: number
  // track(跟踪)、trigger(触发)
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时调用get
      get() {
        console.log(value)
        // track()：追踪get返回值的变化
        track()
        return value
      },
      // msg被修改时调用set
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          console.log(value)
          value = newValue
          // trigger()：触发视图更新
          trigger()
        }, delay)
      },
    }
  })
  return { msg }
}
