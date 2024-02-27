//SLIDE WINDOW PATTERN

/* https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1 */
/* https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66 /*

/* Slide Window Patter. Types: 
    *** Fast/Slow:
            Bit Flip, Minimun Window Substring, Consecutive Subarray Sum
    *** Fast/Catch-up
            Max Consecutive Sum, Buy/Sell Stocks
    *** Fast/Trailing
            House Robber:
            https://leetcode.com/problems/house-robber/description/?source=post_page-----28d67601a66--------------------------------
    *** Front/Back: One point from the front and the other from de back
            Rainwater, Sorted Two Sum
*/


/* Retornar la suma máxima de subarrays tamaño = num dentro de arr de integers */
function sumMaxArr ( arr, num ){
    let sumMax = 0;
    let tempSumMax = 0;
    let windowSize = num;
    /*
    for (let i = 0; i < windowSize; i++){
        sumMax += arr[i];
    };
    */
    sumMax = arr.slice(0, num)
                    .reduce((a,b) => {
                        return a + b;
                    }, 0);
    for (let j = windowSize; j < arr.length; j++){
        tempSumMax = arr[windowSize] + sumMax - arr[j - windowSize];
        sumMax = Math.max(tempSumMax, sumMax);
    };
    return sumMax;
};

//let arrTest = [1,2,3,6,10,12,2,5,24,3,8,11,3,5,6,7,1,24,8,5]
//let resultSumMaxArr = sumMaxArr(arrTest, 3);
//console.log(resultSumMaxArr);


/* COUNT OCCURRENCES OF ANAGRAM */
/* Contar el número de veces que ocurre un anagrama en un texto */
function countAnagram (text, anagram){
    let count = 0;
    let windowSize = anagram.length;
    let textSize = text.length;
    for( let i = windowSize; i < textSize+1; i++){
        let temp = text.slice(i-windowSize, i)
        if ( temp === anagram ) count++
    }   
    return count;
};
//console.log('Result', countAnagram('anagramana', 'ana'))

/* DIFFERENCE BETWEEN THE MAXIMUM AND MINIMUM AVERAGE OF ALL K-LENGTH CONTINUOUS SUBARRAYS */
function getMinMaxDiff(arr, k) {
    let sum = arr
                    .slice(0, k)
                    .reduce((a,b) => a + b);
    let avg = sum / k;
    let maxAvg = avg;
    let minAvg = avg;
    for ( let i = k; i < arr.length; i++){
        let tempSum = sum - arr[i-k] + arr[i];
        let tempAvg = tempSum / k;
        maxAvg = Math.max(maxAvg, tempAvg);
        minAvg = Math.min(minAvg, tempAvg);
        sum = tempSum
    }
        return (maxAvg - minAvg);
};

//console.log(getMinMaxDiff([1,2,3,5,7,1,1,4,56,2,2,44,32], 3));
//console.log(getMinMaxDiff([3, 8, 9, 15], 2));

/* FIND THE LONGEST SUBSTRING OF A STRING CONTAINING ‘K’ DISTINCT CHARACTERS */
function defLongest(s, k) {
    let count = 0;
    for ( i = k; i < s.length; i++){
        let temp = s.slice(i-k, i);
        console.log(temp)
    };
};
//defLongest('abcbdbdbbdcdabd', 3)


/* FIND MINIMUM SUM SUBARRAY OF SIZE K */
function getMinSum (arr, k){

    let sum = arr.slice(0,k)
                .reduce((a,b) => a + b);
    let minSum = sum;

    for ( let i = k; i < arr.length; i ++){
        let temp = sum - arr[i-k] + arr[k];
        minSum = Math.min(minSum, temp);
        sum = temp;
    }
    return minSum;
};

//console.log( getMinSum([10,4,2,5,6,3,8,1], 3));


/* MINIMUN WINDOW SUBSTRING */

function minimunWindowSubstring (str, target) {

    let letterSeen = {};
    let letterNeeded = {};
    let leteersMissing = 0;

    for(let i = 0; i < target.length; i++){
        if ( target[i] in letterNeeded){
            letterNeeded[target[i]] += 1;
        }else{
            letterNeeded[target[i]] = 1;
            letterSeen[target[i]] = 0;
            leteersMissing  += 1;
        }
    };

    // defino las letras que encuentro; las letras que necesito; un counter
    //console.log( letterSeen, letterNeeded, leteersMissing);

    let fast = 0;
    let slow = 0;
    let result = [-Infinity, Infinity]; 

    for( fast; fast < str.length; fast++){
        if ( str[fast] in letterNeeded ){
            letterSeen[str[fast]] += 1;
            if ( letterSeen[str[fast]] === letterNeeded[str[fast]] ){
                leteersMissing -= 1;
            }
        };
        while ( leteersMissing === 0 ){
            if ( fast - slow < result[1] - result[0] ){
                result[0] = slow;
                result[1] = fast;
            }
            if( str[slow] in letterNeeded ){
                letterSeen[str[slow]] -= 1;
                if( letterSeen[str[slow]] < letterNeeded[str[slow]]) {
                    leteersMissing += 1;
                }
            }
            slow ++;
        }
    };
    return result[0] === -Infinity ? "" : str.slice(result[0], result[1] +1);
};


//console.log(minimunWindowSubstring('ADOBECODEBANC', 'ABC'));




function minimun (str, target){
    let count = 0;
    let neededLetters = {};
    let seenLetters = {};
    for ( key of target ){
        if ( neededLetters[key] ){
            neededLetters[key] += 1 ;
        }else{
            neededLetters[key] = 1;
            seenLetters[key] = 0;
            count ++;
        }
    }
    let fast = 0;
    let slow = 0;
    let result = [-Infinity, Infinity];
    for ( fast ; fast < str.length; fast++){
        let char = str[fast];
        if ( char in  neededLetters ){
            seenLetters[char] += 1;
            if ( seenLetters[char] === neededLetters[char] ){
                console.log(seenLetters[char], neededLetters[char])
                count -= 1;
            };
        }
        while ( count === 0 ){
            if ( fast - slow < result[1] -result[0] ){
                result[0] = slow;
                result[1] = fast;
            }
            if ( str[slow] in  neededLetters ){
                seenLetters[str[slow]] -= 1;
                if ( seenLetters[str[slow]] < neededLetters[str[slow]] ){
                    count ++
                }
            }
            slow ++
        }
    };
    return result[0] === -Infinity ? "" : str.slice(result[0], result[1]+1);
};


//console.log( minimun('a', 'aa') );
