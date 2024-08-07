import "./App.style.scss";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </>
  );
}
