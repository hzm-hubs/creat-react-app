## 1. 使用通用的脚手架 create-react-app 创建应用

npx create-react-app <project-name>

![img](/documents/img/start.png "start.png")
脚手架会安装 react、react-dom、react-scripts 等插件

## 2.运行服务

1.`yarn start`

2.`yarn test`

3.`yarn build`

更多解释说明见同级 run-scripts.md 文档

## 3.react-scirpts 插件 有引入 dotenv、dotenv-expand 插件

1.可直接引入项目根目录下的 .env、.env.\*.local 的配置文件。 可以在.env 设置一些内容变量通过 dotenv 加载到 process.env 中, 自定义变量请 REACT*APP* 开头

---

eg: 更改项目启动端口号

查看 react-scripts 插件中 start.js 文件:
`const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;`
可在.env 文件中设置 `PORT='5001'`，通过 dotenv 设置到 process 中

---

2.如果是通过 `yarn test` 启动还会自动引入 .env.test 文件

3.同理 `yarn build` 启动会自动引入 .env.production 文件

更多配置说明访问 create-react-app 官方文档 [link][https://create-react-app.dev/docs/adding-custom-environment-variables "create-react-app 教程"]

4.通过 dontenv-cli 插件可设置加载.env 文件到启动脚本
在 .env.dev、.env.test、.env.prod 文件中设置变量 `REACT_APP_ENV=development` 、`REACT_APP_ENV=` 、`REACT_APP_ENV=production`

在 package.json 配置启动命令:

`
…………

    "scripts": {

        "dev": "dotenv -e .env.dev react-scripts start",

        "dev:test": "dotenv -e .env.test react-scripts start ",

        "dev:prod": "dotenv -e .env.prod react-scripts start",

        …………
    },

    …………

`

## 4. 通过 craco 设置路径别名

create-react-app （CRA）生成的项目，会通过 react-scripts 有自己的 webpack 设置。默认没有加载
根目录下的 jsconfig.json、tsconfig.json 文件的逻辑，或者是有自己的逻辑（因为当我创建 tsconfig.json 文件运行项目会提示我项目没有引入 Typescript ）。但我们可以通过 craco 插件设置路径别名，并更改启动脚本使其生效

1. 在根目录创建 craco.config.json

`
const path = require('path');

    module.exports = {

        webpack: {

            alias: {

                '@': path.resolve(__dirname, 'src/'),

            },

        },

    };

`

2. 修改 package.json 中的启动命令为 craco

`"dev": "dotenv -e .env.dev react-scripts start",`

换到

`dotenv -e .env.dev craco start`

ps: 也可以使用 react-app-rewired 和 customize-cra 插件

## 参考的搭建文档 [link][https://bbs.huaweicloud.com/blogs/370666]

## 5. 引入 react-router-dom

`<BrowserRouter>`  
v6 版本以后 `<Routes>` 替换 `<Switch>` 根据浏览器路径匹配某一 `<Route>` 显示
