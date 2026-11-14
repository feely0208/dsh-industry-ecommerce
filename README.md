# @deepwhale-cn/dsh-industry-ecommerce

> **技能型插件 · 无面板**：安装后由 DSH 智能体按 skill 说明调用 CLI；无独立面板界面。

安装到 DSH：

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-industry-ecommerce
```

电商行业多出来的那几项：极限词、七天无理由、虚假折扣、刷单用语、平台公示义务，别等投诉和职业打假才发现。（深鲸守护系列 · 基于 dsh-guard-core）

```bash
npx @deepwhale-cn/dsh-industry-ecommerce --root <项目目录>   # 或 --demo / --list-rules / --html
```

规则 5 条，出处：广告法第 9 条、消保法第 25 条、电商法第 15/17 条、明码标价和禁止价格欺诈规定（总局令第 56 号）、反不正当竞争法第 8 条。命中 ≠ 违规，每条带 文件:行 与出处供核对。
