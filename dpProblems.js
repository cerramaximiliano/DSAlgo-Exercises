// FIBONACCI
// Recursion
const fib = (n) => {
    if( n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};
//console.log(fib(7))
//console.log(fib(20))
//console.log(fib(10))
//console.log(fib(8))

// Memoization
const fibMemoizaition = (n, memo = {}) => {
    if ( n in memo ) return memo[n];
    if ( n <= 2 ) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};
//console.log(fibMemoizaition(30))

// GRID TRAVELER
const gridRecursion = (m,n) => {
    if ( m === 0 || n === 0 ) return 0;
    if ( m === 1 && n === 1 ) return 1;
    return gridRecursion(m-1, n) + gridRecursion(m, n-1);
};
//console.log(gridRecursion(3,3));

const gridTraveler = (m, n, memo = {} ) => {
    const key = `${m},${n}`
    if ( key in memo ) return memo
    if ( m === 1 && n === 1) return 1;
    if ( m === 0 || n === 0) return 0;
    memo[key] = gridTraveler( m - 1, n ) + gridTraveler( m, n - 1 );
    return memo[key];
};

//console.log(gridTraveler(3,3))

// CAN SUM
const canSum = (targetSum, numbers, memo = {}) => {

    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let number of numbers){
        const temp = targetSum - number;
        if ( canSum(temp, numbers) === true ){
            return true
        }
    }
    return false
};

const canSumMemoization = (targetSum, numbers, memo = {}) => {
    if ( memo[targetSum]) return memo[targetSum]
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let number of numbers){
        const temp = targetSum - number;
        if ( canSum(temp, numbers, memo) === true ){
            memo[targetSum] = true
            return true
        }
    };
    memo[targetSum] = false;
    return false
};
//console.log(canSum(7,[2,2,8,4]));
//console.log(canSum(8,[2,2]));
//console.log(canSumMemoization(8,[2,2,3]));


const howSum = (targetSum, numbers) => {
    if( targetSum === 0 ) return [];
    if ( targetSum < 0 ) return null;

    for( let num of numbers ){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if ( remainderResult !== null ){
            return [...remainderResult, num ];
        }
    }
    return null
};

//console.log(howSum(7, [3,2,2]));
//console.log(howSum(7, [5,3,4,7]));
//console.log(howSum(3, [10,2,2]));


const howSumMemoization = (targetSum, numbers, memo = {}) => {

    if ( memo[targetSum] ) return memo[targetSum];
    if ( targetSum === 0 ) return [];
    if ( targetSum < 0 ) return null;

    for( let num of numbers ){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if ( remainderResult !== null ){
            memo[targetSum] = [...remainderResult, num ];
            return memo[targetSum];
        }
    };
    memo[targetSum] = null;
    return null;

};

//console.log(howSum([7, [3,2,5]]));

const bestSum = (targetSum, numbers) => {
    if ( targetSum === 0 ) return [];
    if ( targetSum < 0 ) return null;
    let shortestCombination = null;

    for( let number of numbers ){
        const remainder = targetSum - number;
        const remainderResult = bestSum(remainder, numbers);
        if ( remainderResult !== null ){
            const combination = [...remainderResult, number];
            if( shortestCombination === null || combination.length < shortestCombination.length ){
                shortestCombination = combination;
            }
        }
    };

    return shortestCombination;
};


//console.log( bestSum(7, [5,3,5,2,4,7]))

const bestSumMemoization = (targetSum, numbers, memo = {}) => {
    if (  targetSum in memo ) return memo[targetSum];
    if ( targetSum === 0 ) return [];
    if ( targetSum < 0 ) return null;
    let shortestCombination = null;

    for( let number of numbers ){
        const remainder = targetSum - number;
        const remainderResult = bestSum(remainder, numbers);
        if ( remainderResult !== null ){
            const combination = [...remainderResult, number];
            if( shortestCombination === null || combination.length < shortestCombination.length ){
                shortestCombination = combination;
            }
        }
    };

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

//console.log( bestSumMemoization(7, [5,3,5,2,4,7]))




var countSubstrings = function(s, memo = {}) {
    if ( s === '' ) return 0;
    let result = 0;
    function isPalindrome( sub )  {
        let reverse = sub.split("").reverse().join("");
        if ( sub === reverse ) return true;
        return false;
    }

    function helper (index, last) {
        if (index >= s.length) return;
        for ( let i = last; last < s.length+1; last++ ){
            let sub = s.slice(index, last);
            if ( isPalindrome(sub) ){
                result ++
            }
        }
        helper(index+1, index+2)
        
    };
    helper(0,1);
    return result
};

console.log(countSubstrings('ada'));