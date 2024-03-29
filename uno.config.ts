import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import shortcuts from './assets/unocss/shortcuts'
import theme from './assets/unocss/theme'

export default defineConfig({
  /* 主题 */
  theme,
  /* 快捷方式 */
  shortcuts,
  /* 预设 */
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        game: () => import('@iconify-json/game-icons/icons.json').then((i) => i.default),
        simple: () => import('@iconify-json/simple-icons/icons.json').then((i) => i.default),
        // 从本地文件加载自己的图标
        ob: FileSystemIconLoader('./assets/icons', (svg) => svg.replace('#fff', 'currentColor'))
      }
    })
  ],
  /* 文件提取 */
  content: {
    pipeline: {
      include: [
        // 默认
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,

        // 自定义 (可以编写多个)
        // 'components/**/*.{js,ts,vue}',
        'composables/**/*.{js,ts}'
      ]
      // 排除文件
      // exclude: []
    }
  },
  /* 指令转换器 */
  transformers: [transformerDirectives()]
})
