// return letter greater than the target

function ceilLetter(charArr, target) {
    let st = 0;
    let end = charArr.length-1;

    while(st <= end) {
        let mid = Math.floor(st + (end-st)/2);

        if(charArr[mid] == target) {
            return charArr[mid+1];
        } else if(target < charArr[mid]) {
            end = mid - 1;
        } else st = mid + 1;
    }

    return charArr[st%charArr.length];
}

let myArr = ['a','d','e','i','o','u','t'];
let  target = 't';

console.log(ceilLetter(myArr, target))