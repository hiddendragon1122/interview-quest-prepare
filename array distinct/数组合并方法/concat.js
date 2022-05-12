let arr = [1,2,3,1,3]
let arr2 = [3,4,5,5]


function concatArr(arr,arr2){
    let arr3 = arr.concat(arr2)
    arr3 = unique1(arr3)
    return arr3;
}