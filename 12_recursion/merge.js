function mergeSort(array) {
  if (array.length === 1) return array;
  const [left, right] = splitArray(array);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return mergeSortedArrays(leftSorted, rightSorted);
}

console.log(mergeSort([3, 6, 8, 2, 5, 8, 23]));

function splitArray(array) {
  const mid = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid);
  return [firstHalf, secondHalf];
}

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
