// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

const reverseString = s => {
    for (let i = 0; i < Math.ceil(s.length / 2); i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};

console.log(reverseString(["P", "u", "l", "k", "i", "t"]));
// OR using inbuilt function from JS
console.log(["P", "u", "l", "k", "i", "t"].reverse());

