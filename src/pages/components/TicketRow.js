function TicketRow(props) {
    const { ticket } = props
  
    const { tour } = ticket
  
    return (
      <tr>
        <td>{tour.name}</td>
        <td>{ticket.email}</td>
        <td>{ticket.quantity}</td>
        <td>£{tour.price}</td>
        <td>£{ticket.quantity * tour.price}</td>
        <td>{ticket.id}</td>
      </tr>
    )
  }
  
  export default TicketRow