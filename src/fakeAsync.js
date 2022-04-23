/**
 * 模拟异步请求
 * @returns Promise<boolean>
 */
function fakeAsyncRequest() {
  const result = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, 5000);
  });
}

// 最外层无法使用await关键字，故声明一个asyncCall函数承接
async function asyncCall() {
  console.time("asyncProcessTime");
  const data = await fakeAsyncRequest();
  console.timeEnd("asyncProcessTime");
}

asyncCall(); // asyncProcessTime: 5.004s
