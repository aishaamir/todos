import React from 'react';
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <header style={header}>
                <h1>To-Do List</h1>
                <Link style={linkStyle} to="/">Home</Link> / <Link style={linkStyle} to='/about'>About</Link>
            </header>

        </div>
    )
}
const header = {
    backgroundColor: '#444',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    textDecoration: 'none'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
export default Layout
