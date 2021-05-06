import { getOrders, getPaintColor, getInteriors, getWheels, getTechnologies } from "./database.js"
// Orders module initialized

const paints = getPaintColor()
const technologies = getTechnologies()
const wheels = getWheels()
const interiors = getInteriors()
const listItemsArray = (order) => {
    //orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const totalCost = foundInterior.price + foundWheel.price + foundTechnology.price + foundPaint.price

    return `
        <div class="order">
                    Order #${order.id} placed at ${new Date(order.timestamp).toLocaleString()}, has the interior seats order of ${foundInterior.type} with a ${foundTechnology.package}. You have also selected to combine that package with the extirior color of ${foundPaint.color}, and the matching ${foundWheel.type} rims.for a cost of 
${totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}
        </div>
        `
}
export const Orders = () => {
    // Orders function invoked
    // Orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked

    const orders = getOrders();
    //orders are genertated to the html again once the button if pushed to submit the orders the orders function is now invoked


    let html = "<ul>";
    // Use .map() for converting objects to <li> elements for example.
    const orderList = orders.map(listItemsArray);
    //iterates the array as a parameter of the function. returns an array of strings in a different format. this is a conversion.
    html += orderList.join("");
    // joins the reult into a single string
    html += "</ul>";

    return html;
};