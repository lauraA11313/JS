/*function createArrayIterator(array) {
    var i = 0;
    return function () {
        return array[i++];
    };
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

*/
/*
function safePerim() {
    var num1 = 0;
    var num2 = 0;
    var arr = [];
    arr[0] = function (newNum1, newNum2) {
        if((newNum1>0)&&(newNum2>0)){
            num1 = newNum1;
            num2 = newNum2;
        }
    };
    arr[1] = function () {
        return num1*num2;
    };
    return arr;
}
var perim = safePerim();
perim[0](5, 11);
console.log(perim[1]());
perim[0](-5, 11);
console.log(perim[1]());
 */

var arr = [];

function counter() {
    for (var i = 0; i <= 2; i++) {
        arr[i] = function (i) {
            console.log(i);
        };
    }
    return arr;
}
var smth = counter();
console.log(smth[0](0)); // в консоль должно быть выведено 0
console.log(smth[smth.length - 1](smth.length - 1)); // в консоль должно быть выведено 2













