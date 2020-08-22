import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment>            
            <Link to="/login">Log In</Link>
            <br/>
            <Link to="/signup">Sign Up</Link>
        </React.Fragment>

    )
}
