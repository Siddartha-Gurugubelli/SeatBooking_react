import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export function LoginForm() {


    const nav1 = useNavigate();
    const navigate = useNavigate();
    function handleClick() {
        navigate('../Location')
    }

    /*const [isSubmitted, setIsSubmitted] = useState(false);

    const [errors, setErrors] = useState({});
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmit = async (e) => {
        e.preventDefault();
        const data = { userName, password };
        console.log('admin login errors:', errors);
        if (Object.keys(errors).length === 0) {
            console.log('Logining with data: ', { data });
            try {
                const res = await axios.post('http://localhost:8080/userlogin', data);
                console.log('Posting data', res);
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate("./User");

                }, 2000);
            } catch (e) {
                console.error(e)
                alert("Invalid Credentials")
            }
        } else {
            setErrors(errors);
        }
    }*/

    function handleReg() {
        nav1("./UserRegistration");
    }

    return (
        <>

            <div className="row formStyle">
                <form className="col s5 offset-s4 z-depth-1">
                    <h4 className="blue-text center">User Login</h4>
                    <div className="input-field">
                        <input type="text" id="name" placeholder="User_Name" required />
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" placeholder="Password " required />
                    </div>
                    <button className="btn waves-effect waves-light btnStyle" onClick={handleClick}>Login
                    </button>
                    <button className="btnStyle" onClick={handleReg}>New user? Register</button>
                </form>
            </div>
        </>
    );
}


export default LoginForm;