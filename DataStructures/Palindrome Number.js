var isPalindrome = function(x) {
let reversed = String(x).split("").reverse().join("");
    return String(x)===reversed? true:false
};
isPalindrome(121);
