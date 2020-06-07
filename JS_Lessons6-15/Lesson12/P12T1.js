function rect(x1, y1, x2, y2)
{
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
}
rect.prototype.tostring = function()
	{
		console.log("coords of left upper angle ( "+this.x1+" ; "+this.y1+" )");
		console.log("coords of right lower angle ( "+this.x2+" ; "+this.y2+" )");
	};
rect.prototype.valueof = function()
	{
		var per = 2*(math.abs(this.x1-this.x2)+math.abs(this.y1-this.y2));
		console.log("the perimeter of this rect is "+per);
	};

var rect = new rect(5, 8, 7, 4);
rect.tostring();
rect.valueof();


var userNames = 'LauraA, BbToo, DoReMI, StttK, KatieP';
var userNamesArr = userNames.toLowerCase().split(',');
console.log(userNamesArr);



var Arr = [];
k = 0;
do
{
	i = k;
	Arr[i] = prompt('Enter');
	k++;
}
while( Arr[i]!="end");
Arr.pop();


var newArr = [];
for(i = 0; i < Arr.length; i++)
{
	if(Arr[i].indexOf(1)!=-1 || Arr[i].indexOf(2)!=-1 || Arr[i].indexOf(2)!=-1
		|| Arr[i].indexOf(4)!=-1 || Arr[i].indexOf(5)!=-1 || Arr[i].indexOf(6)!=-1
		|| Arr[i].indexOf(7)!=-1 || Arr[i].indexOf(8)!=-1 || Arr[i].indexOf(9)!=-1)
	{
		newArr[i] = 'Numbers: '.concat(Arr[i]);
	}
	else
	{
		newArr[i] = Arr[i];
	}
}




for(i = 0; i < Arr.length; i++)
{
	console.log(Arr[i]+'				'+newArr[i]);
}




function addTwoDays(date)
{
	date.setDate(Number(date.getDate())+2);
	return date;
}

var date = new Date('27 May 2020');
console.log(date.getDate());//27
var newDate = addTwoDays(date);
console.log(newDate.getDate());//29




var array = ['Jazz', 'Blues'];
console.log(array);
array.push('Rock-n-Roll');
console.log(array);
array[array.length - 2] = 'Classic';
console.log(array);
console.log(array.shift());
console.log(array);
array.unshift('Rap', 'Reggae');
console.log(array);




Array.prototype.sortDesc = function ()
{
	return this.reverse(this.sort());
}

var arr = [5, 1, 4, 2, 3];
arr.sortDesc();
console.log(arr); // [5, 4, 3, 2, 1]




function deleteEvenNumbers(array)
{
	function condition(value)
	{
		return value%2==1;
	}
	var arr = array.filter(condition);
	return arr;
}

var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]




var arr = ["Tom", "Sam", "Bob"];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
   arrLength[i] = "<li>" + arr[i] + "</li>";
}
console.log(arrLength);
function li(value)
{
	return '<li>'+value+'<li>';
}
console.log(arr.map(li));




function matrixToArray(matrix) {
	function reducer(accum, curVal)
	{
		return accum+','+curVal;
	}
   var arr = matrix.reduce(reducer);
   arr = arr.split(',');
   return arr;
}
var arr = [[1, 2], [3, 4, 5], [6, 7, 8], [9]];
var arr = matrixToArray(arr);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

