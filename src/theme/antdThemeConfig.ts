import type { ThemeConfig } from 'antd'

const antdTheme: ThemeConfig = {
  components: {
    Switch: {
      trackPadding: 4,
      handleSize: 24,
      trackHeight: 32,
      trackMinWidth: 52,
      innerMaxMargin: 10,
      algorithm: true,
    },
  },
}

export default antdTheme
