let s = "abcabcbb"
let word = s.split("");
let resultArray = [];
let lengthOfArray = 0;
let maximumLength = 0;

for(let i=0;i<word.length;i++){ 
    let found = false;
    
    for(let j=0;j<resultArray.length;j++){
        if(resultArray[j]===word[i]){ 
            found = true;
            break;
        }
    }
    
    if (found){
        lengthOfArray = 1;
        resultArray = [];
        resultArray.push(word[i]);
    }else{
        resultArray.push(word[i]);
        lengthOfArray++;
    }
    
    if(lengthOfArray > maximumLength){
        maximumLength = lengthOfArray;
    }
}
console.log(maximumLength);

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let word = s.split("");
    let resultArray = [];
    let lengthOfArray = 0;
    let maximumLength = 0;

    for(let i=0;i<word.length;i++){ 
        let found = false;
        
        for(let j=0;j<resultArray.length;j++){
            if(resultArray[j]===word[i]){ 
                found = true;
                break;
            }
        }
        
        if (found){
            lengthOfArray = 1;
            resultArray = [];
            resultArray.push(word[i]);
        }else{
            resultArray.push(word[i]);
            lengthOfArray++;
        }
        
        if(lengthOfArray > maximumLength){
            maximumLength = lengthOfArray;
        }
    }
    return(maximumLength);
};
