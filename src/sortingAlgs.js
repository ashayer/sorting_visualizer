


export function sortDecider(array, value){
    switch(value){
        case "B_SORT":
            return bubbleSort(array);
        case "M_SORT":
            // return mergeSort(array, 0, array.length-1, []);
            return mergeSort(array);
        case "I_SORT":
            return insertionSort(array);
        case "S_SORT":
            return selectionSort(array);
        case "Q_SORT":
            return quickSort(array, 0, array.length-1,[]);
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
    for(let i = 0;i<array.length-1;i++){
        let min = i;
        for(let j = i + 1; j <array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
            
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
        animationArray.push([i, min])

    }

    return [array, animationArray];
    
}

function heapSort(array){
    let animationArray = [];

    let size = array.length;
    for(let i =Math.floor(size / 2) - 1; i>=0; i--){
        heapify(array, size, i, animationArray);
    }

    for(let i = size - 1; i > 0;i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        animationArray.push([0, i]);
        heapify(array, i, 0, animationArray);
    }
    
    return [array, animationArray];
}

function heapify(array, size, i, animationArr){
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
        animationArr.push([root, i]);
        heapify(array, size, root, animationArr);
    }

}

function quickSort(array, low, high, animationArray){
    let animationsArray = animationArray;
    if(low < high){
        let part = partition(array, low, high, animationsArray);
        quickSort(array, low, part - 1, animationsArray);
        quickSort(array, part + 1, high, animationsArray);
    }

    return [array, animationsArray];
}


function partition(array, low, high, animationArray){
    let pivot = array[high];
    let i = (low - 1);

    for(let j = low; j <= high - 1; j++){
        if(array[j] < pivot){
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp; 
            animationArray.push([i,j]);
        }
    }
    let temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;
    animationArray.push([i+1,high]);
    return(i+1);
}

function merge(array, left,middle,right, animationArray){
    let n1 = middle - left + 1;
    let n2 = right-middle;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    

    for(let i = 0; i<n1;i++){
        leftArray[i] = array[left + i];
    }
    for(let j = 0; j < n2; j++){
        rightArray[j] = array[middle + 1 + j];

    }
    let i, j = 0;
    let k = left;

    while(i < n1 && j < n2){
        if(leftArray[i] <= rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }
        else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i < n1){
        array[k] = leftArray[i];
        animationArray.push([k,i]);
        i++;
        k++;
        
    }

    while(j < n2){
        array[k] = rightArray[j];
        animationArray.push([k,j]);
        j++;
        k++;
       
    }

    
}

function mergeSort(array, left, right, animation){
    let animationArray = animation;
    let test;
    if(left < right){
    
        let middle = Math.floor((left+right)/2);
        mergeSort(array,left,middle,animationArray);
        mergeSort(array, middle+1, right,animationArray);
        test = merge(array, left,middle,right,animationArray);
        
    }
    console.log(test);
    return [array, animationArray];
}
