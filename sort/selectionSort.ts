// Selection Sort

const selectionSort = (arr: number[]) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValue = arr[i];
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minValue) {
        minValue = arr[j];
        minValueIndex = j;
      }
    }

    arr[minValueIndex] = arr[i];
    arr[i] = minValue;
  }

  return arr;
};

// Big O
// Best Case : O(n^2)
// Average Case : O(n^2)
// Worst Case : O(n^2)
