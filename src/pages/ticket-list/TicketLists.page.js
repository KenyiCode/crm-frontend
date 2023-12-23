import {React, useState, useEffect} from "react" 
import {
    Container,
    Row,
    Col,
    Button
} from "react-bootstrap" 

import {
    Link
} from "react-router-dom"

import PropTypes from "prop-types"

import { PageBreadcrumb } from "../../components/breadcrumbs/Breadcrumbs.comp"
import { SearchForm } from "../../components/search-form/SearchForm.comp"
import { TicketTable } from "../../components/ticket-table/TicketTable.comp"
import data from "../../assets/data/dummy-data.json"

export const TicketLists = () => {
    const [strState, setStrState] = useState("")
    const [srchTickets, setSrchTickets] = useState(data)

    useEffect(() => {}, [strState, srchTickets])

    const handleOnChange = (e) => {
        const {value} = e.target
        setStrState(value) 
        searchTickets(value)
    }

    const searchTickets = (str) => {
        const arr = data.filter((row) => row.subject.toLowerCase().includes(str.toLowerCase())
        )

        setSrchTickets(arr)
    }


    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumb 
                        page="Ticket Lists"/>
                </Col>
            </Row>
            <Row>
                <Col className="mt-4">
                    <Link to="/add-ticket">
                     <Button variant="info">Add New Ticket</Button>
                    </Link>
                </Col>
                <Col className="text-right">
                    <SearchForm 
                        handleOnChange={handleOnChange}
                        str={strState}/>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={srchTickets} />
                </Col>
            </Row>
        </Container>
    )
}

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired
}