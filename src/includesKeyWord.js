import Mockjs from "mockjs";

/**
 * includes关键字
 */

function test() {
  const randomInteger = Mockjs.Random.integer(1, 8);
  const truthyOptions = [1, 4, 5, 8];
  if (truthyOptions.includes(randomInteger)) {
    console.log("randomInteger is truthyOption");
  }
}
test();
