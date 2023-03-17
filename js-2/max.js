function max(numMax) {
    let resulta = numMax[0];
    for(let i = 0; i < numMax.length; i++) {
        if (numMax[i] > resulta) {
            resulta = numMax[i];
        }
    }    
    return resulta;
}


console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined