//given sorted array, return range of target element in the array
// [1,3,5,6,6,7,9] =target = 6, so [3,4], if not found, [-1,-1]

function firstLast(nums, target, isLeft) {
    let st = 0;
    let end = nums.length - 1;
    let ans = -1;

    while(st <= end) {
        let mid = Math.floor(st + (end-st)/2);

        if(target < nums[mid]) {
            end = mid - 1;
        } else if(target > nums[mid]) {
            st = mid+1;
        } else {
            ans = mid;
            if(isLeft) {
                end = mid - 1;
            } else st = mid + 1;
        }
    }

    return ans;
}

function findRange(nums, target) {
    let stIdx = firstLast(nums, target, true);
    let endIdx = firstLast(nums, target, false);

    return [stIdx, endIdx];
}

let nums = [1,3,4,5,5,5,6,7,8,10];
console.log(findRange(nums, 5));