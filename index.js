//Q1
function reverseNumber(x) {
    let reversed = x.toString().split('').reverse().join('');
    return parseInt(reversed);
}
let x = 532443;
console.log(reverseNumber(x));  // Output: 344235

///////////
//Q2
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  //////////////
  //Q3
  


  ////////////
  //Q4
  function insertDashes(number) {
    let str = number.toString();
    let result = str[0];  
        for (let i = 1; i < str.length; i++) {
        if (parseInt(str[i]) % 2 === 0 && parseInt(str[i - 1]) % 2 === 0) {
            result += '-';  
        }
        result += str[i]; 
    }
    
    return result;
}

let input = '025468';
let output = insertDashes(input);
console.log(output);  // output: '0-254-6-8'
/////////////
//Q5
function AgeChecker(age) {
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}
console.log(AgeChecker(20));  // Output: The user is Adult
console.log(AgeChecker(16));  // Output: The user is Minor

