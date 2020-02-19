module.exports = function reverse (n) {
  let arr = [];
  arr = n.toString().split('').reverse();
  let num = arr.join('').replace(/\D+/g,"");
  if (num < 1) {
      return num * -1;
  } else return num;  
}