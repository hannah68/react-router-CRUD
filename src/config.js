export class LocalRoutes {
    static home = "/"
    static admin = "/admin"
    static tickets = "/tickets"
    static tours = "/tours"
    static toursBook = `${LocalRoutes.tours}/book`
    static toursBookWithId = `${LocalRoutes.toursBook}/:id`
    static ticketsEdit = `${LocalRoutes.tickets}/edit`
    static ticketsEditWithId = `${LocalRoutes.ticketsEdit}/:id`

    static adminHome = "/"
    static adminTours = "tours"
    static adminTickets = "tickets"
    static adminToursCreate = `${LocalRoutes.adminTours}/create`
    static adminToursEdit = `${LocalRoutes.adminTours}/edit`
    static adminToursEditWithId = `${LocalRoutes.adminToursEdit}/:id`
    static adminTicketsSummary = `${LocalRoutes.adminTickets}/summary`
}

export class APIEndpoints {
    static baseURL = "http://localhost:3030"
    static tours = `${APIEndpoints.baseURL}/tours`
    static tickets = `${APIEndpoints.baseURL}/tickets`
}

export class UIText {

  static title = "Tour Manager"
  static userHome = "User Home"
  static dashboard = "Dashboard"
  static home = "Home"

  static userPages = "User Pages"
  static adminPages = "Admin Pages"

  static tickets = "Tickets"
  static ticketsBook = "Book Tickets"
  static ticketBook = "Book Ticket(s)"
  static ticketEditDelete = "Edit/Delete Ticket(s)"
  static ticketEdit = "Edit Ticket(s)"
  static ticketDelete = "Delete Ticket(s)"
  static ticketQuantity = "Quantity"
  static ticketDate = "Date"
  static ticketEmail = "Email"
  static ticketPrice = "Price per Ticket"

  static orderTotal = "Total"
  static orderReference = "Ref"
  static cancel = "Cancel"

  static tourCreate = "Create Tour"
  static toursAvailable = "Available Tours"
  static tour = 'Tour'
  static tourEditDelete = "Edit/Delete Tour"
  static tourEdit = "Edit Tour"
  static tourDelete = "Delete Tour"
  static tourPrice = "Price"
  static tourName = "Name"

}