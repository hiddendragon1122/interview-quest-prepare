Array.prototype.distinct = function(){
    let arr = this;
    let result = [];
    arr.forEach(function(v, i, arr){
        let bool = arr.indexOf(v, i +1)//从传入参数的下一个索引值开始寻找是否存在重复
        if(bool === -1){
            result.push(v)
        }
    })
    return result
}

