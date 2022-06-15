import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../../context/AuthContext'
import { auth } from '../../firebase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

export default function Home() {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = () => {
        signOut(auth).then(() => {
            dispatch({ type: "LOGOUT" })
            navigate('/login')
        }
        ).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Home</h1>
            <Link to="/login" className="link">
                <li style={{ padding: 0, margin: 0 }}>
                    <button onClick={handleClick} >

                        <span>Login out</span>

                    </button>
                </li>
            </Link>
        </div>
    )
}