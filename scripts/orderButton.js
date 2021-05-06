import { addCustomOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id === "theOrderButton") {
            const customerOrderSuccess = addCustomOrders()

            if (!customerOrderSuccess) {
                window.alert("Your order is not complete, ya filthy animal!")
            }
        }
    }
)

export const theOrderButton = () => {
    return `
    <button id="theOrderButton">Create Custom Order</button>
    `
}