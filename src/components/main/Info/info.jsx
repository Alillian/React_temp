import React,{Fragment,Component} from "react"
import {connect} from "react-redux"
import {loadListDataAsyanc} from "./actionContor"

class Info extends Component{

    render() {
        // console.log(this.props);
        return (
            <Fragment>
                <h1>我是信息页</h1>
                <div>
                    <ul>
                        {
                            this.props.listData.map((item, index) => (
                                <li key={index}>{item.get("show_name")}</li>
                            ))
                        }
                    </ul>
                    <button onClick={this.props.handleTest.bind(this)}>send</button> 
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store.getIn(["infoReducer","listData"]));
    return {
       listData:store.getIn(["infoReducer","listData"])
       
    }
}
const mapDispathToProps = (dispatch) => ({
    handleTest() {
        // console.log(loadListDataAsyanc);

        dispatch(loadListDataAsyanc(dispatch))
    }
})

export default connect(mapStateToProps,mapDispathToProps)(Info)