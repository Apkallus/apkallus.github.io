软件安装与设置记录在“综合环境设置”文件夹下，此处记录文档与特殊设置

- [OWASP Juice Shop 项目页面](https://owasp.org/www-project-juice-shop/)

- [Juice Shop 指南](https://pwning.owasp-juice.shop/companion-guide/latest/)
    - 特性:
        - 完全使用 JavaScript/TypeScript 编写的应用程序
        - RESTful API
    - [架构描述](https://pwning.owasp-juice.shop/companion-guide/latest/introduction/architecture.html)：  
    ![架构图](./architecture-diagram.png)
    - 解决调整后的[漏洞避免措施](https://cheatsheetseries.owasp.org/)
    - 各章节之间并非顺序组成，包含安装设置与漏洞挑战
    - [漏洞分类映射列表](https://pwning.owasp-juice.shop/companion-guide/latest/part1/categories.html)：  
    ![漏洞分类映射图](./categories.png)

- [Docker 容器安装与命令](https://hub.docker.com/r/bkimminich/juice-shop#docker-container)：
    1. 安装 Docker
    2. 运行 ```docker pull bkimminich/juice-shop```
    3. 运行 ```docker run --rm -p 3000:3000 bkimminich/juice-shop```
    4. 浏览到 http://localhost:3000⁠，localhost 默认为127.0.0.1



- 计划
    - 结合 OWASP Web 安全测试指南 与 PortSwigger Web Security Academy 的主题文档，在进行 OWASP Juice Shop 靶场的过程中构建 Web应用程序渗透测试的概念框架
    - 使用靶场教学模式/提示以及 Juice Shop 指南