
function searchInsert(nums, target) {
    let res = nums.indexOf(target);
    if(res !== -1){
        return res;
    }else{
      nums.push(target)
      nums.sort(function(a, b) {
        return a - b;
      });
      return nums
    //   return nums.indexOf(target)
    }
};

console.log(searchInsert([3,5,7,9,10], 8))

// var numArray = [3,5,7,9,10];
// numArray.sort(function(a, b) {
//   return a - b;
// });

// console.log(numArray);