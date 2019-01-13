import React from 'react';
import {Button, Grid} from 'semantic-ui-react'

const ListItem = ({text, highOrder, deleteItem}) => (
    <Grid>
        <Grid.Row centered>
                <p style={highOrder ? {color: 'red'}: {color: 'black'}}>{text}</p>
                <Button icon='x' negative onClick={deleteItem} />
                <Button icon='thumb tack' positive/>
        </Grid.Row>
    </Grid>
);
export default ListItem;
