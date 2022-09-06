import "./App.css";
// import Header from "./components/Header";
import ContactList from "./components/ContactList/ContactList";
import ContactItem from "./components/ContactItem/ContactItem";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactList />} />
          <Route path="/item:id" element={<ContactItem />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
