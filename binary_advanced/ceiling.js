// ceiling = smallest number in the array greater or equal to the target
// arr = [1,3,5,6,9,14,17,20], target = 7, ceil = 9.  if target = 11, ceil = 14., if tar = 14, ceil = 14

// assuming array is sorted

function ceilingNum(nums, target) {
    let st = 0;
    let end = nums.length-1;
    // base case
    if(nums[st] > target) return nums[st];
    if(nums[end] < target) return -1;

    while(st <= end) {
        let mid = Math.floor(st + (end - st) / 2);

        if(nums[mid] == target) return nums[mid];
        else if(target < nums[mid]) end = mid - 1;
        else st = mid+1;
    }

    return nums[st];
}

let nums = [1,3,5,18,20,22,25];

console.log(ceilingNum(nums, 18));
console.log(ceilingNum(nums, 21));