/**
 * 数组去重
 * 1）基本数据类型
 * 2）对引用数据类型无效
 */
const integerArr = [1, 2, 2, 2, 3, 3, 3, undefined, null];
const deduplication = [...new Set(integerArr)];
console.log(deduplication);

const arrA = [1, 3, 5];
const arrB = [1, 4, 6];
const arrC = [...new Set([...arrA, ...arrB])];
console.log(arrC); // [ 1, 3, 5, 4, 6 ]

const complexArrA = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Grid" },
];
const complexArrB = [
  { id: 1, name: "Jack" },
  { id: 3, name: "Bill" },
];
const complexArrC = [...new Set([...complexArrA, ...complexArrB])];
console.log(complexArrC);
//   [
//     { id: 1, name: 'Jack' },
//     { id: 2, name: 'Grid' },
//     { id: 1, name: 'Jack' },
//     { id: 3, name: 'Bill' }
//   ]
