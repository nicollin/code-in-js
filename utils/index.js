/**
 * 定时执行函数，无终止
 * @param {*} fn - 具体执行的函数
 * @param {*} delay - 间隔时间
 */
export const waitForLimitless = (fn, delay) => {
  setInterval(() => {
    fn.apply(this);
  }, delay);
};

/**
 * 定时执行函数，持续limitedTime时间后结束
 * @param {*} fn - 具体执行的函数
 * @param {*} delay - 间隔时间
 * @param {*} limitedTime - 总时长
 * @returns
 */
export const waitForLimited = (fn, delay, limitedTime) => {
  if (limitedTime < delay) return;
  let handle = setInterval(() => {
    fn.apply(this);
  }, delay);

  setTimeout(() => {
    clearInterval(handle);
  }, limitedTime);
};
