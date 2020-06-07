console.log ("Task2");

function sumSliceArray (arr, first, second){
    if (first < 0 || first > arr.length || typeof(first) !== 'number' || second < 0 || second > arr.length || typeof(second)!=='number') {
        console.log("ta za sho");
		return 'ты бе, не посчитаю';
    }
return arr[first] + arr[second];
}

var arr = [0, 1, 2, 3, 4, 5];

var ans1 = sumSliceArray(arr, 0, 4);
console.log(ans1);

var ans2 = sumSliceArray(arr, -13, 5);
console.log(ans2);

var ans3 = sumSliceArray(arr, 2, 'beeee');
console.log(ans3);
