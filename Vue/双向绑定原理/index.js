/* eslint-disable */
/**
 * dep数组用于通知
 * subs: subs数组，存储订阅者
 * notify(): 通知订阅者数据发生改变
 * addSub(): 添加观察者到数组
 */
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  // 通知每个订阅者更新
  notify() {
    this.subs.forEach((item) => {
      item.update()
    })
  }
}
let deep = new Dep()
/**
 * 观察者：负责监听数据变化，将每个观察者存入Dep数组中
 */
class Observer {
  constructor(data) {
    this.dep = new Dep()
    this.observerAll(data)
  }
  // 监听一个值
  observer(data, key, value) {
    this.observerAll(value)
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      // 使用箭头函数，avoid this changed
      get: () => {
        console.log(this.dep.subs)
        // 将订阅者存入数组
        if (Dep.target) {
          this.dep.addSub(Dep.target)
        }
        console.log('get ' + value)
        return value
      },
      set: (newValue) => {
        console.log('set ' + newValue)
        value = newValue
        // 数据变化，通知订阅者
        this.dep.notify()
      },
    })
  }
  // 递归监听对象
  observerAll(data) {
    if (Object.prototype.toString.call(data) !== '[object Object]') {
      return
    }
    Object.keys(data).forEach((key) => {
      this.observer(data, key, data[key])
    })
  }
}
/**
 * Watcher订阅者
 * vm: 监听的对象
 * exp: 监听的属性名
 * cb: 数据改变时执行的回调函数 主要用于更新视图
 */
/* eslint-disable */
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
    // 旧值 !== 新值 value发生变化，调用cb
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
