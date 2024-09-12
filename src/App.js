import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import "./index.css";
import animations from "@midudev/tailwind-animations";
import Typewriter from "typewriter-effect";
import Buscaminas from "./components/buscaminas";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen bg-black overflow-hidden">
        <Header />
        <Buscaminas />
      </div>
    </div>
  );
}

export default App;
