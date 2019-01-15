import React from 'react';
import {Button, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListItem = ({text, highOrder, deleteItem, toggleOrder, toggleDone, done}) => {
    const itemStyle = {
        color: highOrder ? 'red' : 'black',
        textDecoration: done ? 'line-through' : 'none'
    };
    return (
        <Grid>
            <Grid.Row centered>
                <p  onClick={toggleDone}
                    style={itemStyle}>{text}</p>
                <Button
                    icon='x'
                    negative
                    onClick={deleteItem}/>
                <Button
                    icon='thumb tack'
                    positive
                    onClick={toggleOrder}
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

