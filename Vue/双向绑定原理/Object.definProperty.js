const obj = {
  name: 'zs',
}
let initName = 'ls'
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  // value: 'zs',
  // writable: true,
  get: function() {
    console.log('get obj.value')
    return initName
  },
  set: function(val) {
    console.log('set obj.value---', val)
    initName = val
  },
})

console.log(obj.name)
obj.name = 'wu'
console.log(obj.name)
