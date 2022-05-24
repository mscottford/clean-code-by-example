// If you have `node` installed, this file can be run with:
// `node messy_parameters.js`
// If you don't have node install, but you do have Docker,
// then from the same directory that this file is in you can run:
// `docker run --rm -v $PWD:/code node node /code/messy_parameters.js`

function subtract(b, a) {
    return b - a;
}
console.log(subtract(6, 4));

function average(valueArray) {
    let sum = 0;
    for (let value of valueArray) {
        sum += value;
    }
    if (valueArray.length > 0) {
        return sum / valueArray.length;
    } else { 
        return 0;
    }
}
console.log(average([1, 2, 3, 4]));


function combine(LEFT, RIGHT, CombinerFunc) {
    return CombinerFunc(LEFT, RIGHT);
}

console.log(combine("first", "second", (oL, oR) => { return oL + oR; }));
