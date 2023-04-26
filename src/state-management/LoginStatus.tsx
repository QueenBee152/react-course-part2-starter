import { useReducer, useState } from "react";
import loginStatusReducer from "./reducers/authReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginStatusReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ type: "LOGIN", username: "Ilana.deWet" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
