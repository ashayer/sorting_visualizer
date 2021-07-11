


export function sortDecider(array, value){
    switch(value){
        case "B_SORT":
            return bubbleSort(array);
        case "M_SORT":
            return bubbleSort(array);
        case "I_SORT":
            return bubbleSort(array);
        case "S_SORT":
            return bubbleSort(array);
        case "Q_SORT":
            return bubbleSort(array);
        case "H_SORT":
            return bubbleSort(array);
        default:

    }
}

function bubbleSort(array){
    let size = array.length;
    let animationArray = [];
    for(let i = 0; i < size;i++){
        for(let j = 0; j < size-i-1; j++){

            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animationArray.push([j,j+1]);

            }
        }
    }

    

    return [array,animationArray];
}

