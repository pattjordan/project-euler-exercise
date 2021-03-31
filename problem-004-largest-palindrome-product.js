"use strict";
/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function largestPalindromeProduct(n) {
  if (n == 0) {
    return 0;
  } else {
    // Definition of possible digits
    const largestFactor = Math.pow(10, n) - 1;
    const smallestFactor = Math.pow(10, n - 1);
    let palindromes = [];

    for (let i = largestFactor; i > smallestFactor; i--) {
      for (let j = largestFactor; j > smallestFactor; j--) {
        let multiple = i * j;
        if (isPalindrome(multiple)) {
          palindromes.push(multiple);
        }
      }
    }
    return Math.max.apply(Math, palindromes); // Extract biggest palindrome from array
  }
}

function isPalindrome(num) {
  // Check if reversed number equals number
  return num.toString() === num.toString().split("").reverse().join("");
}

largestPalindromeProduct(3);
