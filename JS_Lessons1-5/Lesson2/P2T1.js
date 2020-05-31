var a = prompt("сторона квадрата равна:", "1");
s=a*a;
alert("Площадь квадрата =  "+s);


var num = prompt("введите двузначное число:", "11");
alert("Десятки "+( parseInt(num/10)));
alert("Единицы "+( num%10));

a=1;
b=1;
console.log(a>2);
console.log(b<=3);

a=3;
b=5;
c=2;
console.log(a<b&&b<c);

var num = prompt("введите число:", "111");
isOdd3Dig = num % 2 == 0 && num>99 && num<1000;
alert("Is a 3-digit odd?"+isOdd3Dig);
