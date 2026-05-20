// implement linear search

const linear = (nums, tar) => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == tar) {
            return i;
        }
    }

    return -1;
}

console.log(linear([1,2,3,4,5,6], 5));