// Slide Window

function maxSubarraySum(arr, target){
    let lastWindow = 0;
    let maxSum = 0;
    if ( arr.length < target ) return null;
    for ( let i = 0; i < target; i++ ){
        lastWindow += arr[i]
    };
    for ( let i = target; i < arr.length; i++ ){
        let newWindow = (lastWindow + arr[i]) - arr[i-target];
        maxSum = Math.max(maxSum, newWindow);
        lastWindow = newWindow;
    };
    return maxSum;
};
//console.log(maxSubarraySum([100,200,300,400], 2));
//console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));


function minSubArrayLen(arr, len ){
    let result = Infinity;

    for( let i = 0; i < arr.length; i++ ){
        let right = i+1;
        let sum = arr[i];
        if ( sum >= len ) return 1;
        while( right < arr.length ){
            sum += arr[right]
            if ( sum >= len ){
                result = Math.min(result, right - i + 1)
                break
            }else {
                right ++
            }
        }
    }
    return result === Infinity ? 0 : result;
};
/*
console.log('Result', minSubArrayLen([2,3,1,2,4,3], 7)); //2
console.log('Result', minSubArrayLen([2,1,6,5,4], 9)); // 2
console.log('Result', minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); //1
console.log('Result', minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log('Result', minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log('Result', minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log('Result', minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0
*/

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
      if ( str.length === 0 ) return 0
      let result = 1;
        for ( let i = 0; i < str.length; i++ ){
          let obj = {};
          let j = i +1;
          obj[str[i]] = 1;
          while ( j < str.length ){
              if ( !obj[str[j]] ) {
                  obj[str[j]] = 1
                  result = Math.max( result, j - i + 1  )
              }else {
                  break
              }
              j++
          }
           
        }
    return result
}
/*
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); //7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
*/
