import  {lazy} from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import Partb from '../pages/part-b'
// 引入方法一
// const Home = lazy(() => import('../pages/home'))

// 引入方法二 模拟懒加载
const PartB = lazy(async () => {
  const res = await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(Partb)
    }, 2000)
  })
  return {default: res}
})

const PartA = lazy(() => import('../pages/part-a'))
const Home = lazy(() => import('../pages/home'))

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
    path: '/part-a',
    element: <PartA />
  },
  {
    path: '/part-b',
    element: <PartB />
  },

])
