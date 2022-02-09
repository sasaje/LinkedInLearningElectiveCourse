/**
 * 
 * @param {Number} start
 * @param {Number} end
 * 
 */

function sum(start,end){
    function addNext(newStart, currentSum){
        if(newStart> end){
            return currentSum;
        }
        return addNext(newStart + 1, newStart+currentSum);
    }
    return addNext(start, 0);
}
