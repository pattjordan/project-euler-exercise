"use strict";
/*
Problem 3: Largest prime factorPassed

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/
function largestPrimeFactor(number) {
  let primeFactors = [];
  let primeCandidate = 2; // Start with smallest prime number (2)

  // algorithm works for positive numbers
  while (number > 1) {
    // If number divisible with candidate; append to list
    while (number % primeCandidate === 0) {
      primeFactors.push(primeCandidate);
      number /= primeCandidate;
    }
    primeCandidate += 1; // Just increase by 1; all multiple of primeCandidate will not evaluate anyway
    // ->  e.g. if number is divided by 2, multiples like 4/6/8/... are not possible anymore
  }
  return primeFactors[primeFactors.length - 1];
}

largestPrimeFactor(13195);
