// var twoSum = function(nums, target) {
//     return nums[0] + nums[1] === target
// };
// console.log(twoSum([1,2,3,4,5],3))

var twoSum = function(nums, target) {
    // system 1
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i +1; j < nums.length; j++) {
    //         if(nums[i] + nums[j] === target){
    //             return [i, j];
    //         }
            
    //     }
        
   // }


//    system 2 
    const hashTable = {}
    for (let i = 0; i < nums.length; i++) {
        const element = target - nums[i];
        if(element in hashTable){
            return [hashTable[element] , i]
        }else{
            hashTable[nums[i]] = i;
        }
        
    }


   };
   console.log(twoSum([2,7,11,15],9))