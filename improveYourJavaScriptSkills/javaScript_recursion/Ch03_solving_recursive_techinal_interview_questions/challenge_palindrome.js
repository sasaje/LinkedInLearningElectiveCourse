//compare first and last index and so on

function palindrome (phrase){
    const size = phrase.length;

    for (let i = 0; i < size/2; i++) {
        if(phrase[i] !== phrase[size-1-i]){
            return false;
        }
    }
    return true;        
}

function isPalindrome(phrase){
    if(size=== 0 || size ===1){
        return true; //base case
    } else{
        if(phrase[0] !== phrase[size -1]){
            const convergingString = phrase.substr(1, size-2);
            return isPalindrome(convergingString); 
        }
    }
}

//run isPalindrome("phrase");