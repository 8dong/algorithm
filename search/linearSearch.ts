// Linear Search

const linearSearch = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

// Big O (시간 복잡도)
// Best Case : O(1)
// Average Case : O(n)
// Worst Case : O(n)
