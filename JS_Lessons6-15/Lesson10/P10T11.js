console.log ("Task1");

function sumSliceArray (arr, first, second) {
    if(first < 0 || first > arr.length || typeof(first) !== 'number' || second < 0 || second > arr.length || typeof(second)!=='number') {
        throw new Error("ta za sho");
    }
    return arr[first] + arr[second];
}

var arr = [0, 1, 2, 3, 4, 5];
try {
    var ans1 = sumSliceArray(arr, 2, 5);
    console.log(ans1);
} catch(Error) {
    console.log(Error.name);
    console.log(Error.message);
    console.log(Error.stack);
}

try {
    var ans2 = sumSliceArray(arr, "beee", -677);
    console.log(ans2);
} catch(Error) {
    console.log(Error.name);
    console.log(Error.message);
    console.log(Error.stack);
}