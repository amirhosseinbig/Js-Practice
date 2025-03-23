// let x = 0.3 - 0.2;
// let y = 0.2 - 0.1;

// let big = 100000250000013;
// let bif2 = BigInt(big);

// console.log(big);

// let time = Date.now();
// let date = new Date();
// let time_milli = date.getTime();
// let iso = date.toISOString();

// console.log(time_milli);
// console.log(date);
// console.log(iso);

// let text = "  hello world!   ";



// console.log(text.trim());


// // let text2 = "texting: 1 , 2 , 3";
// // let pattern = /\d+/g;

// // console.log(pattern.test(text2));

// let email ="Email: text123@example.com";
// let text2 = "https://mrgool.netlify.app/?flower_id=amit";

// // let pattern = /\w+@\w+\.\w+/;
// // let pattern = /(?<=\$)\D+/;
// let pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

// let output = pattern.exec(iso);
// console.log(output.groups.year);
// console.log(pattern.test(text2));
// console.log(text2.match(pattern));
// console.log("$100$ USD".match(/(?<=\$)\d+/));  // Matches digits after $

// let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
// let pass = "mir123abf41@";

// console.log(passwordPattern.test(pass));


let text = "09944067738";
let pattern = /^09\d{9}$/;

console.log(pattern.test(text))
console.log(text.match(pattern))




// Symbols

let mySymbol = Symbol("myid");
let mySymbol2 = Symbol("myid");

const obj = {
    name: "Amir",
    [mySymbol]: 12
}

console.log(obj[mySymbol]);


let x = 33;
let y = x + "" ;

console.log(typeof(x.toString()));
console.log(x.toString(16));


const amir = 3;


console.log(amir);


// let [a,...b] = [1,2,3];

// console.log(a,b)


let {sin : deg,cos,tan} = Math;

console.log(deg,cos,tan);

let user = null;
console.log(user?.name); // undefined (به‌جای خطا)

let point = {x:10,y:20};

console.log("x" in point)

let arr = [40,30,20];

console.log(20 in arr);


let u = 5;
let p = 2;
u <<= p
console.log(u);

const {cos:Cosine , sin:Sinus} = Math;

console.log(Sinus(Math.PI / 2))

const my = {
    function:{
    add:(num) => num + 10,
    multiply:(num => num * 2)
}}

let m = "multiply";
console.log(my.function[m](5))

console.log(5 - 6 - 10)

let i = 1,j=++i;

console.log(~5 & 1);

let str1 = "null";


let str2 = "abana";

// console.log(str1.localeCompare(str2));
console.log(str1 && str1);

let maxwidth = 2;
let maxwstWidth = 50;
let max = maxwidth ?? maxwstWidth ?? 550;

console.log(max)

let o = {x:10,age:15};

console.log(o.hasOwnProperty("x4"));
let P;

// let cobj = function copy(o,p){
//     p = o || {};
//     return p;
// }

function copy(o, p={}) {p = o};

console.log(copy(o,P))

let nums = [1,2,3,4,5];

for(let index of nums){
    console.log(index)
}

delete nums[1]
console.log(nums)

    
    let w = 0;
   while(w < nums.length){
    nums[w++] *= 2;
   }
   
console.log(nums);


function Azimi(Name){
    
} 

let s = 5;
s > 0 ? console.log("yes") : console.log("no");

let obj2 = new Object(obj);

console.log(obj2)

let z = 1;
let aq =0;

if((z==0) || (aq == 0));
    console.log("yes")

let frequency = {};

for(let element of "Amirhossein"){
    if(frequency[element]){
        frequency[element]++;
    }else{
        frequency[element] = 1;
    }
}

let str = new Set("Amirhossein");

console.log(str);

let matrix = [
[1,2,3],
[4,5,6],
[7,8,9]
];

mainloop:for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
        
        if(~(matrix[i][j]) & 1 == 1 ){
            console.log(matrix[i][j]);
             continue mainloop;
        }
    }
}

function* proccess(){
    yield 1;
    yield 2;
    yield 3;
}

let procc = proccess();


let result;

while (!(result = procc.next()).done) {
    console.log(result.value); // 1, 2, 3
}

function fact(n){

    if(n < 0) {throw new Error("Negative numbers are not allowed")}else{
        console.log(n);
    };

    
}

fact(5);


try{
    let x = cd + 1;
}catch(e){
    console.log("خطا رخ داد" + e.message);
    let cd = 0;
}finally{
    console.log("Always this code going to run")
}

let nobj = new Object();

let sym1 = Symbol("Id");
let obj3 = {
    name:"amir",
    age:15,
    [sym1] : 12,
}

Object.defineProperty(obj3, "num" , {
    value:12,
    enumerable:false
}
)

let copbj = JSON.stringify(obj3)
let res = {...obj3};
console.log(res);
console.log(copbj);
console.log(Reflect.ownKeys(obj3));

let arr2 = [1,2,3,4];

arr2.pop()

for(let letter of arr2.entries()){
    console.log(letter);
}

let list = [0,1,2,3,4,5,6,7,8,9,10];

list.forEach(index => console.log(index));
let newlist = list.map(num => num*2);
let filter = list.filter(x => x<5)
console.log(newlist)
console.log(filter)

console.log(list.findIndex(x => x > 6));

let resultevery = list.every(x => x > 0); //false

let resultSome = list.some(x => x > 10); //true

console.log(resultSome)

let numList = [1,2,3,4,5];

let sum = numList.reduce((a,c) => console.log(a,c) , 0); //=> 15 , the second argument is the initial value of sum = 0;

console.log(sum);


let listFlat = [1,2,[3,4,[5,6]]];

console.log(listFlat.flat(2))
console.log(listFlat.flat())

console.log(numList.slice(0,3));
console.log(numList.slice(1,-3));

// console.log(numList.splice(0,2))
console.log(numList.splice(1,3,"a","b","c")) //=> insert
console.log(numList) // => [3,4,5]