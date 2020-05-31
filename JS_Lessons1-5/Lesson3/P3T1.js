let x = prompt("Веедите число ");
if (x>0){
    x+=2;
}   else if (x==0){
    x=10;
}   else{
    x-=2;
}
console.log(x);



    if (x===0){
        alert("Нулевое число");}
    else if (x>0 && x%2===0){
        alert("Полож. четное");}
    else if (x<0 && x%2===0){
        alert("Отрицат. четное");}
    else if (x>0 && x%2!==0){
        alert("Полож. нечетное");}
    else if (x<0 && x%2!==0){
        alert("Отриц. нечетное");}
    else{
        alert("Неведомая хрень");}

let arr = [1,2,1,1];
if (arr[0]===arr[1]){
    if(arr[0]===arr[2]){
        alert("4");}
    else {
        alert("3");
    }
}
else if (arr[0]===arr[2]){
    alert("2");}
else{alert("1");}


k = prompt("Ваша оценка");
switch (k){
    case "1":
        alert("Плохо");
        break;
    case "2":
        alert("Неудовлетворительно");
        break;
    case "3":
        alert("Удовлетворительно");
        break;
    case "4":
        alert("Хорошо");
        break;
    case "5":
        alert("Отлично");
        break;
    default:
        alert("Ошибка")
}