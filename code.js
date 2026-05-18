function binary_search(nums, target) {
    let start = 0;
    let end = nums.length;

    while(start <= end) {
        let mid = start + (end-start)/2;

        if(nums[mid] == target) return mid;
        else if(target < nums[mid]) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
}

const nums = [1,3,5,7,9,11,14];
const target = 4;
const tar = 5;

console.log(binary_search(nums, tar));