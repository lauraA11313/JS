function multiply() {
    var res = 1;
    for (var i = 0; i < arguments.length; i++) {
 		if (typeof(arguments[i]) == "number") {
 			res *= arguments[i];
 		}
 	}
	if (res === 1) {
 		return 0;
 	}
 	return res;
}

console.log(multiply(2, 5, 6, 9));
console.log(multiply(1, "str", 2, 3, true)); // 6
console.log(multiply(null, "str", false, true)); // 0