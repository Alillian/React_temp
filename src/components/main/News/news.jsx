import React,{Fragment,Component} from "react"
import One from "../One/one"

export default class extends Component{
    constructor(props) {
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <Fragment>
                <h1>我是新闻页</h1>
                <One/>
            </Fragment>
        )
    }
   
}