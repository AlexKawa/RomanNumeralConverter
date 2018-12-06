/*
 * Convert integer parameter to a roman numeral
 */
function convertIntToRoman(intToBeConverted) {
  const romanNumDict = {
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
    I: 1
  }

  let intForCalc = intToBeConverted
  let result = ""

  // Loop through int and dictionary
  while (intForCalc != 0) {
    for (var numeral in romanNumDict) {
      // Find the first/greatest positive divisor
      if ((intForCalc / romanNumDict[numeral]) >= 1) {
        // Add roman numeral to result and substract value from rest of int
        result += numeral
        intForCalc -= romanNumDict[numeral]
        break
      }
    }
  }

  return result
}