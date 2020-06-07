function GeometricFigure(centerX, centerY) {
    this.__centerX = centerX;
    this.__centerY = centerY;
}

GeometricFigure.prototype.CenterX = function (num) {
    if(num === undefined) {
        return this.__centerX;
    } else {
        if(typeof(num) === "number") {
            this.__centerX = num;
        }
    }
}

GeometricFigure.prototype.CenterY = function (num) {
    if(num === undefined) {
        return this.__centerY;
    } else {
        if(typeof(num) === "number") {
            this.__centerY = num;
        }
    }
}

function Rectangle (centerX, centerY, diag) {
    GeometricFigure.call(this, centerX, centerY);
    this.__diag = diag;
}

Rectangle.prototype = Object.create(GeometricFigure.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.Diag = function (num) {
    if(num === undefined) {
        return this.__diag;
    } else {
        if(typeof(num) === "number") {
            this.__diag = diag;
        }
    }
}

Rectangle.prototype.Info = function() {
    console.log("Center of rectangle are ( ", this.__centerX, " ; ", this.__centerY, " )");
    console.log("The diagonal is ", this.__diag);
}

function Circle(centerX, centerY, radius) {
    GeometricFigure.call(this, centerX, centerY);
    this.__radius = radius;
}

Circle.prototype = Object.create(GeometricFigure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.Radius = function (num) {
    if(num === undefined) {
        return this.__radius;
    } else {
        if(typeof(num) === "number") {
            this.__radius = radius;
        }
    }
}

Circle.prototype.Info = function() {
    console.log("Center of circle are ( ", this.__centerX, " ; ", this.__centerY, " )");
	console.log("The radius is ", this.__radius);
}

var rect = new Rectangle(3, -3, 13);
rect.Info();
var circle = new Circle(-6, 1, 2);
circle.Info();