function sum(num) {
    let sumaAcum = 0;
    for (let i = 0; i < num.lentgh; i++) {
        sumaAcum += num[1];
    }
    return sumaAcum;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0