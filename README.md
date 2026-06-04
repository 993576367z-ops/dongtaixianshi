# 示例企业官网（静态模板）

这是一个简单的静态企业官网模板，包含主页、关于、服务、作品、博客和联系页面。适合用于公司宣传、作品展示与潜在客户引导。

主要文件
- index.html — 主页
- about.html — 关于页面
- services.html — 服务详情
- portfolio.html — 作品集
- blog.html — 博客列表
- contact.html — 联系表单
- css/style.css — 样式表
- js/main.js — 简单的交互脚本

快速使用
1. 将文件放入一个 Git 仓库（或直接放到静态主机目录）。
2. 替换页面中的公司名称、联系方式与图片（当前使用 Unsplash 占位图）。
3. 配置联系表单：
   - 默认表单提交端点在 contact.html 的 `form[data-endpoint]` 属性里为 `https://example.com/api/contact`，
     请替换为你自己的后端 API、Netlify/ Vercel/Cloud Function 端点，或第三方服务（如 Formspree）。
4. 部署：
   - GitHub Pages：把仓库 push 到 GitHub，然后启用 Pages（通常是 main 分支 /docs 或根目录）。
   - Netlify / Vercel：直接连接仓库并部署，自动提供 HTTPS。
   - 自建静态主机：把文件上传到你的服务器或 CDN 即可。

可扩展建议
- 为作品/文章添加独立详情页。
- 使用静态站点生成器（如 Hugo、Jekyll、Eleventy）以便管理博客与多语言。
- 增加 SEO：完善 meta、OpenGraph、结构化数据（JSON-LD）。
- 使用真实图片与品牌视觉，优化配色与排版。
- 添加表单防垃圾（reCAPTCHA）与后端邮件发送逻辑。

如果你希望，我可以：
- 把这个模板初始化为 GitHub 仓库并推送（需要仓库信息）；
- 为表单提供一个 Netlify Function 示例；
- 或者把模板转换为 Hugo/Jekyll 项目结构。
