/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x;
    let rev = 0;

    while (num > 0) {
      const dig = num % 10;
        rev = rev * 10 + dig;
        num = Math.floor(num / 10) ;
    }

    console.log(rev)

    return rev == x;
    
};