async function queryMsg(val) {
  let res = await fn(val)
  return res
}
function fn(val) {
  return new Promise((resolve) => {
    resolve(val)
  })
}
module.exports = queryMsg
