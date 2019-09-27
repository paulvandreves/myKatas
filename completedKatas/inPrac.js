console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))

function selectionSort(array) {
    function swap(array, i, j){
        let temp = array[i]; 
        array[i] = array[j]; 
        array[j] = temp; 
    }

    for(let i = 0; i < array.length; i ++){
        let min = i; 
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(i !== min){
            swap(array, i, min)
        }
    }
    return array; 
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
  
