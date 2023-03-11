/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let max = 0;
    
    for (let i = 0; i < accounts.length; i++){
        let richest = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            richest += accounts[i][j];
        }
        if (richest > max) {
            max = richest;
        }
    }
    return max;
};