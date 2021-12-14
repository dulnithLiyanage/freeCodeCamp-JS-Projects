function palindrome(str) {
  let arr = str.match(/[A-Za-z0-9]/g);
  console.log(arr);
  let newStr = arr.join("").toLowerCase();
  let reverseStr = arr.reverse().join("").toLowerCase();
  return newStr === reverseStr;
}

console.log(palindrome("My age is 0, 0 si ega ym"));
