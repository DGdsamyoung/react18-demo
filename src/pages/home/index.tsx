import React from "react";
import { useNavigate } from 'react-router-dom'
import withRouter from '../../router/with-router'
class Home extends React.Component<{
    navList?: any
}, {
    }> {
    constructor (props: any) {
        super(props);
        this.state = {
        }

    }

    handlePage(value: string) {
        let { naviagte } = this.props.router;
        naviagte(value)
        // navigate('/home/message/detail',{
        //     replace: true,
        //     state:{id,title}
        //    })
    }

    render () {
        return (
            <>
            <button onClick={()=> {this.handlePage('part-a')}}>part-a</button>
            </>
        )
    }
}
export default withRouter(Home);

// function Home () {
//     const navigate = useNavigate()
//  const handlePage = (value: string)=>{
//     navigate(value)
//  }
//         return (
//             <>
//             <button onClick={()=> {handlePage('part-a')}}>part-a</button>
//             </>
//         )

// }

// export default Home;
