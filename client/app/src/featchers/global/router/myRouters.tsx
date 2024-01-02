import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../../users/pages/addUser/AddUser";
import HomePage from "../../users/pages/HomePage/HomePage";

function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}
export default MyRouter;
