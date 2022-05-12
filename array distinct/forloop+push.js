Array.prototype.distinct = function (){
    let arr = this,
    i,
    j,
    result = [];
    let len = arr.length;
    for(i = 0; i < len; i++){
        for(j = i +1; j < len; j++){
            if(arr[i] === arr[j]){
                j = ++i//若是相同就跳过
            }
        }
        result.push(arr[i])
    }
    return result
}