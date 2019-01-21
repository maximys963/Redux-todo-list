import React, {Component}   from 'react';
import { Grid,
         Segment,
         Header }           from 'semantic-ui-react'
import uniqid               from 'uniqid'
import FilterPanel          from '../components/filter-panel';
import ListItem             from '../components/list-item/list-item';
import AddItemPanel         from '../components/add-item-panel';
import { connect }          from 'react-redux'
import * as actions         from "../action-creators/action-creators";

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
    }}

    onChangeInput = (e) =>{
        let value = e.target.value;
        this.setState({
            inputValue: value
        });
    };

    toggleAddItem = () =>{
        let uniqueValue = uniqid();
        let inputValue = this.state.inputValue;
        const newItem = {text: inputValue, active: false, show: true, done: false, id: uniqueValue};
        this.props.addItem(newItem);
        this.setState({
            inputValue: ''
        })
    };

    deleteItem = (id) => {
        this.props.deleteItem(id);
    };

    toggleActive = (id) => {
        this.props.makeActiveItem(id)
    };

    searchTodo = (e) => {
        let innerText = e.target.value;


         /*   stateToDoItems.forEach(elem => {
                    if(elem.text.toLowerCase().indexOf(innerText.toLowerCase()) === -1){
                        elem.show = false;
                    }else{
                        elem.show = true;
                    }
        });
        this.setState({
           todoData: stateToDoItems
        })
        */
        this.props.searchTodo(innerText);
    };

    toggleFilters = (e) => {
        const button = e.target.innerText;
        switch (button){
            case 'All':
                this.props.changeFilter('all');
                break;
            case 'Active':
                this.props.changeFilter('active');
                break;
            case 'Done':
                this.props.changeFilter('done');
                break;
            default: this.props.changeFilter('all');
        }
    };

    toggleDone = (id) => {
        this.props.makeDoneItem(id)
    };

    render(){
        const active  = this.props.data
            .filter( elem => elem.active).length;
        const done = this.props.data
            .filter( elem => elem.done).length;
        return(
            <div>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Header as='h1'>Your todo list Babe ;)</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment>
                           <FilterPanel
                           searchTodo={this.searchTodo}
                           toggleFilters={this.toggleFilters}
                           />
                            {
                                  this.props.data
                                    .filter((elem) => {
                                   switch(this.props.dataFilter){
                                       case 'all':
                                      return(elem);
                                       case  'active':
                                      return(elem.active);
                                       case 'done':
                                      return(elem.done);
                                       default: return(elem)
                                   }
                                    })
                                    .map((elem, i) => {
                                if(elem.show){
                                    return(
                                        <ListItem
                                            key={i}
                                            id={elem.id}
                                            text={elem.text}
                                            active={elem.active}
                                            deleteItem={() => this.deleteItem(elem.id)}
                                            toggleActive={() => this.toggleActive(elem.id)}
                                            done={elem.done}
                                            toggleDone={()=> this.toggleDone(elem.id)}/>
                                    )
                                }else {
                                    return null
                                }
                            })
                            }
                           <AddItemPanel
                                   value={this.state.inputValue}
                                   onChange={this.onChangeInput}
                                   onClick={this.toggleAddItem}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <p>Active: {active ? active: 0}</p>
                            <p>Done: {done ? done : 0} </p>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        data: state.todoData,
        dataFilter: state.showStatus
    });



export default connect(mapStateToProps, actions)(ToDoList);