// Insert Sort

const insertSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    let target = arr[i];
    let swapIndex = i;

    for (let j = i - 1; j >= 0 && target < arr[j]; j--) {
      if (target < arr[j]) {
        arr[j + 1] = arr[j];
        swapIndex = j;
      }
    }

    arr[swapIndex] = target;
  }

  return arr;
};

// Big O
// Best Case : O(n)
// Average Case : O(n^2)
// Worst Case : O(n^2)
