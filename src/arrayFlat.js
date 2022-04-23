// 数组扁平化

const arr = [1, [2, [3, 4]], 5, [6], [7, 8]];

/**
 * 递归实现方式
 * @param {number[]} arr
 * @returns {number[]}
 */
const recursion = (arr) => {
  let res = [];
  arr.map((item) => {
    if (Array.isArray(item)) {
      res = res.concat(recursion(item));
    } else {
      res.push(item);
    }
  });
  return res;
};

console.log(recursion(arr)); // [1,2,3,4,5,6,7,8]

/**
 * reduce函数实现方式
 * @param {number[]} arr
 * @returns {number[]}
 */
const flatByReduce = (arr) => {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatByReduce(item) : item);
  }, []);
};

console.log(flatByReduce(arr)); // [1,2,3,4,5,6,7,8]

/**
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
const flatByFlat = (arr) => {
  return arr.flat(Infinity);
};

console.log(flatByFlat(arr)); // [1,2,3,4,5,6,7,8]
