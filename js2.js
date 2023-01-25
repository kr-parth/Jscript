//Objects

const person = {
    name : 'rahul',
    id : 1,
    age : 20,
    lang : ['eng','hindi','marathi'],
}

for(let i in person){
    console.log(`${i} => ${person[i]}`);
}
var k = Object.keys(person);
console.log(k);

for(let j of k){
    console.log(`${j} => ${person[j]}`);
}

// nested structures

const artist = [
    {id:1,type:"painter",level:"novice"},
    {id:2,type:"singer",level:"amateur"},
    {id:3,type:"designer",level:"proficient"},
]

const [a,,b] = artist;
console.log(a,b);

const [,{type:c},] =artist;
console.log(c);

// arrow func , callbacks

const even_odd = (num) => {
    if(num % 2 === 0){
        return "even"
    }
    else{
        return "odd"
    }
}
const fun1 = () => {
    arr = [2,5,3,8,1]
    arr.sort();
    n = arr[arr.length - 1];
    console.log(n);
    return even_odd(n);
}
const fun2 = (callback) => {
    console.log("the given number is " + callback(42));
}

console.log(fun1());
fun2(even_odd);

//lexical scope

var s = "global";
const myFunc = function(){
    var s = "func";
    console.log(s);
    const af = () => {
        var s = "anonymous";
        return s;
    }
    var temp = af();
    console.log(temp);
}
myFunc();

// defaut and rest parameters

const dr = (a,b=2,...c) => {
    console.log(`a is ${a} , b is ${b} , c contains ${c}`);
}
dr(1);
dr(1,3,5,7,9);

// map,reduce,filter

const ans = artist.map(art => art.type)
console.log(ans);

temp = [1,2,4,5,7,8];

const fil = temp.filter(m => {
    if(m % 2 === 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(fil);

const red = temp.reduce((acc,val) => acc + val);
console.log(red);

const eve = temp.every((e) => e>1);
console.log(eve);

const som = temp.some((s) => s===4);
console.log(som);

const fi = temp.fill(0,1,5);
console.log(fi);

// map data structure

const ds = new Map();
ds.set('name','user');
ds.set('age',10);
ds.set(3,'third');
ds.set([1,2,3],'array');
ds.set(person,{name:'user',num:7});

console.log(ds);
console.log(ds.get(3));
console.log(ds.get(person).num);

for(let key of ds.keys()){
    console.log(key);
}
for(let key of ds){
    console.log(key);
}
