// takes a number and adds all numbers from 0 to num 
function recursiveRange(num){
    return num <= 1 ? num : num + recursiveRange(num - 1)
}
 