// Quick Sort

const pivot = (arr: number[], startIndex = 0, endIndex = arr.length - 1) => {
  const pivotValue = arr[startIndex];
  let pivotIndex = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivotValue > arr[i]) {
      pivotIndex++;

      let temp = arr[i];
      arr[i] = arr[pivotIndex];
      arr[pivotIndex] = temp;
    }
  }

  arr[startIndex] = arr[pivotIndex];
  arr[pivotIndex] = pivotValue;

  return pivotIndex;
};

const quickSort = (arr: number[], startIndex = 0, endIndex = arr.length - 1) => {
  if (startIndex < endIndex) {
    let pivotIndex = pivot(arr, startIndex, endIndex);

    // left
    quickSort(arr, startIndex, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, endIndex);
  }

  return arr;
};

// Big O
// Best Case : O(nlogn)
// Average Case : O(nlogn)
// Worst Case : O(n^2)
