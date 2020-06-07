function createPromiseRandom(min, max, delay) {
   return new Promise(function (resolve, reject) {
    setTimeout(function () { 
      if(min<max){
       resolve(Math.random()*100);
      } else {
        reject("error")
      }
      }, delay)
   });
}
let p1 = createPromiseRandom(1, 100, 2000);
p1.then(function (result) { 
   console.log(result); 
   }, 
   function (error) { 
     console.log(error); 
   });
let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(function (result) { 
   console.log(result); 
   }, 
   function (error) { 
     console.log(error); 
   });






new Promise(function (resolve, reject) {
  let d = prompt("Number1", ""); 
  if (isNaN(d)) { 
   reject("nan"); 
 } else { 
  resolve(d);}


}).catch(function (error) {
  console.log(error);
   return new Promise(function (resolve, reject) {
      do {
        var sss = prompt("Number2", "");
      } while(isNaN(sss));
      resolve(sss);
   });
}).then(function (result) {
   console.log(result);
});

