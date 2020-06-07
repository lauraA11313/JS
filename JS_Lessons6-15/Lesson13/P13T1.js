let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , z] = arr;
console.log(x);
console.log(y);
console.log(z);


let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob"
};
let {first: f, third: x, fifth = 'Name No5'} = names;
console.log(f);
console.log(x);
console.log(fifth);


let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

function format(s, ...v)
{
    tempArr = [], iterForS = 0, iterForV = 0;
    for(var i = 0; i < v.length + s.length; i++)
    {
        if( i%2 == 0 )
        {
            tempArr.unshift(s[iterForS]);
            iterForS++;
        }
        else
        {
            tempArr.unshift(v[iterForV]);
            iterForV++;
        }
    }
    return tempArr.join("");
}

let res1 = format`${1} + ${2} = ${3}`;
console.log(res1);
let res2 = format`Привет ${"Мир "}`;
console.log(res2);
let res3 = format`left${"<->"}right`;
console.log(res3);


function mul(...Rest) {
    var arg = Rest;
    var mul = 1;
    console.log(arg);
    for (i = 0; i < arg.length; i++) {
        if (typeof (arg[i]) == 'number') {
            mul *= arg[i];
        }
    }
    if (mul != 1) {
        return mul;
    } else
        return 0;

}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0


let obj = {
    name: "obj",
    print: function () {
        return prt = () => {
            console.log(name)
        };

    }
};
obj.print();

function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}

multiCaller(obj.print, 3);  // "obj", 3 раза


let server = {
    data: 0,
    convertToString: function (callback) {
        callback((function () {
            return this.data + "";
        }).bind(this));
    }
};
let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (function (callback) {
            this.result = callback();
        }).bind(this);
    }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


