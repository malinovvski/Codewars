
/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

//solution

function descendingOrder(n){
    let strNumber = String(n);
    let strNumberArr = strNumber.split("");
    let strArrSorted = strNumberArr.sort(function(a,b){
      return a-b;
      
    });
    
    strArrSorted = strArrSorted.reverse();
    strNumber =  strArrSorted.join("");
    
    return parseInt(strNumber)
  }