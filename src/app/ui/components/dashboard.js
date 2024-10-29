import { fetchInvoices } from "@/app/lib/data/";

export default async function Dashboard() {
    const invoices = await fetchInvoices()

    console.log("invoices: ", invoices);

    return (
    <div>
        <h1>Invoices</h1>
        <ul>{invoices.map((invoices) => (
            <li key={invoice.id}>
                ID: {invoice.id} | Customer ID: {invoice.customer_id} | Amount:{" "} {invoice.amount} <br/>
            </li>
        ))}</ul>
    </div>
);
}