import React from "react"
import PropTypes from "prop-types"
import {
    Container,
    Form,
    Row,
    Col,
    Button
} from "react-bootstrap"

export const ResetPassword = ({handleOnChange, onResetSubmit, email, reset}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form onSubmit={onResetSubmit}>
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
                        <Button type="submit">Reset</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#!" onClick={() => reset()}>Login Now?</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange : PropTypes.func.isRequired,
    onResetSubmit: PropTypes.func.isRequired,
    email : PropTypes.string.isRequired,
    reset: PropTypes.func
}