import React from "react";
class AddCount extends React.Component<{
  navList?: any
},{
  count: number
  name: string
}> {
/** refs */
  refElement = React.createRef<HTMLButtonElement>();

    constructor(props: any) {
        super(props);
        this.state = {
            count : 1,
            name: '12345'
        }
    }
    addcount = () => {
        let newCount = this.state.count;
        this.setState({
            count: newCount += 1
        })
    }
    /** 生命周期挂载 */
    componentDidMount (): void {
        this.refElement.current?.click()
    }
    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <p>{this.state.name}</p>
                <button onClick={ this.addcount } ref={this.refElement}>count++</button>
            </>
        )
    }
}
export default AddCount;
