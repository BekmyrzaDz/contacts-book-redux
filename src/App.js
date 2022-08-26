import "./App.css";
import Header from "./components/Header";
import ContactList from "./components/ContactList/ContactList";
import ContactItem from "./components/ContactItem/ContactItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/item:id" element={<ContactItem />} />
      </Routes>
    </div>
  );
}

export default App;
