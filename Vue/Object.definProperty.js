const obj = {
  name: 'zs',
}
Object.defineProperty(obj, 'name', {
  configurable: true,
  enumerable: true,
  // value: 'zs',
  // writable: true,
  get: function() {
    console.log('get obj.value')
  },
  set: function(val) {
    console.log('set obj.value---', val)
  },
})

console.log(obj.name)
obj.name = 'ls'
console.log(obj.name)
