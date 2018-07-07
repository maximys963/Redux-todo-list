import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';

export default class TestComp extends Component{
    render(){
       return(
           <div className="container">
               <div className="list-body">List</div>
               <div className="functional-container">
               <Input/>
               <Button className="button" variant="contained" color='secondary' >ADD</Button>
               </div>


           </div>
       )
    }
}