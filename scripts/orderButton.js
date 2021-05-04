import { customOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "theOrderButton") {
            const customerOrderSuccess = customOrders()

            if (!customerOrderSuccess) {
                window.alert("Your order is incomplete! Please choose from all options.")
            }
        }
    }
)

export const theOrderButton = () => {
    return `
    <button id="theOrderButton">Create Custom Order</button>
    `
}