import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'
import { createStore } from 'redux';
import {connect} from "react-redux"

 class TodoList extends Component{

    MakeAction(){
        let val = this.todoInput.value;
         // this.props.onMakeAction(val);
        console.log(val);
        this.props.onMakeAction(val);
        this.todoInput.value = ''
     }

     CheckAction(){

       this.props.onMakeCheck();

     }

    render(){
       return(
           <div className="container">
               <div  className="list-body">
                   {this.props.testStore.map((elem)=>{
                       return <div className="list-item" key={elem} ><Checkbox key={elem} onChange={this.CheckAction.bind(this)}/><div>{elem}</div></div>
                   })}
               </div>
               <div className="functional-container">
               <Input id='input' inputRef ={(Input) => {this.todoInput = Input}}/>
               <Button className="button" variant="contained" color='secondary' onClick={this.MakeAction.bind(this)}>ADD </Button>
               </div>
           </div>
       )

}
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch =>({
        onMakeAction: (todoItem)=>{
            dispatch({
                type: "ADD_NEW_TODOS",
                payload: todoItem,
            })
},
        onMakeCheck: () =>{
            dispatch({ type: "CHANGE_CHECKBOX",
                payload: "changed"})
        }


    })
)(TodoList)

