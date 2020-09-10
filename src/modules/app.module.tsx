import React, { Suspense } from 'react'
import { LoadingComponent } from '../core/components/loading/loading.component'
import { RouteModule } from './route.module'
import { ThemeProvider } from '@chakra-ui/core'
import theme from '../core/theme/theme'

const AppModule: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LoadingComponent />}>
        <RouteModule />
      </Suspense>
    </ThemeProvider>
  )
}

export { AppModule }
