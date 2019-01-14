import React from 'react';
import {Button, Input, Grid} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddItemPanel = ({value, onChange, onClick}) =>(
    <Grid>
        <Grid.Row centered >
            <Input value={value} onChange={onChange} placeholder='What needs to be done'/>
            <Button basic
                    color='green'
                    onClick={onClick}
            >Add item</Button>
        </Grid.Row>
    </Grid>
);

export default AddItemPanel;

AddItemPanel.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

