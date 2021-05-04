import { getOrders, getPaintColor, getStyles, getWheels, getTechnologies } from "./database.js"
// Orders module initialized
const paints = getPaintColor()
const technologies = getTechnologies()
const wheels = getWheels()
const interiors = getStyles()

export const Orders = () => {
    // Orders function invoked
    const orders = getOrders()

    const listItemsArray = orders.map((order) => {
        //orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked
        const foundPaint = paints.find(
            (paint) => {
                if (paint.id === order.paintId) {
                    return true
                }
            }
        )
        const foundTechnology = technologies.find(
            (technology) => {
                if (technology.id === order.technologyId) {
                    return true
                }
            }
        )
        const foundWheel = wheels.find(
            (wheel) => {
                if (wheel.id === order.wheelId) {
                    return true
                }
            }
        )
        const foundInterior = interiors.find(
            (interior) => {
                if (interior.id === order.interiorId) {
                    return true
                }
            }
        )
        return `
        <div class="order">
                    Order #${order.id} placed at ${new Date(order.timestamp).toLocaleString()}, has the interior seats order of ${foundInterior.type} with a ${foundTechnology.package}. You have also selected to combine that package with the extirior color of ${foundPaint.color}, and the matching ${foundWheel.type} rims.
                </div>
                `
    }
    )
    const html = listItemsArray.join("")
    return html
}