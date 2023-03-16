import { Suspense} from 'react'
import { RouterProvider } from 'react-router-dom';
import './App.css'
import router from './router'
import Loading from './pages/loading/index'

/** hooks写法 */
function App () {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App
