import ClientTesting from "../components/ClientTesting"
import ServerTesting from "../components/ServerTesting"
export default function Place () {
    const data = "Salman"
    return (
        <>
            <p>This is the Server component</p>
            {/* <ClientTesting data={data}/> */}
            <ClientTesting data={data}>
                <ServerTesting data={data}/>
            </ClientTesting>
        </>
    )
}