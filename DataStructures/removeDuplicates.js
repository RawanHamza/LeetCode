var removeDuplicates = function (nums) {
        var result = 0;
    if (nums.length === 0) {return result;}
    result++;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[result++] = nums[i];
        }
    }
    return result;
}
removeDuplicates ([0,0,1,1,1,2,2,3,3,4])
