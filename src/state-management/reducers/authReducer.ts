
interface Action {
    type: 'LOGIN' | 'LOGOUT';
}

const loginStatusReducer = (state: string, action: Action ): string => {
    if (action.type === "LOGIN") return "Ilana.deWet";
    if (action.type === "LOGOUT") return "";
    return state;
}

export default loginStatusReducer