// 封装的高阶组件 路由只能用hooks 才能调用

import { useNavigate, useParams, useLocation } from "react-router-dom"

export default function withRouter(WrapperComponent: any) {
  return function(props: any) {
    const naviagte = useNavigate()

    const params = useParams()

    const router = {naviagte, params}

    const location = useLocation();

    return <WrapperComponent {...props} router={router} location={location} params={params}/>
  }
}
