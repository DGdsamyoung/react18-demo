import  {lazy} from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import Home from '../pages/home'
// 引入方法一
// const Home = lazy(() => import('../pages/home'))

// 引入方法二
// const Home = lazy(async () => {
//   const res = await new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(HomeC)
//     }, 2000)
//   })
//   return {default: res}
// })

const Home2 = lazy(() => import('../pages/home2'))

export default  createHashRouter([
  {
    path: '/',
    element: <Navigate replace to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/home2',
    element: <Home2 />
  },
])
