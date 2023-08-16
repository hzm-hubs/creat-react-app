## 1. 使用通用的脚手架 [create-react-app](https://create-react-app.dev/docs/getting-started) 创建应用

npx create-react-app <project-name>

![img](/documents/img/start.png "start.png")
脚手架会安装 react、react-dom、react-scripts 等插件

## 2.运行服务

+ `yarn start`

+ `yarn test`

+ `yarn build`

 更多解释说明见同级 run-scripts.md 文档

## 3.react-scirpts 插件 有引入 dotenv、dotenv-expand 插件

#### 3.1 可直接引入项目根目录下的 .env、.env.\*.local 的配置文件。 可以在.env 设置一些内容变量通过 dotenv 加载到 process.env 中, 自定义变量请 REACT*APP* 开头

---

eg: 更改项目启动端口号

查看 react-scripts 插件中 start.js 文件:
`const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;`
可在.env 文件中设置 `PORT='5001'`，通过 dotenv 设置到 process 中

---

#### 3.2 如果是通过 `yarn test` 启动还会自动引入 .env.test 文件

#### 3.3 同理 `yarn build` 启动会自动引入 .env.production 文件

更多配置说明访问 create-react-app 官方文档 [link][https://create-react-app.dev/docs/adding-custom-environment-variables "create-react-app 教程"]

#### 3.4 通过 [dontenv-cli](https://www.npmjs.com/package/dotenv-cli) 插件可设置加载.env 文件到启动脚本
在 .env.dev、.env.test、.env.prod 文件中设置变量 `REACT_APP_ENV=development` 、`REACT_APP_ENV=` 、`REACT_APP_ENV=production`

在 package.json 配置启动命令:

```
    …………

    "scripts": {

        "dev": "dotenv -e .env.dev react-scripts start",

        "dev:test": "dotenv -e .env.test react-scripts start ",

        "dev:prod": "dotenv -e .env.prod react-scripts start",

        …………
    },

    …………

```

## 4. 通过 [craco](https://www.npmjs.com/package/@craco/craco) 设置路径别名

create-react-app （CRA）生成的项目，会通过 react-scripts 有自己的 webpack 设置。默认没有加载
根目录下的 jsconfig.json、tsconfig.json 文件的逻辑，或者是有自己的逻辑（因为当我创建 tsconfig.json 文件运行项目会提示我项目没有引入 Typescript ）。但我们可以通过 craco 插件设置路径别名，并更改启动脚本使其生效

#### 4.1 在根目录创建 craco.config.json

```
const path = require('path');

    module.exports = {

        webpack: {

            alias: {

                '@': path.resolve(__dirname, 'src/'),

            },

        },

    };

```

#### 4.2 修改 package.json 中的启动命令为 craco

`"dev": "dotenv -e .env.dev react-scripts start",`

换到

`dotenv -e .env.dev craco start`

ps: 也可以使用 react-app-rewired 和 customize-cra 插件


## 5. 引入 [react-router-dom](https://reactrouter.com/en/main/router-components/browser-router)

#### 5.1主要概念、标签：

* <BrowserRouter>创建历史记录，将初始位置放入状态，并订阅URL, 其 `basename` 属性可用于设置基础路由。

* <Routes>递归其子路由以构建路由配置，将这些路由与位置进行匹配，创建一些路由匹配项，并呈现第一个匹配的路由元素，v6 版本以后 `<Routes>` 替换 `<Switch>` 。

* <Outlet/>您在每个父路由中渲染一个。

* 出口呈现路线matches中的下一个匹配。

+ 用户单击链接

+ 链接调用navigate()

- 历史更改URL并通知<BrowserRouter>。

- <BrowserRouter>重新渲染，从 (2) 重新开始！


#### 5.2添加新路由步骤

<font color="yellow">
添加新路由首先需要在views创建页面、其次
在router中引入声明</font>

#### 5.3路由导航

- 页面内使用link： `<link to='/targetPath'/>`
- 函数内使用navigate： `navigate("/targetPath", { state: urlEncoded })`

注意如果跳转的路由不是从`/`开始的，则会采用嵌套方式，继承父级路由, 如下点击link会跳转到`/teams/new`

    <Route path="teams" element={<Teams />}> 
        <link path="new" element={<NewTeamForm />} />
    </Route>
## 6.**[history](https://github.com/remix-run/history/tree/v4/docs)**
可通过`history`可以在非组件环境拿到路由信息（暂时没试）


## 7.**[antd](https://ant.design/components/overview-cn/)**

react UI 框架

## 8.**[axios](https://www.npmjs.com/package/axios)**
封装好的接口请求发送

## 9.**[mobx](https://mobx.js.org/observable-state.html)**
全局的状态共享管理

# 10.代码工具

- 10.1 **[eslint](https://zh-hans.eslint.org/)**
    配置文件：.eslintrc.js或者.eslintrc.json，或者在根项目的package.json中配置项eslintConfig中配置eslint的规则，再者就是
    编辑工具中的 eslint 配置

    忽略文件：.eslintignore

- 10.2 **[prettier](https://www.prettier.cn/)**
    配置文件：.prettierrc.js 或者编辑器配置如 vscode 

    忽略文件：.prettierignore

-  10.3 因为`eslint`与`prettier`都可以进行代码格式化，为了避免项目中俩者冲突，秉承“使用ESLint作为代码的格式化工具时，关闭可能与Prettier有冲突的格式化规则，把Prettier当做一个linter规则”的方案，主要依靠俩个依赖：

    - eslint-config-prettier 会关闭ESLint中有关代码格式化的配置
    - eslint-plugin-prettier 把Prettier配置成ESLint的一个插件，让其当做一个linter规则来运行

    这样，只需在项目根目录下的.eslintrc.js中配置如下：

    ```

        {
            "extends": ["plugin:prettier/recommended"]
        }
    
    ```
    而plugin:prettier/recommended帮我们做了如下事情：
    ```
    {

        "extends": ["prettier"], // 使用eslinst-config-prettier中的配置项
        "plugins": ["prettier"], // 注册该prettier插件
        "rules": {
            "prettier/prettier": "error", // 在eslint中运行prettier，并启用该插件提供的规则
            "arrow-body-style": "off", // 关闭规则
            "prefer-arrow-callback": "off" // 关闭规则
        }
    }
    ```
    **[冲突解决文档](https://juejin.cn/post/7156893291726782500)**


<br />
<br />
<br />
<br />

## **[参考搭建教程文档](https://bbs.huaweicloud.com/blogs/370666)**