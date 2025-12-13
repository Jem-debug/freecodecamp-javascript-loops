const chunkArrayInGroups = (arr, num) => {
  let array = [];
  for(let i = 0; i < arr.length; i += num){
    array.push(arr.slice(i, i + num));
  }

  return array;
}
