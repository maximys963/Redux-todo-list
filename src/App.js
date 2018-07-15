import React, {Component} from 'react'
import Todo from "./Todo"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// export reducer from 'reducers/reducer'


const TodoArr = [ "learn redux", "do something"];
const store = createStore((state = TodoArr, action)=>{
    if(action.type === "ADD_NEW_TODOS"){
        return[
            ...state,
        action.payload
        ]
    }else if(action.type === "CHANGE_CHECKBOX"){
        return Object.assign({}, state, {
            checkedElement: action.payload
        })

    }else{
        return state
    }

},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


store.subscribe(()=>{
   console.log(store.getState());

});


class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}

export default App