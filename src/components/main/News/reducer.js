import {fromJS} from "immutable"
const defaultStore = fromJS({
    count:0
})

export default (state = defaultStore, action) => {
    switch (action.type) {
        
    }
    return state
}