/* eslint-disable */
/**
 * dep数组用于通知
 * subs: subs数组，存储订阅者
 * notify(): 通知订阅者数据发生改变
 * addSub(): 添加订阅者到数组
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
/**
 * 订阅者：监听数据变化，将每个订阅者存入Dep数组中
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
      get() {
        // 将订阅者存入数组
        if (Dep.target) {
          this.dep.addSub(Dep.target)
        }
        console.log('get ' + value)
        return value
      },
      set(newValue) {
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

module.exports = {
  Dep,
  Observer,
}
// let obj = {
//   name: 'zs',
//   age: 18,
//   sex: 1,
//   m: { name: 'ls' },
// }

// new Observer(obj)
// console.log(obj.m.name)
// obj.age = 20
// console.log(obj.age)
