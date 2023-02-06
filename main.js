// function foo(inp) {
//   let a = 100;
//   if (inp) {
//     let b = a + 1;
//     var c = a + 1;
//   }
//   console.log(c);
//   console.log(b);
// }

// // foo(true);
// function abc() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }
// async function asyncCall() {
//   console.log("calling");
//   var result = await abc();
//   console.log(result);
// }
// asyncCall();
// console.log("has called");

// function myfunc(...params) {
//   return params;
// }
// let a = myfunc(1, 23, 4);

// console.log(a);

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const c = [...a, ...b];
// console.log(c);

// const { foo, bar } = {
//   foo: "FOO",
//   bar: "BAR",
// };
// console.log(foo, bar);

// const a = [1, 2, 3, 4];
// const b = a.map((x) => x + 1);
// console.log(a);
// console.log(b);

// const add = (a = 10, b = 5) => console.log(a + b);
// add(5, 4);
// add(3);
// add(null, 9);
// add(undefined, 9);
// add();

const a = [1, 3, 4, 2, 7, 9, 10, 6, 8];
const b = [1, 3, 9, 11, 5, 7, 13];
// const a = [1, 2, 3, 4, 5, 5];
// const b = [1, 2, 2, 3, 5, 5];
// const a = [1, 2, 3, 4, 5];
// const b = [``];
const c = [];
for (let x of a) {
  if (b.length === 0) break;
  if (b.includes(x)) {
    c.push(x);
    const index = b.indexOf(x);
    b.slice(index, 1);
  }
}
console.log(c);
