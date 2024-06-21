export function bubble(arr:number[]){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i<arr.length -1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while (swapped);
    return arr;
}
export function quickSort(items:number[]):number[]{
        if (items.length > 1) {
          let pivot = items[0];
          let left = [];
          let right = [];
          for (let i = 1; i < items.length; i++) {
            if (items[i] < pivot) {
              left.push(items[i]);
            } else {
              right.push(items[i]);
            }
          }
          return quickSort(left).concat(pivot, quickSort(right));
        } else {
          return items;
        }
      }