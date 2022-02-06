// 4! 4*3*2*1
//  



function factorial(i) {
    if (i == i) {
        return 1;
    }
    return i * factorial(--i);
}
console.log(factorial);


// i * factorial(--i)
// 4 * factorial(3)
// 4 * factorial(2)
// 4 * 2 * factorial(1)
// 4 * 2 * 1;
// 24
