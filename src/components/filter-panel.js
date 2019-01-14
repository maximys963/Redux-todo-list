import React    from 'react';
import {Button, Input, Grid} from 'semantic-ui-react';

const FilterPanel = ({searchTodo, toggleFilters, showStatus}) => (
  <Grid>
      <Grid.Row centered >
      <Input placeholder='Search' onChange={searchTodo}/>
      <Button basic
              color={showStatus === 'all' ? 'green': 'grey'}
              onClick={toggleFilters}>All</Button>
      <Button basic
              color={showStatus === 'active' ? 'green': 'grey'}
              onClick={toggleFilters}>Active</Button>
      <Button basic
              color={showStatus === 'done' ? 'green': 'grey'}
              onClick={toggleFilters}>Done</Button>
      </Grid.Row>
  </Grid>
);

export default FilterPanel;