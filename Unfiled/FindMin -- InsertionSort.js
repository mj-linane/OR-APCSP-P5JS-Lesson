// modified from Alexander Kondov, Hackernoon
const numsArr = [11, 7, 33, 18, 31, 42, 19, 20]


function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    // store the current item value so it 
    //can be placed right
    let num = array[i];
    for (var j = i - 1; j > -1 && array[j] > num; j--) {
      // loop through the items in the sorted array 
      //(the items from the current to the beginning)
      // copy each item to the next one
      array[j + 1] = array[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    array[j + 1] = num
  }
  return array;
}

console.log(insertionSort(numsArr))
