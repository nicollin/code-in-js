/**
 * 对象合并
 * 1）合并后的对象会保留对象下不重名的属性
 * 2）对应重名的属性，合并后对象的属性值取决于最后合并的对象
 */
const objA = {
  name: "Jack",
  sex: 1,
};

const objB = {
  name: "Mick",
  age: 18,
};

const objC = { ...objA, ...objB };
const objD = { ...objB, ...objA };

console.log(objC); // { name: 'Mick', sex: 1, age: 18 }
console.log(objD); // { name: 'Jack', age: 18, sex: 1 }
