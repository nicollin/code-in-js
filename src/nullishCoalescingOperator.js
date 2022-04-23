/**
 * 空值合并运算符
 * 左侧操作数为null或者undefined时，返回右侧操作数
 * 更多内容参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 */
function validateValueIsNulliish(value) {
  if ((value ?? "") !== "") {
    return true;
  } else {
    return false;
  }
}

const validUndefined = validateValueIsNulliish(undefined);
const validNull = validateValueIsNulliish(null);
const validSting = validateValueIsNulliish("");
const validZero = validateValueIsNulliish(0);
const validArray = validateValueIsNulliish([]);
const validaFalse = validateValueIsNulliish(false);
const validNaN = validateValueIsNulliish(NaN);

console.log(validUndefined); //  false
console.log(validNull); // false
console.log(validSting); // false
console.log(validZero); // true
console.log(validArray); // true
console.log(validaFalse); // true
console.log(validNaN); // true

const setNumber = 0 ?? null;
const setString = "" ?? null;
const setBoolean = false ?? null;

console.log(setNumber); // 0
console.log(setString, typeof setString); // ''
console.log(setBoolean); // false
