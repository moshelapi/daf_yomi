import MyRouter from "./featchers/global/router/myRouters";
import { fetchUsers } from "./featchers/users/slices/usersSlice";


function App() {
  fetchUsers()
  return(
  

   <MyRouter />

  )
}

export default App;
