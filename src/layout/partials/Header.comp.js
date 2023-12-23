import React from "react"
import logo from "../../assets/img/logo.png"
import {
    Navbar,
    Nav
} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"
import {
    LinkContainer
} from "react-router-bootstrap"

export const Header = () => {
    const navigate = useNavigate()
    const logMeOut = () => {
        navigate("/")
    }

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
                    <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link></LinkContainer>
                    <LinkContainer to="/ticket-list"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                    <Nav.Link onClick={logMeOut}>Log Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}