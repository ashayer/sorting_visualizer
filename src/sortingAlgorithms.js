let delay = 25;

export async function sortDecider(array, alg){
    switch(alg){
        case "B_SORT":
            return bubbleSort(array).then(token => {return token});
        case "M_SORT":
             return mergeSort(array, 0, array.length-1, []).then(token => {return token});
        case "I_SORT":
            return insertionSort(array).then(token => {return token});
        case "S_SORT":
            return selectionSort(array).then(token => {return token});
        case "Q_SORT":
            return quickSort(array, 0, array.length-1, []).then(token => {return token});
        case "H_SORT":
            return heapSort(array).then(token => {return token});
        default:

    }
}

export function setDelay(time){
    return delay = time;

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
    let bars = document.getElementsByClassName("arrayBars");

    let history = [];

    let size = array.length;
    history.push(array.slice());

    for(let i =Math.floor(size / 2) - 1; i>=0; i--){
        await wait(delay);
        history.push(array.slice());
        await heap(array, size, i, history,bars);
    }

    for(let i = size - 1; i > 0;i--){

        await wait(delay);
        swap(bars[0],bars[i]);
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        
       

        await heap(array, i, 0, history,bars);
        bars[i].style.background = "green";

        history.push(array.slice());
    }



    bars[0].style.background = "green";

    return [array, history];
}

async function heap(array, size, i, historyArr, bars){
    let root = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if(left < size && array[left] > array[root]){
        root = left;
        //bars[root].style.background = "blue";

    }

    if(right < size && array[right] > array[root]){
        root = right;
        //bars[root].style.background = "blue";
    }
    if(root !== i){
   
        swap(bars[i],bars[root]);
        let temp = array[i];
        array[i] = array[root];
        array[root] = temp;

        
        bars[root].style.background = "orange";

        historyArr.push(array.slice());
        heap(array, size, root, historyArr,bars);

        bars[root].style.background = "orange";

    }
    
}

async function quickSort(array, low, high, newHistory){
    let history = newHistory;
    let bars = document.getElementsByClassName("arrayBars");

    history.push(array.slice());

    if(low < high){

        await wait(delay);
        history.push(array.slice());

        let part = await partition(array, low, high,history,bars);
        await quickSort(array, low, part-1, history);
        history.push(array.slice());

        await quickSort(array, part + 1, high, history);
        history.push(array.slice());

   

    }
    else if(low >= 0 && high >= 0 && low < array.length && high < array.length){
        bars[low].style.background = "green";
        bars[high].style.background = "green";
    }

    return [array,history];
}


async function partition(array, low, high,history,bars){
    let pivot = array[high];
    let i = (low - 1);

    for(let j = low; j <= high - 1; j++){
        
        //await wait(delay);
        if(array[j] < pivot){
            bars[j].style.background = "white";
            await wait(delay);
            i++;

            swap(bars[i],bars[j]);

            let temp = array[i];
            array[i] = array[j];
            array[j] = temp; 
            
            history.push(array.slice());
            bars[j].style.background = "orange";
        }

    }
    bars[i+1].style.background = "white";
    swap(bars[i+1],bars[high]);

    let temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    await wait(delay);
    bars[i+1].style.background = "green";

    return(i+1);
}

function wait(time) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('resolved') }, time); 
    }) 
}




async function mergeSort(array, left, right, newHistory){
    let history = newHistory;
    let bars = document.getElementsByClassName("arrayBars");
    if(left < right){
        let middle = left + Math.floor((right - left) / 2);
        history.push(array.slice());

        await mergeSort(array, left, middle, history);
        history.push(array.slice());

        await mergeSort(array, middle + 1, right, history);
        history.push(array.slice());

        await merge(array, left, middle, right, history, bars);
        
    }
    return [array,history];
    

    
}

async function merge(array, low, middle, high, history, bars){
    const n1 = middle - low + 1;
    const n2 = high - middle;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i =0; i < n1; i++){
        await wait(delay);
        left[i] = array[low + i];
        bars[low+i].style.background = "red";
    }

    for(let i =0; i < n2; i++){
        await wait(delay);
        right[i] = array[middle + 1 + i];
        bars[middle + 1 + i].style.background = "white"
    }

    let i = 0, j = 0, k = low;

    while(i < n1 && j < n2){
        await wait(delay);
        if(left[i] <= right[j]){
            bars[k].style.height = left[i] + "%";
            array[k] = left[i];
            i++;
            k++;

        }
        else{
            bars[k].style.height = right[j] + "%";
            array[k] = right[j];
            j++;
            k++;
        }
    
    }

    while(i < n1){
        await wait(delay);
        
        bars[k].style.height = left[i] + "%";
        
        array[k]= left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait(delay);
        

        bars[k].style.height = right[j] + "%";
        
        array[k] = right[j];
        j++;
        k++;
    }

}