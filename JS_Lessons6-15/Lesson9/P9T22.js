function Square(side) {
    this.__side = 0;
    if(typeof(side) === "number" && side >0) {
        this.__side = side;
    }
}

Square.prototype.Side = function(side) {
    if(side === undefined) {
        return this.__side;
    } else {
        if(typeof(side) === "number" && side >0) {
            this.__side = side;
        }
    }
}

Square.prototype.Perimeter = function() {
    return this.__side*4;
}

var sqr = new Square(2);
console.log(sqr.Side());
console.log(sqr.Perimeter());
sqr.Side(3);
console.log(sqr.Side());
console.log(sqr.Perimeter());

function Cube1(side) {
    Square.call(this, side);
}

Cube1.prototype = Object.create(Square.prototype);
Cube1.prototype.constructor = Cube1;

Cube1.prototype.Perimeter = function() {
    return this.__side*12;
}

var cube1 = new Cube1(4);
console.log(cube1.Side());
console.log(cube1.Perimeter());
cube1.Side(3);
console.log(cube1.Side());
console.log(cube1.Perimeter());


function Cube2(side) {
    Square.call(this, side);
}

Cube2.prototype = Object.create(Square.prototype);
Cube2.prototype.constructor = Cube2;

Cube2.prototype.Perimeter = function() {
    var sqrPer = Square.prototype.Perimeter.call(this);
    return sqrPer * 3;
}

var cube2 = new Cube2(6);
console.log(cube2.Side());
console.log(cube2.Perimeter());
cube2.Side(2);
console.log(cube2.Side());
console.log(cube2.Perimeter());