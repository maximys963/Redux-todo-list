import React, {Component} from 'react'
import "./assets/styles/style.scss"
import Button from '@material-ui/core/Button';
import Input  from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox'

export default class TestComp extends Component{
    render(){
       return(
           <div className="container">
               <div className="list-body">
                   <div className="list-item"><Checkbox/><div>todo something</div></div>
                   <div className="list-item"><Checkbox/><div>todo something</div></div>
                   <div className="list-item"><Checkbox/><div>todo something</div></div>
               </div>
               <div className="functional-container">
               <Input/>
               <Button className="button" variant="contained" color='secondary' >ADD</Button>
               </div>
           </div>
       )
    }
}