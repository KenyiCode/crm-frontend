import React from "react"
import PropTypes from "prop-types"
import {
    Container,
    Form,
    Row,
    Col,
    Button
} from "react-bootstrap"

export const LoginForm = ({handleOnChange, onSubmit, email, pass, reset}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Client Login</h1>
                    <hr />
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={pass}
                                placeholder="Enter Password"
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => reset()}>Forget Password</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
    pass : PropTypes.string.isRequired,
    reset: PropTypes.func
}