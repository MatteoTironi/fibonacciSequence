

/*
* Write a program in Javascript to Print Fibonacci Series using recursion.
* Test Data :
* Input number of terms for the Series (< 20) : 10
* Expected Output :
*                                                        
* 1  1  2  3  5  8  13  21  34  55  
*/

function fibonacciSequence(times, num = 0, res = []) {
    if (res === undefined || res === null || typeof res === "string") {
        return res = [];
    }
    else {
        if (times < 1) {
            return res;
        }
        else {
            if (res.length > 1) {
                res = [...res, res[res.length - 2] + res[res.length - 1]]
                fibonacciSequence(times - 1, num + res[res.length - 1], res);
            }
            else {
                res = [num, num + 1]
                fibonacciSequence(times - 1, num + 1, res);
            }
        }
        return res;
    }
}

fibonacciSequence(10)


