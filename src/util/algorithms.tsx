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
export function Quicksort(){
    return <h1>Quicksort </h1>
}