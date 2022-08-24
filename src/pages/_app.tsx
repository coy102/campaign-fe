import { Global } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import globalCss from '~/styles/global'
import theme from '~/styles/theme'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      <CssBaseline />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
