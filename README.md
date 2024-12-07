# Euclidean Algorithm with Zero Input Bug

This repository demonstrates a common error in recursive functions: not handling edge cases properly. The `foo` function implements the Euclidean algorithm to find the GCD of two numbers.  It works correctly for most inputs, but fails when either input is zero, leading to infinite recursion and a stack overflow.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

## How to reproduce

1. Clone the repository.
2. Open `bug.js` in a JavaScript environment (like a browser's console or Node.js).
3. Run the code.  Observe that the call `foo(10, 0)` results in a stack overflow error.

## Solution

The solution is to add a base case to handle zero inputs.  This is demonstrated in `bugSolution.js`.