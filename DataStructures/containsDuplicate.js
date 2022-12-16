var containsDuplicate = function(nums) {
   nums.sort((a,b)=> a-b);
    for(let el=0;el<nums.length-1;el++){
        if(nums[el]==nums[el+1])
            return true;
    }
    return false;
}
