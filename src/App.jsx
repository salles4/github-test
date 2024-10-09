import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Francis from "./francis/Francis";
import Jerome from "./jerome/Jerome";
import Joshua from "./joshua/Joshua";
import Stephanie from "./stephanie/Stephanie";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/francis" element={<Francis />} />
        <Route path="/jerome" element={<Jerome />} />
        <Route path="/joshua" element={<Joshua />} />
        <Route path="/stephanie" element={<Stephanie />} />
      </Routes>
    </>
  );
}

export default App;
