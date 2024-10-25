const number = document.getElementById("number");
const converBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToromanNumeral() {
  result.textContent = "";
  let num = number.value;
  console.log(num);

  if (num > 3999) {
    result.textContent = "Input a number less than or equal to 3999";
  } else if (num === 0) {
    result.textContent = "imput a number greater than or equal to 1";
  } else {
    for (let key in romanNumerals) {
      if (num === 0) {
        return;
      }
      while (num >= romanNumerals[key]) {
        result.textContent = result.textContent + key;
        num = num - romanNumerals[key];
      }
    }
  }
}

converBtn.addEventListener("click", convertToromanNumeral);
