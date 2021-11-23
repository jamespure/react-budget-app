import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = () => {
    return (
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance color="green" amount="1,290.00" title="INCOME:" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance color="red" amount="240.00" title="EXPENSES:" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances
