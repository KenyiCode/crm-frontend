import React from "react"
import {
    Form,
    Row,
    Col
} from "react-bootstrap"

export const SearchForm = ({handleOnChange, str}) => {
    return (
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="3">Search:{" "} </Form.Label>
                <Col sm={9}>
                    <Form.Control 
                        name="searchStr"
                        placeholder="Search..."
                        value={str}
                        onChange={handleOnChange}
                    />
                </Col>
            </Form.Group>
        </Form>
    )
}