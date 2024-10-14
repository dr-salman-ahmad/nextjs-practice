import { notFound } from "next/navigation"

async function getTicket(id: string) {
    let res = await fetch(`http://localhost:3001/tickets/${id}`)
    let ticket = await res.ok? res.json() : null
    // if (!ticket) notFound()
    if (!ticket) throw new Error("This is Salman")
    return ticket
  }
export default async function TicketDetail({params}: {params: {ticketId: string}}) {
    let ticket = await getTicket(params.ticketId)
    return(
        <>
            <p>Data of the Ticket {ticket.title}</p>
            {!ticket && <p>Ticket not Found</p>}
        </>
    );
}