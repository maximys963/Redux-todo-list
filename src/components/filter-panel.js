import React    from 'react';
import {Button, Input, Grid} from 'semantic-ui-react';

const FilterPanel = () => (
  <Grid>
      <Grid.Row centered >
      <Input placeholder='Search'/>
      <Button basic
              color='green'>All</Button>
      <Button basic
              color='grey'>Active</Button>
      <Button basic
              color='grey'>Done</Button>
      </Grid.Row>
  </Grid>
);

export default FilterPanel;