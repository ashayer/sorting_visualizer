let delay = 250;

export async function sortDecider(array, alg){
    switch(alg){
        case "B_SORT":
            return bubbleSort(array).then(token => {return token});
        case "M_SORT":
            // return mergeSort(array, 0, array.length-1, []);
            //return mergeSort(array);
            break;
        case "I_SORT":
            return insertionSort(array).then(token => {return token});
        case "S_SORT":
            return selectionSort(array).then(token => {return token});
        case "Q_SORT":
            //return quickSort(array, 0, array.length-1,[]);
            break;
        case "H_SORT":
            return heapSort(array).then(token => {return token});
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

async function bubbleSort(array){
    let bars = document.getElementsByClassName("arrayBars");
    
    let history = [];
    
    let size = array.length;
    for(let i = 0; i < size;i++){
        history.push(array.slice());
        for(let j = 0; j < size-i-1; j++){

            bars[j].style.background = "white";
            bars[j+1].style.background = "white";
            await wait(delay);
            if(array[j] > array[j+1]){

                swap(bars[j], bars[j+1])
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                
            }
            bars[j].style.background = "orange";
            bars[j+1].style.background = "orange";
            
            if(j+1===size-i-1){
                bars[j+1].style.background = "green";
            }
        }
       
        if(i===size-1){
            bars[0].style.background = "green";
        }
    }


    return [array,history];
}

async function insertionSort(array){
    let bars = document.getElementsByClassName("arrayBars");
    let i,j,key;
    let history = [];

    bars[0].style.background = "green";
    history.push(array.slice());

    for(i = 1;i<array.length;i++){

        bars[i].style.background = "white";
        key = array[i];
        j = i - 1;
        
        await wait(delay);

        while(j >= 0 && array[j] > key){
            
            bars[j].style.background = "purple";

            swap(bars[j], bars[j+1]);
;
            array[j+1] = array[j];

            j = j - 1;

            await wait(delay);

            for(let sorted = i; sorted >=0 ;sorted--){
                bars[sorted].style.background = "green";
            }

        }
        array[j+1] = key;

        bars[i].style.background = "green";

        history.push(array.slice());


    }

    return [array,history];
}


async function heapSort(array){
    let history = [];

    let size = array.length;
    history.push(array.slice());

    for(let i =Math.floor(size / 2) - 1; i>=0; i--){
        history.push(array.slice());
        heap(array, size, i, history);
    }

    for(let i = size - 1; i > 0;i--){
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        
        heap(array, i, 0, history);
        history.push(array.slice());
    }
    
    return [array, history];
}

function heap(array, size, i, historyArr){
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
        historyArr.push(array.slice());
        heap(array, size, root, historyArr);
    }

}

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