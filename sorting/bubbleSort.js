const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for(let i=0; i < array.length; i++){
    for(let j=0; j < array.length; j++){
      if(array[j] > array[j+1]){
        swap(array,j);
      }
    }
  }
}

function swap(array, index){
  let temp = array[index];
  array[index] = array[index+1];
  array[index+1] = temp;
}

bubbleSort(numbers);
console.log(numbers);