/* eslint-disable */
const { Dep } = require('./Observer')
/**
 * vm: 监听的对象
 * exp: 监听的属性名
 * cb: 数据改变时执行的回调函数
 */
class Watcher {
  constructor(vm, exp, cb) {
    this.vm = vm
    this.exp = exp
    this.cb = cb
    this.value = this.get()
  }
  update() {
    this.run()
  }
  run() {
    let oldValue = this.value
    if (oldValue !== this.vm[this.exp]) {
      this.value = this.vm[this.exp]
      this.cb(this.value)
    }
  }
  // 返回vm[exp]的值
  get() {
    Dep.target = this
    let value = this.vm[this.exp]
    Dep.target = null
    return value
  }
}
