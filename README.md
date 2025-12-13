- 线路
    - 操作系统
        - C语言程序设置基础
        - 深入理解计算机系统

    - 网络
        - Python编程导论
        - PY4E
        - 计算机网络自顶向下方法
        - Wireshark数据包分析实战

    -  Web
        - MDN Web开发学习区

    - Web 应用程序渗透测试
        - 黑客攻防技术宝典：Web实战篇
        - PortSwigger Web Security Academy

        - OWASP Web 安全测试指南
        - OWASP Juice Shop

- 如何构建记录？
    - 虽然最终应当将各靶场的挑战与lab综合到渗透测试框架中，
    然而当前进行靶场时很难确定挑战对应的部分
    - 目录结构：
    靶场名-靶场内分类名-挑战名md
    - 建立靶场内索引，之后综合到框架时查看靶场内索引
    - 将思考与挑战流程的记录分离将导致思考记录本身消失在庞大的档案中
    - 将思考记录到挑战中，具体是md的元数据或某种特殊字段。
    使用脚本或框架按照目录结构提取名称与思考内容建立当前靶场的表格
    - https://www.markdownlang.com/zh/advanced/frontmatter.html
    - 如何关联挑战、主题、分类到元数据？
    - https://jekyllrb.com/docs/front-matter/