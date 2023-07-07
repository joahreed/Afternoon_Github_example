/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation or capitalization
*/
// RIOT Read Input Output Talk
function isPalindrome(str) { 
    for (let left = 0; left < str.length/2; left++) {
        let right = str.length-1-left;
        if(str[left] != str[right]){
            return false;
        }
    }
    return true;
}


const str1 = "a x a";
const expected1 = true;
isPalindrome(str1);

const str2 = "racecar";
const expected2 = true;
isPalindrome(str2);

const str3 = "Dud";
const expected3 = false;
isPalindrome(str3);

const str4 = "oho!";
const expected4 = false;
isPalindrome(str4);