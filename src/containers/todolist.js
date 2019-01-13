import React, {Component}  from 'react';
import { Grid,
         Segment,
         Header }          from 'semantic-ui-react'
import FilterPanel         from '../components/filter-panel';
import ListItem            from '../components/list-item';
import AddItemPanel        from '../components/add-item-panel';

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoData:[
                {
                    text: 'Lorem ipsum dolor',
                    highOrder: false,
                }],
            inputValue: ''
    }}

    onChangeInput = (e) =>{
        let value = e.target.value;
        this.setState({
            inputValue: value
        });

    };

    toggleAddItem = () =>{
        let inputValue = this.state.inputValue;
        let currentToDoArr = this.state.todoData;
        currentToDoArr.push({text: inputValue, highOrder: false});
        this.setState({
            todoData: currentToDoArr,
            inputValue: ''
        })
    };
    deleteItem = (id) => {
        const changedState = this.state.todoData
            .filter((elem,index) => {
            return( index !== id)
            });
        this.setState({
            todoData: changedState
        })

    };


    render(){
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
                           <FilterPanel/>
                            {this.state.todoData.map((elem, i)=>(
                                <ListItem
                                    key={i}
                                    text={elem.text}
                                    highOrder={elem.highOrder}
                                    deleteItem={() => this.deleteItem(i)}
                                />
                            ))
                            }
                           <AddItemPanel
                                   value={this.state.inputValue}
                                   onChange={this.onChangeInput}
                                   onClick={this.toggleAddItem}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            2
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}

export default ToDoList;