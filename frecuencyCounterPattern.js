function sameFrequency(num1, num2){
    let num1String = num1.toString();
    let num2String = num2.toString();
    let object1 = {};
    let object2 = {};
    let result = true;
        if ( num1String.length !== num2String.length ){
            return false;
        }
        for (var i = 0; i < num1String.length; i++) {
            object1[num1String[i]] = (object1[num1String[i]] || 0 ) +1;
        };
        for (var i = 0; i < num2String.length; i++) {
            object2[num2String[i]] = (object2[num2String[i]] || 0 ) +1;
        };
        for( key in object1){
            if ( object1[key] !== object2[key] ){
                result = false
            }
        };
        return result
};

  
  console.log(sameFrequency(1235,1235))



  var majorityElement = function(nums) {
    let object = {};
    let count = 0;
    let max = '';

    for (let i = 0; i < nums.length; i++){
        let number = nums[i];
        if ( nums[i] in object ){
            object[number] += 1;

        }else {

            object[number] = 1;
        };
        let temp = object[number];

        if ( temp > count ){
            count = temp;
            max = number;
        }
    };  

    return max;
};

console.log(majorityElement([2,2,1,1,1,2,2]))