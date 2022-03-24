import moment from 'moment'
/*
const [c1, c2] = 'hello';

console.log(c1);
console.log(c2);

const str = 'hello'
console.log(str[Symbol.iterator]);

*/

/*
const arr = [{ type:1, id:10}, [ [{ type:2, id:10}, null], 
{ type:4, id:10}, undefined ], { type:5, id:10}];


function flatD(arr, d = 1) {
  if(undefined !== arr && null !== arr)
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatD(val, d - 1) : val), [])
               : arr.slice();
  return [];
};

let res = flatD(arr, 10);
// arr.reduce((acc, val) => acc.concat(val), []);
console.log(res);

res = res.filter(x => x !== null && x !== undefined);
console.log(res);
*/

/*
let arr1 = [{id: 1}, {id: 2}];

let arr2 = [{id: 3}, {id: 4}];

let arr3 = arr1.push(arr2);

console.log(arr1);
*/

/*
function add(a, b)
{
  console.log(`Add : ${a} + ${b} = ${a+b}`);
}

function sub(a, b)
{
  console.log(`Sub : ${a} - ${b} = ${a-b}`);
}

const TestClass = function(test) {
  this.id = test.id;
}

TestClass.Make = function()
{ 
  this.fmap = new Map();
  this.fmap['add'] = add;
  this.fmap['sub'] = sub;
}

TestClass.Make();

TestClass.Call = function(fname, ...args)
{
  let f = this.fmap[fname];
  if(f)
    f(...args);
  else
    console.log(`Not Found Function : ${fname}`);
}

TestClass.Call('add', 1, 2);
TestClass.Call('sub', 5, 2);
TestClass.Call('mul', 5, 2);

*/

/*
function ooo()
{
  return { gains: {abc: 1}, view: [1, 2, 3]};
}

let {gains, view} = ooo();
console.log(gains);
console.log(view);
*/
/*
let str = '[{"id": 1, "val":1}, {"id":2, "val":2}]';
let obj = JSON.parse(str);

console.log(obj);
console.log(Object.prototype.toString.call(obj));


let str2 = '{"1":{"id": 1, "val":1}, "2":{"id":2, "val":2}}';
let obj2 = JSON.parse(str2);

console.log(obj2);
console.log(Object.prototype.toString.call(obj2));
*/

const today = moment.utc().toJSON()

const inputtime = moment.unix(0);

console.log(inputtime.format());