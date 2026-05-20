// search target in infinite sorted array

function searchInfinite(nums, target) {
    // approach, start from range of st = 0, end = 1, keep expanding the range till target found by doubling end
    // next round - st = end+1, end = end*2

    let st = 0;
    let end = 1;

    while(target > nums[end]) {
        let newSt = end+1;
        end = end*2; // use end = end + (end - st +1)/2 for expanding end to long ranges later on
        st = newSt;
    }
    let idx = binary(nums, target, st, end);

    return idx;
}

function binary(nums, tar, st, end) {
    while(st <= end) {
        let mid = Math.floor(st + (end - st)/2);

        if(tar == nums[mid]) return mid;
        else if(tar < nums[mid]) end = mid - 1;
        else st = mid + 1;
    }

    return -1;
}

let nums = [2,4,6,7,10,11,14,15,16,19,25,29,33,36,66];
console.log(searchInfinite(nums, 66));