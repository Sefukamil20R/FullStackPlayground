//Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function onlyEven(array1)
{
  let ans = []
  for (i = 0; i < array1.length ; i++)
  {
    if( Array.isArray(array1) && array1[i]%2==0)
    {
      ans.push(array1[i])
    }

  }
 console.log(ans)
}
let a = [10 , 10 ,5 , 2 , 1 , 4 , 3 , 7 , 10, 6 ]
onlyEven(a);
// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

function isok(dig) {
  if (dig.toString().length == 2) {
    var rev = 0;
    var temp = dig; 
    while (temp > 0) {
      var digits = temp % 10;
      rev = rev * 10 + digits;
      temp = Math.floor(temp / 10);
    }
    if (dig > rev) {
      console.log("OK");
    } else {
      console.log("Not OK");
    }
  } else {
    console.log("Enter a valid twodigit number.");
  }
}

let num = 72;
isok(num); // ok

num = 23;
isok(num); // notok

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
function findFactorial(number)
{
  if (typeof (number) === "number" && number >= 0)
  {
    var pro = 1
    for (i = number; i > 0 ; i--)
    {
      pro *= i
    }
    console.log(pro)


  }
  else {
    console.log("Enter a valid number.");
  }
}
let b = 5
findFactorial(b);
b = 6
findFactorial(b);
b = 0
findFactorial(b);
// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6
function ismeera(arr) {
  if( Array.isArray(arr) ){
  for (let i = 0; i < arr.length; i++) {
      let ele = arr[i] * 2;
      if (arr.indexOf(ele) !== -1 && arr.indexOf(ele) !== i) {
          console.log("I am not a Meera array");
          return; 
      }
  }
  console.log("I am a Meera array");
} 
else 
{
  console.log("Enetr a valid Array");
}
}


let c = [10, 4, 0, 5];
ismeera(c);

let d = [7, 4, 9];
ismeera(d);

let e = [1, -6, 4, -3];
ismeera(e);

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
function Dualarray(arr){
  if( Array.isArray(arr) ){

    let countarray = [];
    for (i =0;i<arr.length;i++){
        countarray[i] = 0;
    }
    for (i =0;i<arr.length;i++){
        countarray[arr[i]] += 1;
    }
    
    for(i = 0;i<countarray.length;i++){
        if(countarray[i]!==2 && countarray[i]!==0){
            return "Not a dual array"
        }
    }
    return "Dual array"
}
else 
{
  console.log("Enetr a valid Array");
}
}
console.log(Dualarray([1, 2, 1, 3, 3, 2]))
console.log(Dualarray([2, 5, 2, 5, 5]))
// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
function sectohr(sec){
    let hr = Math.floor(sec/3600);
    let minute = Math.floor((sec%3600)/60);
    let second = Math.floor(((sec%3600)%60))
    console.log(second)
    console.log(minute)
    console.log(hr);
    console.log(hr + ":" + minute + ":" + second)
}
sectohr(5025)

