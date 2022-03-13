/**
 * 节流：在一定的时间分片内同一事件只会触发一次，进入下一个时间分片才会再次触发
 * 使用场景：
 * 1)与业务相关的触发按钮、搜索框等，一般都会调用后端异步方法
 * 2)监听页面滚动触发事件
 */

/**
 * 法一：时间戳首节流、第一次会触发事件立即执行
 * @param {*} fn - 具体执行函数
 * @param {*} delay - 时间分片间隔
 */
function throttleInBegin(fn, delay) {
  // 记录第一次的调用时间
  let prev = null;
  // 返回闭包函数
  return function () {
    // 保存事件参数
    const args = arguments;
    // 记录触发时间
    const now = Date.now(); // new Date().getTime()
    // 如果触发时间减去上一次触发时间大于等于时间分片间隔
    if (now - Number(prev) >= delay) {
      // 执行函数
      fn.apply(this, args);
      // 更新触发时间
      prev = now;
    }
  };
}

/**
 * 法二：定时器尾节流、第一次要等到满足一个时间分片间隔后才执行
 * @param {*} fn - 具体执行函数
 * @param {*} delay - 时间分片间隔
 */
function throttleInEnd(fn, delay) {
  // 重置定时器
  if (timer) {
    clearTimeout(timer);
  }
  // 返回闭包函数
  return function () {
    // 记录事件参数
    const args = arguments;
    // 如果定时器为null
    if (!timer) {
      // 重置定时器
      let timer = setTimeout(() => {
        // 执行函数
        fn.apply(this, args);
        // 目标函数执行后重置定时器
        timer = null;
      }, delay);
    }
  };
}

/**
 * 法三：时间戳&定时器、第一次马上执行；最后一次也会执行
 * @param {*} fn - 具体执行函数
 * @param {*} delay - 时间分片间隔
 */
function throttle(fn, delay) {
  // 初始化
  let timer = null,
    prev = null;
  let now = Date.now(); // new Date().getTime()
  // 返回闭包函数
  return function () {
    // 保存事件参数
    const args = arguments;
    // 记录触发事件时间
    const now = Date.now(); // new Date().getTime()
    // 记录间隔时间
    const remainTime = delay - (now - Number(prev));
    // 第一次立即执行，最后一次也会执行
    if (remainTime <= 0) {
      now.apply(this, args);
      prev = Date.now(); // new Date().getTime()
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}
