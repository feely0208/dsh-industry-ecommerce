import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'industry-ecommerce',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/industry-ecommerce.md',
  binFile: 'bin/cli.mjs',
  description: "电商多出来的那几项：极限词、七天无理由、虚假折扣、刷单用语、平台公示义务",
  whenToUse: "需要对「电商行业专项体检」相关项目做自查时使用。",
});
