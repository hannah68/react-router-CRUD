import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { fetchData } from "../../../../fetch.js"
import { LocalRoutes, APIEndpoints, UIText } from "../../../../config.js"

function EditTicket (props) {
  const { tickets, setTickets } = props

  const [ticketToEdit, setTicketToEdit] = useState({
    tourId: "",
    email: "",
    quantity: 0,
    date: ""
  })

  const [edited, setEdited] = useState(false)
  const [deleted, setDeleted] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // console.log('edit ticket location', location)

  useEffect(() => {
    if ( deleted && location.state) {
      const ticketId = location.state.ticket.id

      const fetchOptions = {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        }
      }

      const fetchDataParams = {
        url: `${APIEndpoints.tickets}/${ticketId}`,
        options: fetchOptions,
        cb: deletedTicket => {
          const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId)
          setTickets(updatedTickets)
          navigate(LocalRoutes.tickets)
        }
      }

      fetchData(fetchDataParams)
      setDeleted(false);
    }
  }, [navigate, location.state, setTickets, tickets, deleted])

  useEffect(() => {
    if ( edited && location.state) {
      const { tour, ticket } = location.state

      const thisTicket = {
        tourId: ticket.tourId,
        email: ticketToEdit.email ? ticketToEdit.email : ticket.email,
        quantity: ticketToEdit.quantity ? ticketToEdit.quantity : ticket.quantity,
        date: ticketToEdit.date ? ticketToEdit.date : ticket.date
      }
      const ticketId = ticket.id
      const fetchOptions = {
        method: 'PATCH',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(thisTicket)
      }

      const fetchDataParams = {
        url: `${APIEndpoints.tickets}/${ticketId}`,
        options: fetchOptions,
        cb: editedTicket => {

          // this creates a ticket in its cached form, for display
          const myTicket = {
            ...thisTicket,
            id: editedTicket.id,
            tour: {
                id: tour.id,
                name: tour.name,
                price: tour.price
            }
          }

          const updatedTickets = tickets.map(ticket => {
            if (ticket.id === editedTicket.id) {
              return myTicket
            }
            return ticket
          })

          setTickets(updatedTickets)
          navigate(LocalRoutes.tickets)
        }
      }

      fetchData(fetchDataParams)
      setEdited(false);
    }
  }, [navigate, location.state, ticketToEdit, setTickets, tickets, edited])

  function handleSubmit(event) {
    event.preventDefault()
    setEdited(true)
  }

  function handleDelete() {
    setDeleted(true)
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setTicketToEdit({ ...ticketToEdit, [name]: value })
  }

  return (
    <>
      <h2>{UIText.ticketEdit}</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="email">{UIText.ticketEmail}</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={ticketToEdit.email ? ticketToEdit.email : location.state.ticket.email}
        />
        <label htmlFor="quantity">{UIText.ticketQuantity}</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={ticketToEdit.quantity ? ticketToEdit.quantity : location.state.ticket.quantity}
        />
        <label htmlFor="date">{UIText.ticketDate}</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          onChange={handleChange}
          value={ticketToEdit.date ? ticketToEdit.date : location.state.ticket.date}
        />
        <button type="submit">{UIText.ticketEdit}</button>
        <button type="button" onClick={handleDelete}>
          {UIText.ticketDelete}
        </button>
      </form>
      <button onClick={() => navigate(LocalRoutes.tickets)}>{UIText.cancel}</button>
    </>
  )
}

export default EditTicket