import { Form } from "semantic-ui-react";
import ButtonOkOrCancel from "./ButtonOkOrCancel";

const NewEntryForm = () => {
    return (
      <Form unstackable>
        <Form.Group>
          <Form.Input
            type="text"
            icon="tags"
            width={12}
            label="Description"
            placeholder="New Toy"
          />
          <Form.Input
            type="text"
            icon="dollar"
            width={4}
            label="Value"
            placeholder="10.00"
            iconPosition="left"
          />
        </Form.Group>
        <ButtonOkOrCancel />
      </Form>
    );
}

export default NewEntryForm
