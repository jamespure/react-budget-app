import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryList from "./components/EntryList";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" element="h1" />

      <DisplayBalance title="YOUR BALANCE" amount="2,300.39" />

      <DisplayBalances />

      <MainHeader title="History" element="h3" />

      <MainHeader title="Add new transaction" element="h3" />

      <EntryList />

      <NewEntryForm />
    </Container>
  );
}

export default App;
