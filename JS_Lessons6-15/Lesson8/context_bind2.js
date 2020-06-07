function mul(a, b) {
    return a * b;
}

var doubleMul = mul.bind(null, 2); // Ваш код
var qudraMul = mul.bind(null, 4);// Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20