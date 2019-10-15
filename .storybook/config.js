import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming'

// Option defaults.
addParameters({
  options: {
    // theme: themes.dark,
  },
})

configure(require.context('../stories', true, /\.stories\.js$/), module)
