import React from "react";
import { useNavigate } from "react-router-dom";
import './UserRegistration.css'

export function UserRegistration() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("../userlogin");
    }
    return (
        <>
            <div className="container">
                <form>
                    <h3 className="red-text center">User Registration</h3>
                    <div className="ui divider"></div>
                    <div className="ui  form">
                        <div>
                            <label>FirstName</label><br />
                            <input type="text" required placeholder="Given Name"></input>
                        </div>
                        <div >
                            <label>LastName</label><br />
                            <input type="text" required placeholder="Sur Name"></input>
                        </div>
                        <div >
                            <label>Email_ID</label><br />
                            <input type="email" required placeholder="example@gmail.com"></input>
                        </div>
                        <div>
                            <label>Password</label><br />
                            <input type="Password" required placeholder="Password"></input>
                        </div>
                        <button className="fluid ui button" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div >
        </>
    )

}