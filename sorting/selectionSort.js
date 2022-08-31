const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let currMin = Number.MAX_VALUE;
  let jIndex = -1;
  for(let i=0; i < array.length; i++){
    for(let j=i+1; j < array.length; j++){
      if(array[j] < currMin){
        currMin = array[j];
        jIndex = j;
      }
    }
    swap(array, i, jIndex, currMin);
    currMin = Number.MAX_VALUE;
  }
}

function swap(array, i, jIndex, currMin){
  let temp = array[i];
  array[i] = currMin;
  array[jIndex] = temp;
}

selectionSort(numbers);
console.log(numbers);