// // floor = greatest number in the array smallr or equal to the target
// arr = [1,3,5,6,9,14,17,20], target = 7, floor = 6.  if target = 11, ceil = 9., if tar = 14, ceil = 14

function floorNum(nums, target) {
    let st = 0;
    let end = nums.length-1;

    // base cases
    if(target <= nums[st]) return -1;
    if(target >= nums[end]) return nums[end];

    while(st <= end) {
        let mid = Math.floor(st + (end-st)/2);
        
        if(nums[mid] == target) return nums[mid];

        else if(target < nums[mid]) end = mid - 1;
        else st = mid + 1;
    }

    return nums[end];
}

let nums = [1,3,5,18,20,22,25];

console.log(floorNum(nums, 1));
console.log(floorNum(nums, 20));
console.log(floorNum(nums, 18));