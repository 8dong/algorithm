// Bubble Sort

const bubbleSort = (arr: number[]) => {
  for (let i = arr.length; i > 0; i--) {
    let isSwap = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSwap = true;
      }
    }

    if (!isSwap) return arr;
  }

  return arr;
};

// Big O
// Best Case : O(n)
// Average Case : O(n^2)
// Worst Case : O(n^2)
