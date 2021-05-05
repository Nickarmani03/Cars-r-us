import { getOrders, getPaintColor, getInteriors, getWheels, getTechnologies } from "./database.js"
// Orders module initialized
const paints = getPaintColor()
const technologies = getTechnologies()
const wheels = getWheels()
const interiors = getInteriors()
const orders = getOrders()

export const Orders = () => {
    // Orders function invoked
    

    const listItemsArray = orders.map((order) => {
        //orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked
        
        let totalCost = 0

        const foundPaint = paints.find(
            (paint) => {
                if (paint.id === order.paintId) {
                    return true
                }
            }
        )
        totalCost += foundPaint.price

        const foundTechnology = technologies.find(
            (technology) => {
                if (technology.id === order.technologyId) {
                    return true
                }
            }
        )
        totalCost += foundTechnology.price

        const foundWheel = wheels.find(
            (wheel) => {
                if (wheel.id === order.wheelId) {
                    return true
                }
            }
        )
        totalCost += foundWheel.price

        const foundInterior = interiors.find(
            (interior) => {
                if (interior.id === order.interiorId) {
                    return true
                }
            }
        )
        totalCost += foundInterior.price

        return `
        <div class="order">
                    Order #${order.id} placed at ${new Date(order.timestamp).toLocaleString()}, has the interior seats order of ${foundInterior.type} with a ${foundTechnology.package}. You have also selected to combine that package with the extirior color of ${foundPaint.color}, and the matching ${foundWheel.type} rims.
                
                for a cost of ${totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        }
        )
            }
                </div>`
    }
    )
    const html = listItemsArray.join("")
    return html
}