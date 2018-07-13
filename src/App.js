import React, {Component} from 'react'
import Todo from "./Todo"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
// export reducer from 'reducers/reducer'


const TodoArr = ["buy some milk", "learn redux", "do something"];
const store = createStore((state = TodoArr, action)=>{
    if(action.type === "ADD_NEW_TODOS"){
        TodoArr.push("done");
        return state
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