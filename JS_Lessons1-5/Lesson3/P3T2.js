/*  let a = 9;
let b = 3;
let c = a;
while (c>=b){
    c-=b;
}
alert(c);*/


var n = 549;
while (n>1){
    let p = n%10;
    console.log(p);
    n = parseInt(n /10);
}
/*

a = 2;
b = 11;
var sum=0;
for(x=a; x<=b; x++){
    sum+=x;
}
console.log(sum);

var n = 5;
var p = 1;
for (x=1;x<=n; x++){
    p*=x;
}
console.log(p);
*/
/*
var arr = [];
i = 0;
var t = true;
var sum = 0;

while(t){
    arr[i] = prompt("Введите число: ");
    if ((arr[i] === null)||(isNaN(arr[i]))){
        t = false;
        break;
    }
    arr[i]=parseInt(arr[i]);
    i++;
}

for (i=0;i<arr.length-1;i++){
    sum+=arr[i];
}
alert(sum);


*//*
let a = 3;
let b = 10;
let c = a;
let d = 1;

while (b>=c){
    for(i=1; i<=d; i++){
        console.log(c)
    }
    c++;
    d++;
}



*/


