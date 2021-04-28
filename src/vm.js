const vm = require("vm");

// const x = 1;

// const context = { a: 2,b:3 };
// vm.createContext(context); // Contextify the object.

// const code = "x += 40; var y = 17;";
// const add =`function add(a,b) { return a+b} add(1,2)`
// // `x` and `y` are global variables in the context.
// // Initially, x has the value 2 because that is the value of context.x.
// vm.runInContext(add, context);

// console.log(context.x); // 42
// console.log(context.y); // 17

// console.log(x); // 1; y is not defined.

const script = new vm.Script(`
function add(a, b) {
  return a + b;
}

const x = add(1, 2);
`);

const cacheWithoutX = script.createCachedData();

script.runInThisContext();

const cacheWithX = script.createCachedData();
