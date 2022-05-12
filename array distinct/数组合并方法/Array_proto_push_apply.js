function concatArr(arr, arr2){
    Array.prototype.push.apply(arr, arr2)
    return arr = unique1(arr)
}