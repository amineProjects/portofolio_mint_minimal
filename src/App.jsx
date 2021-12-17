import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "@/components/header/Header";

import Credits from "@/components/credits/Credits";

const App = () => {
  return (
    <div className="App">
      <div className="App-wrapper">
        <Navbar />
        <Header />
        {/* <Credits /> */}
      </div>
    </div>
  );
};

export default App;
