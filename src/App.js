import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from "./VendingMachine";
import Cheetos from "./Cheetos";
import Chips from "./Chips";
import Chocolate from "./Chocolate";
import SnackSelection from "./SnackSelection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/cheetos" element={<Cheetos />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/chocolate" element={<Chocolate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
