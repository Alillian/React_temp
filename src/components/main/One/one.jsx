import React,{Fragment,Component} from "react"
import {withRouter} from "react-router-dom"

 class One extends Component{
     constructor(props) {
         super(props)
         this.state = {
             name:"我是One组件"
         }
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.name}</h1>
               <button onClick={this.handleToPath.bind(this)}>toinfo</button>
            </Fragment>
        )
    }
    handleToPath() {
        // console.log("ok");
        // console.log(this.props);
        this.props.history.push("/info")

    }
}

export default withRouter(One)