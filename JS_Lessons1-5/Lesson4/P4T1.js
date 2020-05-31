/*function pow(x, n) {
    var res = 1;
    for (var i = 0; i < n; i++) {
        res *= x;
    }
    console.log(res);
}

pow(3, 3);
*/
/*
function minMax(x,y) {
    if (x>y){
        return y;
    }
    else{
        return x;
    }
}

console.log(minMax(55,12));
*/
/*
function sign(x) {
    if (x<0){
        return -1;
    }
    else if(x=0){
        return 0;
    }
    else {
        return 1;
    }
}

console.log(sign(-10));
*/
/*
function calc(x, y, op) {
    switch (op) {
        case 1:
            return x-y;
            break;
        case 2:
            return x*y;
            break;
        case 3:
            return x/y;
            break;
        default:
            return x+y
    }
}

console.log(calc(4,6,2));
*/

function digitN(k,n) {
    arr = Array.from(k);
    if (arr.length < n) {
        return -1;
    } else {
        return arr[arr.length-n];
    }
}

k = prompt("Введите число: ");
n = prompt("Введите порядок цифры в числе: ");

alert(digitN(k, n));

