import MyRouter from "./featchers/global/router/myRouters";
import { fetchUsers } from "./featchers/users/slices/usersSlice";
import { useAppDispatch } from "./rtk/hooks";


function App() {
  const dispatch = useAppDispatch()
  dispatch(fetchUsers())
  return(
  

   <MyRouter />

  )
}

export default App;
