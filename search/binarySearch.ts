// Binary Search
// 이진 탐색의 경우 이미 정렬된 경우에만 수행 가능

const binarySearch = (
  arr: number[],
  target: number,
  startIndex: number = 0,
  endIndex: number = arr.length - 1
) => {
  if (startIndex > endIndex) return -1;

  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (arr[middleIndex] === target) return middleIndex;

  if (arr[middleIndex] > target) return binarySearch(arr, middleIndex + 1, endIndex);

  if (arr[middleIndex] < target) return binarySearch(arr, startIndex, middleIndex - 1);

  return -1;
};

// Big O
// Best Case : O(1)
// Average Case : O(nlogn)
// Worst Case : O(nlogn)
