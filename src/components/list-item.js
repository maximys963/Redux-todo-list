import React from 'react';
import {Button, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListItem = ({text, highOrder, deleteItem, toggleOrder}) => (
    <Grid>
        <Grid.Row centered>
                <p style={highOrder ? {color: 'red'}: {color: 'black'}}>{text}</p>
                <Button
                    icon='x'
                    negative
                    onClick={deleteItem} />
                <Button
                    icon='thumb tack'
                    positive
                    onClick={toggleOrder}
                />
        </Grid.Row>
    </Grid>
);

export default ListItem;

ListItem.propTypes = {
    text: PropTypes.string,
    highOrder: PropTypes.bool,
    deleteItem: PropTypes.func,
    toggleOrder: PropTypes.func
};

