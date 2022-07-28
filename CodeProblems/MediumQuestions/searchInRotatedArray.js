/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1],nums[0], nums[1], ..., nums[k-1]] (0-indexed). 

For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

const search = (nums, target) => {

    const rotateBinarySearch = (l, r) => {
        if (r >= l) {
            // debugging logs for recursion
            // console.log(l,r)
            let mid = Math.floor((r + l) / 2);
            // debugging logs for recursion
            // console.log(mid, nums[mid] , nums[l])
            if (nums[mid] == target)
                return mid;

            if (nums[mid] >= nums[l] ) {
                return target >= nums[l] && target < nums[mid] ? rotateBinarySearch(l, mid - 1) : rotateBinarySearch(mid +1, r);
            }
            return target <= nums[r] && target > nums[mid] ? rotateBinarySearch(mid + 1, r) : rotateBinarySearch(l, mid - 1);
        }
        return -1;
    }
    return rotateBinarySearch(0, nums.length - 1)

};

console.log(search([3,1], 1));
