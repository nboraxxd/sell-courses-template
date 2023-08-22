import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routers } from '@/routers/routers'

export default function App() {
  const element = useRoutes(routers)

  return (
    <Suspense fallback={<div>Page loading...</div>}>
      <>{element}</>
    </Suspense>
  )
}
