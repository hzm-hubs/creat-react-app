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
1.可直接引入项目根目录下的 .env、.env.*.local 的配置文件。 可以在.env设置一些内容变量通过 dotenv 加载到process.env 中, 自定义变量请 REACT_APP_ 开头
***
eg: 更改项目启动端口号

查看react-scripts 插件中 start.js 文件:
`const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;`
可在.env文件中设置 `PORT='5001'`，通过dotenv设置到process中

***
2.如果是通过 `yarn test` 启动还会自动引入 .env.test 文件

3.同理 `yarn build` 启动会自动引入 .env.production 文件

更多配置说明访问 create-react-app 官方文档 [link][https://create-react-app.dev/docs/adding-custom-environment-variables "create-react-app 教程"]

4.通过 dontenv-cli 插件可设置加载.env文件到启动脚本
在 .env.dev、.env.test、.env.prod 文件中设置变量 `REACT_APP_ENV` 变量
package.json:

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