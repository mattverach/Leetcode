/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let c = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[c]){
            c++;
            nums[c] = nums[j];
        }
            }
                return c + 1;
        };


    