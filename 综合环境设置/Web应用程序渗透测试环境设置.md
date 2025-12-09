## 集成工具
### Burp
1. 使用[Burp 社区版](https://portswigger.net/burp/releases#community)或[52pojie 的可选汉化版](https://www.52pojie.cn/thread-2005151-1-1.html)
2. 在浏览器中手动设置代理为 Burp 的监听地址
3. [安装Burp CA 证书](https://portswigger.net/burp/documentation/desktop/external-browser-config/certificate)：
    1. 使用浏览器访问拦截代理服务器的地址下载证书
    2. 在浏览器设置中的证书管理器中导入此证书，确保勾选此证书可以标识网站

- 更改默认信息显示字体为 Consolas
- 开启配置缩放设置
- 使用 Burp 内置 Chrome 浏览器或在 Firefox 的代理设置中添加排除项 ```firefox.com, mozilla.com, mozilla.net, mozilla.org, darkreader.org, bing.com, googleapis.com, linkedin.com, youtube.com, portswigger.net, google.com, immersivetranslate.com, immersivetranslate.cn```
