// Decreasing Numbers with Target Sum
// Make a function that receives two arguments:

// the sum of digits value

// the desired number of digits for the numbers

// The function should output an array with all possible numbers whose digits add up to the sum provided and the digits are in decreasing order. Have a look at the example to understand better.
// findAll(10, 3); // should return ['811', '721','631', '622','541', '532','442', '433'] 
function findAll(sum,n){
  let result=[];
  let lowerLimit='1';
  for(let i=n;i>1;i--){
    lowerLimit+='0';
  }
  let upperLimit='9';
  for(let i=n;i>1;i--){
    upperLimit+='9';
  }
  for(let i=upperLimit;i>=lowerLimit;i--){
    if(sumOfDigits(i)==sum.toString() && digitsInDecreasingOrder(i)){
      result.push(i);
    }
  }
  return result;
}
function sumOfDigits(number){
  let num=number.toString();
  let sum=0;
  for(let i=0;i<num.length;i++){
    sum+=parseInt(num[i]);
  }
  return sum;
}
function digitsInDecreasingOrder(number){
   for(let i=0;i<number.length-1;i++){
    if(number[i+1]>number[i]){
      return false;
    }
  }
  return true;
 
}
findAll(10,3);