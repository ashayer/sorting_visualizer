let delay = 1;

export async function sortDecider(array, alg){
    switch(alg){
        case "B_SORT":
            //return bubbleSort(array);
            break;
        case "M_SORT":
            // return mergeSort(array, 0, array.length-1, []);
            //return mergeSort(array);
            break;
        case "I_SORT":
            //return insertionSort(array);
            break;
        case "S_SORT":
            return selectionSort(array).then(token => {return token});
        case "Q_SORT":
            //return quickSort(array, 0, array.length-1,[]);
            break;
        case "H_SORT":
            //return heapSort(array);
            break;
        default:

    }
}

export function setDelay(time){
    return delay = time;

}

export function addHistory(){

    
    
}
function swap(barOne, barTwo){
    let temp = barOne.style.height;
    barOne.style.height = barTwo.style.height;
    barTwo.style.height = temp; 
}

async function selectionSort(array){
    let bars = document.getElementsByClassName("arrayBars");
    let history = [];
    
    for(let i = 0;i<array.length;i++){
        
        history.push(array.slice());

        let min = i;
        bars[i].style.background = "white";
        for(let j = i + 1; j <array.length; j++){
            bars[j].style.background = "blue";
            await wait(delay);
            if(array[j] < array[min]){
                if(min !== i ){
                    bars[min].style.background = "orange";
                }
                min = j;
                bars[min].style.background = "purple";
            } 
            else{
                bars[j].style.background = "orange";
            } 

        }
        

        bars[i].style.background = "orange";


        await wait(delay); 


        let temp = array[i];
        array[i] = array[min];
        array[min] = temp



        swap(bars[i], bars[min]);
        bars[min].style.background = "orange";
        bars[i].style.background = 'green';
        
    }

    return [array,history];
    
}

// function bubbleSort(array){
//     let bars = document.getElementsByClassName("arrayBars");
//     bars[75].style.background = "blue";
    
//     let size = array.length;
//     let animationArray = [];
//     for(let i = 0; i < size;i++){
//         for(let j = 0; j < size-i-1; j++){

//             if(array[j] > array[j+1]){
//                 var temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
                
//                 animationArray.push([j,j+1]);
//             }
            
//         }
//     }


//     return [array,animationArray];
// }

// function insertionSort(array){
//     let i,key, j;
//     let animationArray = [];
//     for(i = 1;i<array.length;i++){
//         key = array[i];
//         j = i -1;
//         while(j >= 0 && array[j] > key){
//             array[j+1] = array[j];

//             animationArray.push([j,j+1]);
//             j = j - 1;
//         }
//         array[j+1] = key;   
//     }
//     return [array,animationArray];
// }


// function heapSort(array){
//     let animationArray = [];

//     let size = array.length;
//     for(let i =Math.floor(size / 2) - 1; i>=0; i--){
//         heap(array, size, i, animationArray);
//     }

//     for(let i = size - 1; i > 0;i--){
//         let temp = array[0];
//         array[0] = array[i];
//         array[i] = temp;
//         animationArray.push([0, i]);
//         heap(array, i, 0, animationArray);
//     }
    
//     return [array, animationArray];
// }

// function heap(array, size, i, animationArr){
//     let root = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < size && array[left] > array[root]){
//         root = left;
//     }

//     if(right < size && array[right] > array[root]){
//         root = right;
//     }

//     if(root !== i){
//         let temp = array[i];
//         array[i] = array[root];
//         array[root] = temp;
//         animationArr.push([root, i]);
//         heap(array, size, root, animationArr);
//     }

// }

// function quickSort(array, low, high, animationArray){
//     let animationsArray = animationArray;
//     if(low < high){
//         let part = partition(array, low, high, animationsArray);
//         quickSort(array, low, part - 1, animationsArray);
//         quickSort(array, part + 1, high, animationsArray);
//     }

//     return [array, animationsArray];
// }


// function partition(array, low, high, animationArray){
//     let pivot = array[high];
//     let i = (low - 1);

//     for(let j = low; j <= high - 1; j++){
//         if(array[j] < pivot){
//             i++;
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp; 
//             animationArray.push([i,j]);
//         }
//     }
//     let temp = array[i+1];
//     array[i+1] = array[high];
//     array[high] = temp;
//     animationArray.push([i+1,high]);
//     return(i+1);
// }

function wait(time) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('resolved') }, time); 
    }) 
}