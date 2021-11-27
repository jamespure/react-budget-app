import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import Entries from "./components/Entries";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState(initialState);
  
  // add new entry
  const addNewEntry = (description, value, isExpense) => {
    const id = Math.floor(Math.random(1) * 500) + 1;
    const newEntry = { description, value, isExpense, id };
    setEntries([...entries, newEntry]);
  };

  console.log(entries);
  // delete entry
  const deleteEntry = (id) => {
    console.log('object')
    setEntries(entries.filter(entry => entry.id !== id))
  }
  
  return (
    <Container>
      <MainHeader title="Budget" element="h1" />

      <DisplayBalance title="YOUR BALANCE" amount="2,300.39" />

      <DisplayBalances />

      <MainHeader title="History" element="h3" />

      <MainHeader title="Add new transaction" element="h3" />

      <Entries entries={entries} onDelete={deleteEntry}/>

      <NewEntryForm onAdd={addNewEntry}/>
    </Container>
  );
}

export default App;

const initialState = [
  {id: 1,
    description: "Car wash",
    value: "6.00",
    isExpense: true,
  },
  {
    id: 2,
    description: "Something",
    value: "12.98",
    isExpense: false,
  },
];
