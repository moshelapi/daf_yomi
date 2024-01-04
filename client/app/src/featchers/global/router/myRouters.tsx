import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../../users/pages/addUser/AddUser";
import UserPage from "../../users/pages/UsersPage/UsersPage";
import HomePage from "../pages/HomePage";

function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}
export default MyRouter;
