// 解构赋值
class RandomObj {
  name = "";
  age = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const object = new RandomObj("Jack", 18);
// 1.使用解构赋值从对象中取属性值，如果对象下属性不存在，返回undefined
// 2.解构赋值可以重命名对象下的属性值
// 3.解构赋值的对象不能为undefined、null，因此被解构的对象最好加一个默认的空对象值
const { sex, age, name } = object || {};
const { sex: objSex, age: objAge, name: ObjName } = object || {};
console.log(sex, age, name); // undefined 18 Jack
console.log(objSex, objAge, ObjName); // undefined 18 Jack
