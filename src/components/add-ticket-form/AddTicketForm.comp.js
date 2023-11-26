import React from "react" 
import "./add-ticket-form.style.css"
import {Form, Button, Row, Col} from "react-bootstrap"
import PropTypes from "prop-types"

export const AddTicketForm = ({handleOnSubmit, handleOnChange, formData}) => {
    return (
        <div className="jumbotron mt-5">
            <h1>Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            name="subject"
                            value={formData.submit}
                            onChange={handleOnChange}
                            placeholder="Enter Subject Here"
                            required />
                    </Col>
                </ Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue Found</Form.Label>
                    <Col sm={9}>
                        <Form.Control 
                            type="date"
                            name="issueDate"
                            value={formData.issueDate}
                            onChange={handleOnChange}
                            required />
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="details"
                        value={formData.details}
                        onChange={handleOnChange}
                        rows={5}
                        required />
                </Form.Group>
                <div class="d-grid">
                    <Button variant="info" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired
}