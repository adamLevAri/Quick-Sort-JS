function quickSort(arr) {

  if(arr.length === 0) return [];

  let lhs = [], rhs = [], pivot = arr.shift();

  for(let i in arr){
    (arr[i] <= pivot)? lhs.push(arr[i]) : rhs.push(arr[i])
  }

  return [...quickSort(lhs), pivot, ...quickSort(rhs)];
}
