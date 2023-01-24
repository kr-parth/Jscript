//String 

str = `a test "string" for javasript`
console.log("first character " + str[0]);

console.log("string length" + str.length);

console.log("return search result" + str.search("test"));

//Array

arr1 = [1,3,5,7,9];

arr1.push(11);

//for of
for(let num of arr1){
    console.log(num);
}

arr1.push([2,4,6,8]);

console.log("json format : " + JSON.stringify(arr1));

arr1.pop();

arr1.shift();
console.log(arr1);

const obj1 = {
    id : 1,
    status: "on",
    platform: "gcp",
};

const obj2 = {
    rank : 2,
    type : "car",
    name : "tata",
};

const obj3 = {
    num : 3,
    company : "dell",
    series : "latitude",
};

const obj = { ...obj1 , ...obj3 };
console.log(obj);
obj1.service = "cloud";
var val = obj1.service;
console.log(val);

var {id:key1,status:key2} = obj1;
console.log(key1,key2);
