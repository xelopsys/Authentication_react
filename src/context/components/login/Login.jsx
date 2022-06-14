import React, {  useContext } from 'react';
import { AuthContext } from '../../AuthContext';
export default function Login() {
    const { dispatch } = useContext(AuthContext);


    const handleClick = () => {
        dispatch({ type: 'LOGOUT', payload: 'user' });
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={(e) => e.preventDefault}>
                <input type="text" name="name" placeholder='name' />
                <input type="password" name="password" placeholder='password' />
                <button type="submit" onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}
