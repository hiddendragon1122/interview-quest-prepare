//Set数据结构，它类似于数组，其成员的值都是唯一的
function dedupe(array){
    return Array.from(new Set(array))
}

//... + set
let arr = [7,21,49,21];
let resultarr = [...new Set(arr)]