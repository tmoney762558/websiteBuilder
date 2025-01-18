import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, WebsiteBuilder } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/new-webpage" element={<WebsiteBuilder />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
