import React from "react"
import {
    Table
} from "react-bootstrap"

export const TicketTable = ({tickets}) => {
    return (
        <Table striped hover bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
               {tickets.length ? tickets.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.subject}</td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>
                </tr>
               )) : 
               <tr>
                <td colSpan={4} className="text-center">No Tickets To Show</td>
               </tr>}
            </tbody>
        </Table>
    )
}