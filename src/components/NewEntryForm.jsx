import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import ButtonOkOrCancel from "./ButtonOkOrCancel";

const NewEntryForm = ({onAdd}) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false)
  
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({description, value, isExpense})
    setDescription('');
    setValue('');
    setIsExpense(false);
  }
    return (
      <Form unstackable onSubmit={onSubmit}>
        <Form.Group>
          <Form.Input
            type="text"
            icon="tags"
            width={10}
            label="Description"
            placeholder="New Toy"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Form.Input
            type="text"
            icon="dollar"
            width={4}
            label="Value"
            placeholder="10.00"
            iconPosition="left"
            onChange={(e) => setValue(e.target.value)}
          />

          <Button.Group style={{ marginTop: 20, marginLeft: 8 }}>
            <Button color="green">Income</Button>
            <Button.Or />
            <Button color="red">Expense</Button>
          </Button.Group>
        </Form.Group>
        <ButtonOkOrCancel />
      </Form>
    );
}

export default NewEntryForm
