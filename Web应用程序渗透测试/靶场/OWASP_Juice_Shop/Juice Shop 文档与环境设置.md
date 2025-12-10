软件安装与设置记录在“综合环境设置”文件夹下，此处记录文档与特殊设置

- [OWASP Juice Shop 项目页面](https://owasp.org/www-project-juice-shop/)

- [Juice Shop 指南](https://pwning.owasp-juice.shop/companion-guide/latest/)
    - 特性:
        - 完全使用 JavaScript/TypeScript 编写的应用程序
        - RESTful API
        - 运行时自我恢复，使用cookie保存进度，也可使用备份与恢复功能

    - [架构描述](https://pwning.owasp-juice.shop/companion-guide/latest/introduction/architecture.html)：  
    ![架构图](./architecture-diagram.png)

    - [漏洞分类映射列表](https://pwning.owasp-juice.shop/companion-guide/latest/part1/categories.html)：  
    ![漏洞分类映射图](./categories.png)

    - 解决漏洞后可能有对应的代码挑战，寻找并修复对应代码

    - 解决挑战后的[漏洞避免措施](https://cheatsheetseries.owasp.org/)

    - [默认对容器禁用潜在危险挑战](https://pwning.owasp-juice.shop/companion-guide/latest/part1/challenges.html#_potentially_dangerous_challenges)
        > 要重新启用所有挑战，设置环境变量 NODE_ENV=unsafe ，或者在 YAML 配置文件中设置 safetyMode: disabled 

- [Docker 容器安装与命令](https://hub.docker.com/r/bkimminich/juice-shop#docker-container)：
    1. 安装 Docker
    2. 运行 ```docker pull bkimminich/juice-shop```
    3. 运行 ```docker run --rm -p 3000:3000 bkimminich/juice-shop```
    4. 浏览器访问 http://localhost:3000⁠，localhost 默认为127.0.0.1

    - Firefox 默认不代理本机地址，搜索到[CSDN博客](https://blog.csdn.net/HUC0723/article/details/119953560)或[Microsoft云开发文档](https://learn.microsoft.com/en-us/microsoft-cloud/dev/dev-proxy/how-to/intercept-localhost-requests)：
        > 若要将 Mozilla Firefox 配置为向系统代理发送 localhost 的 URL 请求，需要将 network.proxy.allow_hijacking_localhost 首选项设置为 true。 为此，请在 about:config Firefox 中打开页面，搜索 network.proxy.allow_hijacking_localhost 首选项并将其设置为 true。
        
    - 设置环境变量，开启容器的潜在危险挑战
    ```docker run --rm -p 3000:3000 -e NODE_ENV=unsafe bkimminich/juice-shop```



- 计划
    - 结合 OWASP Web 安全测试指南 与 PortSwigger Web Security Academy 的主题文档，在进行 OWASP Juice Shop 靶场的过程中构建 Web应用程序渗透测试的概念框架
    - 使用分类映射
    - 使用靶场教学模式/提示以及 Juice Shop 指南

