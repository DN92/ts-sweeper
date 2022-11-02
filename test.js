const someObj = { a: 1, b: 2, c: 3 };
const { ...values } = someObj;

const thing = { ...someObj };

console.log(values);
console.log(thing);

