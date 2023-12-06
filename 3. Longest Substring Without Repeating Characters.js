let s = "aabaab!bb"
let word = s.split("");
let resultArray = [];
let lengthOfArray = 0;
let maximumLength = 0;

for(let i=0;i<word.length;i++){ 
    let found = false;
    let spliceIndex = 0;
    
    for(let j=0;j<resultArray.length;j++){
        if(resultArray[j]===word[i]){ 
            found = true;
            spliceIndex = j;
            break;
        }
    }
    
    if (found){
        resultArray.splice(0,spliceIndex+1);
        resultArray.push(word[i]);
        lengthOfArray = resultArray.length;
    }else{
        resultArray.push(word[i]);
        lengthOfArray++;
    }
    if(lengthOfArray > maximumLength){
        maximumLength = lengthOfArray;
    }
    
    console.log(lengthOfArray)
    for(let j=0;j<resultArray.length;j++){
        console.log(resultArray[j])
    }
    console.log(found)
}
console.log("Final : " + maximumLength);

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
        let spliceIndex = 0;
        for(let j=0;j<resultArray.length;j++){
            if(resultArray[j]===word[i]){ //
                found = true;
                spliceIndex = j;
                break;
            }
        }
        
        if (found){
            resultArray.splice(0,spliceIndex+1);
            resultArray.push(word[i]);
            lengthOfArray = resultArray.length;
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

//dvdf
//aabaab!bb
