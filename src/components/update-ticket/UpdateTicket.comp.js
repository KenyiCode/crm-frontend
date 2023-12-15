import React from "react"
import {
    Form,
    Button
} from "react-bootstrap"
import PropTypes from "prop-types"

export const UpdateTicket = ({update, handleOnChange, handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <div></div>
            <Form.Text>Please reply with your message or ticket update here</Form.Text>
            <Form.Control
                value={update}
                onChange={handleOnChange}
                as="textarea"
                row="5"
                name="detail"
            />
            <div className="text-end mt-3 mb-3">
                <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes = {
    update: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}