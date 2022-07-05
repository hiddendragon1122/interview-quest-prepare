//leetcode 415
var addStrings = function(num1, num2){
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    let ans = [];
    while(i >= 0 || j >= 0 || add != 0){
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const result = x + y + add;
        ans.push(result % 10);
        add = Math.floor(result / 10);
        i--;
        j--;
    }
    return ans.reverse.join('')
}

 function isEqual(a, b, sum){
    const [intStr1, deciStr1] = a.toString().split('.')
    const [intStr2, deciStr2] = num2.split('.')
    const intSum = addStrings(intStr1, intStr2);
    const intDeci = addStrings(deciStr1, deciStr2);
    return intSum + '.' + intDeci === String(sum);
}

console.log(isEqual(0.1,0.2,0.3)) //true