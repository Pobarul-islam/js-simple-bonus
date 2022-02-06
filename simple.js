/* for (let i = 0; i < 6; i++){
    console.log(i)
} */


function consoleNumber(i) {
    console.log(i);
    consoleNumber(i+1)
}
consoleNumber(4);