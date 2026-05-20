// linear search applied in a range of array

function searchInRange(nums, tar, stR, endR) {
    // base cases 
    if(stR < 0 || endR > nums.length) return -1;

    for(let i = stR -1; i < endR; i++) {
        if(nums[i] == tar) {
            return i;
        }
    }

    return -1;
}

console.log(searchInRange([1,2,11,10,20,42,21], 21, 0,7));