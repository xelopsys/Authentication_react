import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            dispatch({ type: "LOGIN", payload: user })
            navigate("/")
        }).catch((error) => {
            setError(error.message)
        }
        )
    }


    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='name' onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <button type="submit">Login</button>
                {error && <span className="error">Wrong email or password</span>}

            </form>
        </div>
    )
}
