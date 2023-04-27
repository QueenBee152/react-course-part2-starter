import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import loginStatusReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, authReducer] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(loginStatusReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, dispatch: authReducer }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
