import type { Preview } from '@storybook/vue3'

import '../src/assets/scss/main.scss'
import 'material-design-icons/iconfont/material-icons.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
