const database = {
    paint: [
        {
            id: 1,
            color: "Silver",
            price: 105.00,
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 225.00,
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 125.00,
        },
        {
            id: 4,
            color: "Spring Green",
            price: 215.00,
        },
    ],
    interior: [
        {
            id: 1,
            type: "Beige Fabric",
            price: 1215.00,
        },
        {
            id: 2,
            type: "Charcoal Fabric",
            price: 1255.00,
        },
        {
            id: 3,
            type: "White Leather",
            price: 1255.00,
        },
        {
            id: 4,
            type: "Black Leather",
            price: 3215.00,
        },
    ],
    technology: [
        {
            id: 1,
            package: "Basic Package (basic sound system)",
            price: 5215.00,
        },
        {
            id: 2,
            package: "Navigation Package (includes integrated navigation controls)",
            price: 5515.00,
        },
        {
            id: 3,
            package: "Visibility Package (includes side and rear cameras) ",
            price: 5615.00,
        },
        {
            id: 4,
            package: "Ultra Package (includes navigation and visibility packages)",
            price: 5915.00,
        },
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 875.00,
        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 915.00,
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 1075.00,
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 1175.00,
        },
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 2,
            technologyId: 3,
            wheelId: 3,
            customerName: "Bobby",
            timestamp: 1614659931693,
        },
        {
            id: 2,
            paintId: 5,
            interiorId: 2,
            technologyId: 3,
            wheelId: 1,
            customerName: "Sally",
            timestamp: 1619707361509,
        },
    ],
    orderBuilder: {},// it is a temporary state since the data is not changed permanently. its held here so the customer can change their choices, until the customer hit the order buttion
}
export const getPaintColor = () => {
    return [...database.paint]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getStyles = () => {
    return [...database.interior]
}
export const getTechnologies = () => {
    return [...database.technology]
}
export const getOrders = () => {
    return [...database.customOrders]
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
// updates the orderbuilder object temporarily. this put the id in the parameter. when its selected it makes it choose it by the id

export const setWheel = (id) => {
    database.orderBuilder.WheelId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const customOrders = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }
    ///above is the spread operator withe the 3 dots
    // Add a new primary key to the object
    newOrder.id = [...database.customOrders].pop().id + 1
    //pop in this stiuation will retun a new object

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}






