import { fromJS } from "immutable"

import {GET_LIST_DATA} from "./actionContor"

const defaultStore = fromJS({
    listData:[]
})

export default (state = defaultStore, action) => {
    // console.log(action);
    switch (action.type) {
        case GET_LIST_DATA:
            // console.log(action);
            return state.update("listData", (x) => {
                return x.concat(fromJS(action.res));
            }) 
    }
    return state
}