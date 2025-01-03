//Q1
let number = 532443;
let array = [];
let number2 = number.toString();
for(let i = number2.length -1 ; i>=0 ; i--){
array.push(number2[i]);
}
console.log(array.join(''));

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
  let str = "orange";
let asciiCodes = [];
let result = '';
for (let i = 0; i < str.length; i++) {
    asciiCodes.push(str.charCodeAt(i));
}
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


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

