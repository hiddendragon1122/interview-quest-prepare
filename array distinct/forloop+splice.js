Array.prototype.distinct = function () {
    let arr = this;
    let i,
        j,
        len = arr.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
                len--;
            }
        }
    }
    return arr;
}