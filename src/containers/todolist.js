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
                    show: true,
                    text: 'Lorem ipsum dolor',
                    active: false,
                    done: false
                }],
            inputValue: '',
            showStatus: 'all',
            done: 0,
            active: 0
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
        currentToDoArr.push({text: inputValue, highOrder: false, show: true, done: false});
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

    toggleHighOrder = (id) => {
        const changeItemOrder = this.state.todoData;
        changeItemOrder.forEach((elem, i) => {
            if(id === i){
                elem.active = true;
                elem.done = false
            }
            });
        console.log(changeItemOrder);
        this.setState({
            todoData: changeItemOrder
        });
        this.countActive();
    };

    searchTodo = (e) => {
        let innerText = e.target.value;
        let stateToDoItems = this.state.todoData;
        stateToDoItems.forEach(elem => {
                if(elem.text.toLowerCase().indexOf(innerText.toLowerCase()) === -1){
                    elem.show = false;
                }else{
                    elem.show = true;
                }
        });
        this.setState({
           todoData: stateToDoItems
        })
    };

    toggleFilters = (e) => {
        const button = e.target.innerText;
        switch (button){
            case 'All':
                this.setState({showStatus: 'all'});
                break;
            case 'Active':
                this.setState({showStatus: 'active'});
                break;
            case 'Done':
                this.setState({showStatus: 'done'});
                break;
            default: this.setState({showStatus: 'all'});
        }
    };

    toggleDone = (id) => {
        const itemList = this.state.todoData;
        itemList.forEach((elem, i) => {
            if(id === i){
                elem.done = true;
                elem.active= false;
            }
        });
        this.setState({
            todoData: itemList
        });
        this.countDone();
    };

    countActive = () => {
      let amount = 0;
      const itemList = this.state.todoData;
      itemList.forEach((elem) =>{
          if(elem.active){
              amount++
          }
      });
        this.setState({
            active: amount
        })
    };

    countDone = () => {
        let amount = 0;
        const itemList = this.state.todoData;
        itemList.forEach((elem) =>{
            if(elem.done){
                amount++
            }
        });
        this.setState({
            done: amount
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
                           <FilterPanel
                           searchTodo={this.searchTodo}
                           toggleFilters={this.toggleFilters}
                           showStatus={this.state.showStatus}
                           />
                            {
                                this.state.todoData
                                    .filter((elem) => {
                                   switch(this.state.showStatus){
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
                                            text={elem.text}
                                            highOrder={elem.active}
                                            deleteItem={() => this.deleteItem(i)}
                                            toggleOrder={() => this.toggleHighOrder(i)}
                                            done={elem.done}
                                            toggleDone={()=> this.toggleDone(i)}
                                        />)
                                }
                            })
                            }
                           <AddItemPanel
                                   value={this.state.inputValue}
                                   onChange={this.onChangeInput}
                                   onClick={this.toggleAddItem}
                           />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment>
                            <p>Active: {this.state.active}</p>
                            <p>Done: {this.state.done} </p>
                        </Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        );
    }
}

export default ToDoList;