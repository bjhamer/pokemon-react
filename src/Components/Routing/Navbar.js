import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
    return (
        <Nav className='justify-content-center'>
            <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar