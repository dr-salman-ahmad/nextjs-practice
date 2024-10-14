interface TicketInterface{
    title: string,
    description: string,
    type: string
}
export default async function Ticket() {
    let data = await fetch('http://localhost:3001/tickets')
    let tickets = await data.json()
    return (
      <>
        {tickets.map((ticket: TicketInterface) => (
                <div>
                    <p>{ticket.title}</p>
                    <p>{ticket.description}</p>
                    <p>{ticket.type}</p>
                </div>
            ))}
      </>
    )
  }