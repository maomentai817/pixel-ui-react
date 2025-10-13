// import { makeInstaller } from '@pixel-ui/utils'

import '@hackernoon/pixel-icon-library/fonts/iconfont.css'
import '@pixel-ui-react/theme/index.css'

import printLogo from './printLogo'

// 统一注册 paintWorklet
// import { registerPaintWorklets } from '@pixel-ui/components'

printLogo()

// 注册组件之前执行 Paint Worklet 注册
// registerPaintWorklets()

// export * from '@pixel-ui/locale'
// export { en, zhCN, zhTW, ja } from '@pixel-ui/locale'
export * from './components'