// ES6-可选链操作符
const object = {
  id: "9527",
  name: "Jack",
};

const existentProperty = object?.id;
const inexistentProperty = object?.age;

console.log(existentProperty); // 9527
console.log(inexistentProperty); // undefined
