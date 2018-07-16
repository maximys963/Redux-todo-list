import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import  Delete  from '@material-ui/icons/DeleteSweep'
import Star from '@material-ui/icons/Star'
import { createStore } from 'redux';
import {connect} from "react-redux"

 class TodoList extends Component{

    MakeAction(){
        let val = this.todoInput.value;
        console.log(val);
        this.props.onMakeAction(val);
        this.todoInput.value = ''
     }

     CheckAction(e){
         const divText = e.target.parentNode.parentNode.parentNode.childNodes[1];
       e.target.checked ?  divText.style.textDecoration = 'line-through' : divText.style.textDecoration = 'none';

     }

     handleDelete(e){
         const divTextDel = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText;
         this.props.testStore.forEach((elem, i)=>{
             if (elem === divTextDel){
                 console.log(i);
                 let parentNode = document.getElementById('cont');
                 let delItem = document.getElementById(i);
                 parentNode.removeChild(delItem);
                 this.props.testStore.splice(i, 1);
                 console.log(this.props.testStore);
                 this.props.onDeleteItem()
             }
         })

     }

    render(){
       return(
           <div className="container">
               <div  className="list-body" id="cont">
                   {this.props.testStore.map((elem, i)=>{

                       return <div className="list-item" key={i} id={i} ><Checkbox  onChange={this.CheckAction.bind(this)}/>
                           <div>{elem}</div>
                           <IconButton  className="button-x" onClick={this.handleDelete.bind(this)}>
                               <Delete color='secondary' variant="contained"/>
                           </IconButton>
                           <IconButton  className="button-star" >
                               <Star/>
                           </IconButton>
                   </div>
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

const mapDispatchToProps = (dispatch) =>{
    return{
        onMakeAction: (todoItem)=>{
            dispatch({
                type: "ADD_NEW_TODOS",
                payload: todoItem,
            })
        },
        onDeleteItem: () =>{
            dispatch({
                type: "DELETE_TODOS"
            })
        }
    }
};

export default connect(
    state => ({
        testStore: state
    }),
   mapDispatchToProps
)(TodoList)

