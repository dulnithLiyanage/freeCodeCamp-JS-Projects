const numerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

function convertToRoman(num) {
  let str = num.toString();
  let arr = str.split("");
  let addZero = "";
  let romanNumArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += addZero; //? Used to split numbers as 0,10,100,1000 etc
    addZero += "0"; //? Increases the number of 0s
    let romanNumDigits = numerals[arr[i]];
    romanNumArr.push(romanNumDigits);
  }

  romanNumArr.reverse();

  let romanNumeralsStr = "";

  for (let i in romanNumArr) {
    if (romanNumArr[i] !== undefined) {
      //? Since there is no value for "0" it returns undefined. This makes sure that undefined does not return
      romanNumeralsStr += romanNumArr[i];
    }
  }

  return romanNumeralsStr;
}

const userNum = 410;
console.log(convertToRoman(userNum));
