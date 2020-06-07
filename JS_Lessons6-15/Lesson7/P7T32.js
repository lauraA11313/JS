var salaries1 = {
    John: 100,
    Bill: 300,
    Mike: 250
};

var salaries2 = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50,
};

function calcMaxSal(obj) {
    var max = 0;
    for (var key in obj) {
         if(obj[key] > max) {
         	max = obj[key];
         }
    }
    return max;
 }

var res1 = calcMaxSal(salaries1);
var res2 = calcMaxSal(salaries2);
console.log(res1);
console.log(res2);