import React, { Suspense } from 'react'
import { render } from 'react-dom'

const OtherCom = React.lazy(() => import('./OtherCom'))

function MyComponent(props) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        this is MyComponent
        <OtherCom />
      </Suspense>
    </div>
  )
}

function Loading(props) {
  return (
    <div>
      loading...
    </div>
  )
}

export default () => render(
  <MyComponent />,
  document.getElementById('root')
)
