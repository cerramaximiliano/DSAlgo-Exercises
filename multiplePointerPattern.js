function sumZero (nums) {
    let left = 0;
    let right = nums.length -1;
    while ( left < right ){
        let sum = nums[left] + nums[right]
        if ( sum === 0 ){
            return [nums[left], nums[right]];
        }else if ( sum > 0 ){
            right --
        }else {
            left ++
        };
    }

};

//console.log(sumZero([-3,-2,-1,0,1,2,5]));


function countUniqueValues(nums){
      let left = 0;
      let right = 1;
      if (nums.length === 0) return 0
      while (right < nums.length){
          if ( nums[left] === nums[right]){
              right ++
          }else if ( nums[left] !== nums[right] ){
              left ++
              nums[left] = nums[right]
              right++
          }
    }
    return left+1;
};

  //console.log(countUniqueValues([1,1,1,1,1,1]));


  /* COUNT DISTINCT ABSOLUTE VALUES IN A SORTED ARRAY */
function getCountDistinct ( arr ){
    let countNegatives = 0;
    let left = 0;
    let right = 1;
    if ( arr.length === 0 ) return 0;
    while ( right < arr.length ){
        if( arr[left] < 0 ) {
            countNegatives++;
            left++;
            right++;
        }else if ( arr[left] == arr[right] ){
            left++;
            right++;
        }else{
            left++
            arr[left] = arr[right]
            right++
        }
    };
    return left - countNegatives
};  
// console.log(getCountDistinct([-1,-1,0,1,1,2,3,4]));


// 56. Merge Intervals - LeetCode
// https://leetcode.com/problems/merge-intervals/
var merge = function(intervals) {
    let sorted = intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    let i = 0;
    let j = 1;
        while ( j < intervals.length ){
            if ( intervals[i][1] >= intervals[j][0]  ){
                intervals[j][0] = intervals[i][0];
                let maxEle = Math.max( intervals[i][1], intervals[j][1] )
                intervals[j][1] = maxEle;
                intervals.splice(i, 1);
            }else{
                i ++;
                j ++;
            }
        }
    return intervals;
};
//console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // Output: [[1,6],[8,10],[15,18]]


//57. Insert Interval - LeetCode
// https://leetcode.com/problems/insert-interval/description/
var insert = function(intervals, newInterval) {
    let intervalInitial = Infinity;
    let intervalFinal = -Infinity;
    let removeInterval = [];

    if ( intervals.length === 0 ) return  [newInterval];

    for( let i = 0; i < intervals.length; i++ ){
        if ( intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[1] ){
                break;
        }else {
            if ( intervals[i][1] >= newInterval[0] ){
                intervalInitial = Math.min(intervalInitial, i)
            };
            if ( intervals[i][0] >= newInterval[0] && intervals[i][1] <= newInterval[1]  ){
                removeInterval.push( i )
            };
            if ( intervals[i][0] <= newInterval[1] ){
                intervalFinal = Math.max(intervalFinal, i)
            };
        }
    };
    console.log(intervalInitial, intervalFinal, removeInterval);
    //console.log(intervalInitial == intervalFinal == removeInterval[0]);
    if ( intervalInitial === intervalFinal ){
        intervals[intervalInitial][0] = Math.min( intervals[intervalInitial][0], newInterval[0] );
        intervals[intervalInitial][1] = Math.max( intervals[intervalInitial][1], newInterval[1] );
    }else {
        console.log(false);
        if ( intervalInitial !== Infinity && intervalFinal !== -Infinity ){
            intervals[intervalInitial][0] = Math.min(intervals[intervalInitial][0], newInterval[0]);
            intervals[intervalInitial][1] = Math.max(newInterval[1], intervals[intervalFinal][1]);
            intervals = intervals.slice(0, intervalInitial+1).concat(intervals.slice( intervalFinal+1, intervals.length ));
        }else{
            //console.log(intervalFinal > intervalInitial)
            //console.log(intervalFinal < intervalInitial)
            //console.log(intervalInitial < intervalFinal)
        }
    };
    return intervals
};

//console.log( insert([[1,5]], [2,3]) );
//console.log( insert([[1,5]], [1,7]) );
//console.log( insert([[1,2],[4,9],[12,16]], [3,10]) );
//console.log( insert([[1,3],[6,9]], [2,5]) );
//console.log( insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) );
console.log( insert([[1,5],[9,12]], [6,8]) )
//console.log( insert([[6,8]], [1,5]) )