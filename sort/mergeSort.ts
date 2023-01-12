// Merge Sort

const mergeArr = (arr1: number[], arr2: number[]) => {
  let result: number[] = [];

  let arr1CurrentIndex = 0;
  let arr2CurrentIndex = 0;

  while (arr1CurrentIndex < arr1.length && arr2CurrentIndex < arr2.length) {
    if (arr1[arr1CurrentIndex] < arr2[arr2CurrentIndex]) {
      result.push(arr1[arr1CurrentIndex]);
      arr1CurrentIndex++;
    }

    if (arr1[arr1CurrentIndex] > arr2[arr2CurrentIndex]) {
      result.push(arr2[arr2CurrentIndex]);
      arr2CurrentIndex++;
    }
  }

  while (arr1CurrentIndex < arr1.length) {
    result.push(arr1[arr1CurrentIndex]);
    arr1CurrentIndex++;
  }

  while (arr2CurrentIndex < arr2.length) {
    result.push(arr2[arr2CurrentIndex]);
    arr2CurrentIndex++;
  }

  return result;
};

const mergeSort = (arr: number[]) => {
  if (arr.length <= 1) return arr;

  let arr1 = arr.slice(0, Math.floor(arr.length / 2));
  let arr2 = arr.slice(Math.floor(arr.length / 2));

  return mergeArr(mergeSort(arr1), mergeSort(arr2));
};

// Big O
// Best Case : O(nlogn)
// Average Case : O(nlogn)
// Worst Case : O(nlogn)
