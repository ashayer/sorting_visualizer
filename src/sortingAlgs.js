


export function sortDecider(array, value){
    switch(value){
        case "B_SORT":
            return bubbleSort(array);
        case "M_SORT":
            return bubbleSort(array);
        case "I_SORT":
            return insertionSort(array);
        case "S_SORT":
            return selectionSort(array);
        case "Q_SORT":
            return bubbleSort(array);
        case "H_SORT":
            return heapSort(array);
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

function insertionSort(array){
    let i,key, j;
    let animationArray = [];
    for(i = 1;i<array.length;i++){
        key = array[i];
        j = i -1;
        while(j >= 0 && array[j] > key){
            array[j+1] = array[j];

            animationArray.push([j,j+1]);
            j = j - 1;
        }
        array[j+1] = key;   
    }
    return [array,animationArray];
}

function selectionSort(array){
    let animationArray = [];
    for(let i = 0;i<array.length;i++){
        let min = i;
        for(let j = i + 1; j <array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(min !== i ){
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;

            animationArray.push([i, min])
        }
    }

    return [array, animationArray];
    
}

function heapSort(array){
    
    for(let i =Math.floor(array.length / 2) - 1; i>=0; i--){
        heapify(array, array.length, i);
    }

    for(let i = array.length; i > 0;i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, i, 0);
    }

    console.log(array);

}

function heapify(array, size, i){
    let root = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < size && array[left] > array[root]){
        root = left;
    }

    if(right < size && array[right] > array[root]){
        root = right;
    }

    if(root !== i){
        let temp = array[i];
        array[i] = array[root];
        array[root] = temp;
        heapify(array, size, root);
    }

}