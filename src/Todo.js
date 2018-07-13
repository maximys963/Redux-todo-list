import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'
import { createStore } from 'redux';
import {connect} from "react-redux"

 export default class TodoList extends Component{
    render(){

    function MakeAction(element){
        const inpVal = document.getElementById("input");
        console.log(inpVal.value);
        return{
                type: "ADD_NEW_TODOS",
                 inpVal
        }
    }
       return(
           <div className="container">
               <div className="list-body">
                   {store.getState().map((elem)=>{
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

const mapDispatchToProps = () =>{

}

