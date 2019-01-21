import {
    CHANGE_FILTER,
    ADD_ITEM,
    DELETE_ITEM,
    MAKE_ACTIVE_ITEM,
    MAKE_DONE_ITEM
} from "../actions/actions";


export function mainReducer (state = {}, action) {
    switch (action.type){
        case ADD_ITEM:
            return {
                ...state,
                todoData: state.todoData.concat(action.item)
            };
        case CHANGE_FILTER:
           return {...state,
           showStatus: action.filterValue
           };
        case DELETE_ITEM:
            return {
                ...state,
                todoData: state.todoData.filter( item => item.id !== action.id)
            };
        case MAKE_ACTIVE_ITEM:
            return {
                     ...state,
                    todoData: state.todoData.map( elem => elem.id === action.itemId ?
                        {...elem, active: !elem.active} :
                        elem
                    )};
        case MAKE_DONE_ITEM:
            return{
                ...state,
                todoData: state.todoData.map( elem => elem.id === action.itemId ?
                    {...elem, done: !elem.done} :
                    elem
                )};
        default: return state
    }
    
}