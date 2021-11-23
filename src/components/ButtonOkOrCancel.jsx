import { Button } from "semantic-ui-react";

const ButtonOkOrCancel = () => {
    return (
      <Button.Group style={{ marginTop: 20 }}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button color="primary">Ok</Button>
      </Button.Group>
    );
}

export default ButtonOkOrCancel
