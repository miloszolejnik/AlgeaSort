export function bubble(arr:number[]){
    let swapped;
    let swaps = []
    do{
        swapped = false;
        for(let i = 0; i<arr.length -1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                swaps.push([i-1,i])
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while (swapped);
    return arr;
}

export function quickSort(arr:number[]):any {
  if (arr.length > 1) {
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  } else {
    return arr;
  }
}
