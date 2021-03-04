"use strict";

function fiboEvenSum(n) {
  // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
  let fiboNum = [0, 1];
  let count = 0;
  console.log(fiboNum);
  for (let i = 0; i < n; i++) {
    // create new fibonacci number
    fiboNum.push(fiboNum[fiboNum.length - 1] + fiboNum[fiboNum.length - 2]);
    console.log(fiboNum);
    // test if fibonacci number is even
    if (fiboNum[fiboNum.length - 1] % 2 === 0) {
      console.log(fiboNum[fiboNum.length - 1]);
      count += Number(fiboNum[fiboNum.length - 1]);
      //console.log(count);
    }
  }

  return true;
}

fiboEvenSum(10);
