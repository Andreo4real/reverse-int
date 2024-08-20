module.exports = function reverse (n) {
  let a = Math.abs(n)
  let arr = a.toString().split('');
  let b = arr.reverse().join('');
  
  return b
}
