console.log ("Task1");

var per = (function() {
    var side1 = 0;
    var side2 = 0;

    function calcPer () {
        return 2*(side1+side2);
}

var obj = {
    setSide1: function (num) {
        if (typeof(num) === 'number'  && num > 0) {
            side1 = num;
        }
    },
    setSide2: function (num) {
        if (typeof(num) === 'number' && num > 0) {
            side2 = num;
        }
    },
    calcPer: function () {
        return calcPer();
    }
}
return obj;
}());

per.setSide1(4);
per.setSide1(-67);
per.setSide2("bye");
per.setSide2(5);
console.log('Perimeter = ', per.calcPer());

var sqr = (function() {
    var side1 = 0;
    var side2 = 0;
    function calcSqr () {
        return side1*side2;
    }

var obj = {
    setSide1: function (num) {
        if (typeof(num) === 'number' && num > 0) {
            side1 = num;
        }
    },
    setSide2: function (num) {
        if (typeof(num) === 'number' && num > 0) {
            side2 = num;
        }
    },
    calcSqr: function () {
        return calcSqr();
    }
}
return obj;
}());

sqr.setSide1(7);
sqr.setSide2(2);
sqr.setSide2(false);
sqr.setSide2("13");
console.log("Square = ", sqr.calcSqr());