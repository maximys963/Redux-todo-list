import {ADD_ITEM,
    DELETE_ITEM,
    CHANGE_FILTER,
    MAKE_ACTIVE_ITEM,
    MAKE_DONE_ITEM,
    SEARCH_TODO
} from "../actions/actions";

export const addItem = (item) =>({
    type: ADD_ITEM,
    item: item
});

export const deleteItem = (id) =>({
    type: DELETE_ITEM,
    id: id
});

export const changeFilter = (value) =>({
    type: CHANGE_FILTER,
    filterValue: value
});

export const makeActiveItem = (itemId) =>({
    type: MAKE_ACTIVE_ITEM,
    itemId: itemId
});

export const makeDoneItem = (itemId) =>({
    type: MAKE_DONE_ITEM,
    itemId: itemId
});

export const searchTodo = (input) =>({
    type: SEARCH_TODO,
    inputValue: input
});