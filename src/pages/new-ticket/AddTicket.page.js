import {React, useState, useEffect} from "react"
import {
    Container,
    Row,
    Col,
    Breadcrumb,
    FormSelect
} from "react-bootstrap"
import {
    PageBreadcrumb
} from "../../components/breadcrumbs/Breadcrumbs.comp"
import {
    AddTicketForm
} from "../../components/add-ticket-form/AddTicketForm.comp"

const initialFormData = {
    subject: "",
    issueDate: "",
    details: ""
}

export const AddTicket = () => {

    const [formState, setFormState] = useState(initialFormData)

    useEffect(() => {}, [formState])

    const handleOnChange = e => {
        const {name, value} = e.target

        setFormState({
            ...formState,
            [name]: value
        })

        console.log(formState)
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        console.log("Form Submitted.")
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                        handleOnSubmit={handleOnSubmit}
                        handleOnChange={handleOnChange}
                        formData={formState}/>
                </Col>
            </Row>
        </Container>
    )
}