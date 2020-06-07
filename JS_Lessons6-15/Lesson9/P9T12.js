function Sum() {
    this.__firstNumber = 0;
    this.__secondNumber = 0;
    this.result = 0;
}

Sum.prototype.calc = function() {
    this.result = this.__firstNumber + this.__secondNumber;
}

Sum.prototype.firstNumber = function(number) {
    if (number === undefined) {
        return this.__firstNumber;
    } else {
        if(typeof(number) === "number") {
            this.__firstNumber = number;
            this.calc();
        }
 		return this.result;
 	}
}

Sum.prototype.secondNumber = function(number) {
 	if (number === undefined) {
 		return this.__secondNumber;
 	} else {
 		if(typeof(number)==="number") {
            this.__secondNumber = number;
 		    this.calc();
 	    }
    return this.result;
 	}
}

var sum = new Sum();
console.log(sum.firstNumber());
console.log(sum.secondNumber());

console.log(sum.firstNumber(-5));
console.log(sum.secondNumber(1));

console.log(sum.firstNumber());
console.log(sum.secondNumber());

console.log(sum.firstNumber("hi")); //неправильно число и сумма не пересчитана
console.log(sum.secondNumber("bye")); //неправильное число и сумма не пересчитана