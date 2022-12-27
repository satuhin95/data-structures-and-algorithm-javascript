
function maxSubArray(nums) {
    let current_sum = nums[0];

    let max_sum = current_sum;
    for (let i = 1; i < nums.length; i++) {
        current_sum =Math.max(current_sum + nums[i], nums[i])
        max_sum = Math.max(current_sum, max_sum)
        
    }
    return max_sum;
    
};
 let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))