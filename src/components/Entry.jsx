import { Grid, Icon, Segment } from "semantic-ui-react";

const Entry = ({entry, onDelete}) => {
    return (
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {entry.description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${entry.value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" />
              <Icon name="trash" onClick={() => onDelete(entry.id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default Entry
