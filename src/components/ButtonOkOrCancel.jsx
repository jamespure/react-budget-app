import { Button } from "semantic-ui-react";

const ButtonOkOrCancel = () => {
    return (
      <Button.Group style={{ marginTop: 25 }}>
        <Button>Cancel</Button>
        <Button.Or />
        <Button color="primary" type='submit'>Ok</Button>
      </Button.Group>
    );
}

export default ButtonOkOrCancel
