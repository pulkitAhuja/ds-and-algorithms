// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = function (nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    
    if (n > m)
        return findMedianSortedArrays(nums2, nums1);

    // now, do binary search
    let k = Math.floor((n + m - 1) / 2);
    let l = 0, r = n; 
    while (l < r) {
        let midnums1 = (l + r) / 2;
        let midnums2 = k - midnums1;
        if (nums1[midnums1] < nums2[midnums2])
            l = midnums1 + 1;
        else
            r = midnums1;
    }
    
    // after binary search, we almost get the median because it must be between
    // these 4 numbers: nums1[l-1], nums1[l], nums2[k-l], and nums2[k-l+1] 
    // if (n+m) is odd, the median is the larger one between nums1[l-1] and nums2[k-l].
    let a = Math.max(l > 0 ? nums1[l - 1] :0 , k - l >= 0 ? nums2[k - l] : 0);
    if (((n + m) & 1) == 1)
        return a;

    // if (n+m) is even, the median can be calculated by 
    let b = Math.min(l < n ? nums1[l] : 100000000000, k - l + 1 < m ? nums2[k - l + 1] : 100000000000);
    return (a + b) / 2;
};

console.log(findMedianSortedArrays([1,3],[2,7]));

const findMedianSortedArraysSmall = function (nums1, nums2) {
   nums1 = [...nums1, ...nums2];
   nums1.sort((a,b) => a -b); // O(nlogn)
   let mid = Math.floor((nums1.length-1)/2);

   if(!(nums1.length % 2)) return (nums1[mid] + nums1[mid+1])/2;
   return nums1[mid]; 
};

console.log(findMedianSortedArraysSmall([1,3],[2,7]));