/**
 * 防抖：当一个函数在一个时间分片内连续触发，只执行最后一次。
 * 适用场景：
 * 1)搜索框搜索输入。只需用户最后一次输入完，再发送请求
 * 2)用户名、手机号、邮箱输入验证
 * 3)浏览器窗口大小改变后，只需窗口调整完后，再执行resize事件中的代码，防止重复渲染
 */

/**
 * 防抖函数 - ES6
 * @param {*} fn - 具体执行的函数
 * @param {*} delay - 时间分片间隔
 * @returns
 */
function debounce(fn, delay) {
  // timer定时器
  let timer = null;
  // 返回一个闭包函数，用闭包保存timer确保其不会销毁，重复点击会清理上一次的定时器
  return function () {
    // 保存事件参数，防止fn需要事件参数里的数据
    let args = arguments;
    // 调用一次就清除上一次的定时器
    if (timer) {
      clearTimeout(timer);
    }
    // 开启本次的定时器
    timer = setTimeout(() => {
      // 若不改变this指向，则会指向fn定义环境
      fn.apply(this, args);
    }, delay);
  };
}

// 测试用例
window.addEventListener(
  "scroll",
  debounce(() => {
    console.log("debounce trigger");
  }, 3000)
);
