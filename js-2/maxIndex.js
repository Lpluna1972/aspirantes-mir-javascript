function maxIndex(numMax) {
    let nmax = 0
    let nInd = -1
    for(let i = 0; i < numMax.length; i++) {
      if (numMax [i] > nmax) {
        nmax = numMax[i]
        nInd = i
        }
        
    }  
    return nInd  

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1