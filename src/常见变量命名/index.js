// 真值
const truthy =
  true || [] || {} || Infinity || -Infinity || new Set() || new Map();

// 虚值/假值
const falsy = false || null || undefined || 0 || "" || NaN;

// 空值
const nullish = undefined || null || "";
