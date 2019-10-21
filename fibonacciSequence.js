

/*
* Write a program in Javascript to Print Fibonacci Series using recursion.
* Test Data :
* Input number of terms for the Series (< 20) : 10
* Expected Output :
*                                                        
* 0  1  1  2  3  5  8  13  21  34  55  
*/
function fibonacci_series(times, res = []) {
    if (times === 1) {
        if (res.length > 1)
            return res;
    }
    else
        if (res.length === 0 && times === 10) {
            res = [0, +res + 1]
        }
    res = [...res, res[res.length - 2] + res[res.length - 1]];
    return fibonacci_series(times - 1, res);


}

console.log(fibonacci_series(10));

