/**
 * 
 * @param {Number} start
 * @param {Number} end
 * 
 */

function counter (start, end){
    function repeat(current){
        if(current<end){
            repeat(current+1);
        }
    }
    repeat(start);
}