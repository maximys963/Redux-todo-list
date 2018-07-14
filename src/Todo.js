import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'
import { createStore } from 'redux';
import {connect} from "react-redux"

 class TodoList extends Component{
    render(){

    function MakeAction(element){
        const inpVal = document.getElementById("input");

        const val = inpVal.value;
        console.log(inpVal.value);
        return{
                type: "ADD_NEW_TODOS",
                 payload: val,
        }
    }
       return(
           <div className="container">
               <div   className="list-body">
                   {this.props.testStore.map((elem)=>{
                       return <div className="list-item" key={elem}><Checkbox/><div>{elem}</div></div>
                   })}
               </div>
               <div className="functional-container">
               <Input id="input"/>
               <Button  store={store} className="button" variant="contained" color='secondary' onClick={() => {store.dispatch(MakeAction())}}>ADD </Button>
               </div>
           </div>
       )

}
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch =>({})
)(TodoList)

