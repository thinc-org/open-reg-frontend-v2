import React, { Suspense } from 'react'
import { LoadingComponent } from '../core/components/loading/loading.component'
import { RouteModule } from './route.module'

const AppModule: React.FC = () => {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouteModule />
    </Suspense>
  )
}

export { AppModule }
