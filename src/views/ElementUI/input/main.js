async function queryMsg() {
  console.log(123)
  let res = await fn()
  return res
}
function fn() {
  return new Promise((resolve) => {
    resolve(123)
  })
}

export default queryMsg
