# 项目创建步骤

1)初始化项目

```shell
mkdir code-in-js
cd code-in-js
npm init -y
git init
```

新建并配置`.gitignore`文件，内容如下：

```json
node_modules
package-lock.json
```

2)下载babel

```shell
npm install babel-cli -g
npm install --save babel-core babel-preset-env
```

3)根目录新建并配置`.babelrc`文件，内容如下：

```json
{
    "presets": [
        "env"
    ],
    "plugins": []
}
```

4)自定义npm指令

```json
{
    "scripts": {
        "babel": "babel-node --presets env"
    }
}
```

自此：

- 控制台编译普通js文件使用：`node [filename].js`
- 控制台编译使用`ES6 import\export`的js文件使用：`npm run babel [filePath]`（**filePath**指文件相对于项目目录的相对路径）

***

5)参考

- [node.jsES6中import报错解决方案](https://juejin.cn/post/7017431778293973022)
