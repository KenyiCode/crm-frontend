import React from "react"
import logo from "../../assets/img/logo.png"
import {
    Navbar,
    Nav
} from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            bg="info"
            data-bs-theme="dark"
            expand="md">
            <Navbar.Brand>
                <img src={logo} alt="logo" width="75px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/Dashboard">Tickets</Nav.Link>
                    <Nav.Link href="/Dashboard">Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}