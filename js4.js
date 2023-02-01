function func1(par1,par2,cb){
    if(typeof par1 === "string" && typeof par2 === "string"){
        cb(par1,par2);
    }
    else{
        console.log(`data type didn't matched`);
    }
}

function cb(str1,str2){
    str = str1.concat(str2);
    console.log(`concatenated string is ${str}`);
}
func1("hel","lo",cb);

// Asynchronous 

setTimeout(() => {
    console.log(`set timeout called`);
},2000);

const id = setInterval(() => {
    console.log(`randomly generated number is ${Math.random()}`);
},1000)

setTimeout(() => {
    clearInterval(id);
    console.log(`cleared`);
},5000);

let heading = document.querySelector(".heading1");
setTimeout(() => {
    heading.style.color = "red";
    setTimeout(() =>{
        heading.style.color = "green"
        setTimeout(() => {
            heading.style.color = "blue"
        },1000);
    },1000)
},1000);

// Promise , async , await

// function tst(a,b){
//     chk = typeof a == 'number' && typeof b == 'number'
//     return new Promise((res,rej) => {
//         if(chk){
//             res(a+b)
//         }
//         else{
//             rej('invalid')
//         }
//     })
// }

// tst(4,5).then((val) => {
//     return val
// })
// .then((v) => {
//     console.log(v);
// })

async function harry() {
    let delhiWeather = new Promise( (resolve, reject) => {
            resolve("27 Deg")
        })
    let bangaloreWeather = new Promise((resolve, reject) =>{
            resolve("21 Deg")
    })
    let delhiw =  await delhiWeather.then((val) => {
        return val+" promise chain"
    })
    console.log("Fetched Delhi Weather:" + delhiw)
    let banglorew =  await bangaloreWeather
    console.log("Fetched Banglore Weather:" + banglorew)
}

let a = harry()

