import React from "react";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="login"/>
                <MyInput type="password" placeholder="password"/>
                <MyButton>Login</MyButton>
                <MyButton>Register</MyButton>

            </form>
        </div>
    );
}

export default App;
