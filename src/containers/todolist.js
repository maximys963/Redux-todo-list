import React, {Component}  from 'react';
import { Grid,
         Segment,
         Header }          from 'semantic-ui-react'
import FilterPanel         from '../components/filter-panel';
import ListItem            from '../components/list-item/list-item';
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
        const newArray = [{text: inputValue, highOrder: false, show: true, done: false}, ...currentToDoArr];
        this.setState({
            todoData: newArray,
            inputValue: ''

        })
    };
    deleteItem = (id) => {
        this.setState(({todoData})=>{
            const before = todoData.slice(0, id);
            const after = todoData.slice(id + 1);
            const newArray = [...before, ...after];
            return{
                todoData: newArray
            }
        })
    };

    toggleActive = (id) => {
        const itemList = this.state.todoData;
        const oldItem = itemList.filter( (elem, i)=>(
            i === id
        ));
        const newItem = {
            ...oldItem[0],
            active: !oldItem[0].active
        };
        const newArray = [
            ...itemList.slice(0, id),
            newItem,
            ...itemList.slice(id+1)
        ];
        this.setState({
            todoData: newArray
        });
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
        const oldItem = itemList.filter( (elem, i)=>(
            i === id
        ));
        const newItem = {
            ...oldItem[0],
        done: !oldItem[0].done
        };
        const newArray = [
            ...itemList.slice(0, id),
            newItem,
            ...itemList.slice(id+1)
        ];
        this.setState({
            todoData: newArray
        });
    };



    render(){
        const active  = this.state.todoData
            .filter( elem => elem.active).length ;
        const done = this.state.todoData
            .filter( elem => elem.done).length ;
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
                                            toggleOrder={() => this.toggleActive(i)}
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

export default ToDoList;