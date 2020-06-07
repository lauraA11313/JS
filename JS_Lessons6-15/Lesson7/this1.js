var calculator = {
    num1: 0,
    num2: 0,
    read: function () {
        this.num1 = Number(prompt('enter the number ', ''));
        this.num2 = Number(prompt('enter the number ', ''));
    },
    sum: function () {
        var sum;
        sum = this.num1 + this.num2;
        return sum;
    },
    mul: function () {
        var mul;
        mul = this.num1 * this.num2;
        return mul;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());