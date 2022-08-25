import "./App.css";
import Header from "./components/Header";
import ContactList from "./components/ContactList/ContactList";
import ContactItem from "./components/ContactItem/ContactItem";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <ContactList /> */}
      <ContactItem />
    </div>
  );
}

export default App;
