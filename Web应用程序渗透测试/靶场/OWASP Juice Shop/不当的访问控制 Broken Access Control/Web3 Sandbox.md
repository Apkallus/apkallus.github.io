- Web3 Sandbox
    - 描述：找到一个意外部署的，可以即时编写智能合约的代码沙盒。
    - 提示：这与找到计分板一样容易。
    - 在 ```main.js``` 中搜索 ```sandbox```
    找到看似路由设置的内容
        ```javascript
        {
            path: "web3-sandbox",
            loadChildren: function() {
                var n = (0, S.A)(function*() {
                    return yield Jm()
                });
                return function() {
                    return n.apply(this, arguments)
                }
            }()
        }
        ```
        访问 ```http://127.0.0.1:3000/#/web3-sandbox``` 进入页面