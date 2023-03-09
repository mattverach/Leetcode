/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    let resp = 0;
    let total = 0;

    for (let i = s.length - 1; i >= 0; i--) {
       switch (s[i]) {
           case 'I' : 
            resp = 1
            break;
           case 'V' : 
            resp = 5
            break;
           case 'X' : 
            resp = 10
            break;
           case 'L' : 
            resp = 50
            break;
           case 'C' : 
            resp = 100
            break;
           case 'D' : 
            resp = 500
            break;
           case 'M' :  
            resp = 1000
            break;
       }

       if (4 * resp < total ) {

           total -= resp

       } else {

           total += resp 
           
           }

    }

    return total;
    
};