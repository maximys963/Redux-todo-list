import React from 'react';
import {Button, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './list_item.css'

const ListItem = ({text, active, deleteItem, toggleActive, toggleDone, done}) => {
    const itemStyle = {
        color: active ? 'tomato' : 'black',
        textDecoration: done ? 'line-through' : 'none'
    };
    return (
        <Grid className='list-item-container'>
            <Grid.Row >
                <p className='list-item-text'
                   onClick={toggleDone}
                   style={itemStyle}>{text}</p>
                <Button
                   icon='x'
                   negative
                   onClick={deleteItem}/>
                <Button
                   icon='thumb tack'
                   positive
                   onClick={toggleActive}
                />
            </Grid.Row>
        </Grid>
    );
};

export default ListItem;

ListItem.propTypes = {
    text: PropTypes.string,
    highOrder: PropTypes.bool,
    done: PropTypes.bool,
    deleteItem: PropTypes.func,
    toggleOrder: PropTypes.func,
    toggleDone: PropTypes.func
};

