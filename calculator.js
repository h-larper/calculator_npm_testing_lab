const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const modulus = function(a, b) {
    return a % b;
};

const even = function(a){
    // return a % 2 == 0;
    return modulus(a, 2) == 0;              // refactor to uphold DRY
};

const odd = function(a){
    //return a % 2 == 1;
    return modulus(a, 2) == 1;              // refactor to uphold DRY
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
