import {React, useState, useEffect} from "react"
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap"
import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumbs.comp"
import tickets from "../../assets/data/dummy-data.json"
import { MessageHistory } from "../../components/message-history/MessageHistory.comp"
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp"

const ticket = tickets[0]

export const Ticket = () => {

    const handleOnChange = (e) => {
        setUpdate(e.target.value)
    }

    const handleOnSubmit = () => {
        alert("Form Submitted!")
    }

    const [update, setUpdate] = useState("")
    useEffect(() => {}, [update])

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page={"Ticket"} />
                </Col>
            </Row>
            <Row>
                <Col className="text-weight-bolder text-secondary">
                    <div>Subject: {ticket.subject}</div>
                    <div>Date: {ticket.addedAt}</div>
                    <div>Status: {ticket.status}</div>
                </Col>
                <Col lg={2}>
                    <Button variant="outline-info">Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <MessageHistory msg={ticket.history} />
                </Col>
            </Row>
            <hr />
            <Row className="mt-4">
                <Col>
                    <UpdateTicket
                        update={update}
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit} />
                </Col>
            </Row>
        </Container>
    )
}