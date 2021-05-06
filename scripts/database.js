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
    customerOrders: [
        /* {
             id: 1,
             paintId: 1,
             interiorId: 2,
             technologyId: 3,
             wheelId: 3,
             customerName: "Bobby",
             timestamp: 1614659931693,
        },*/
    ],
    orderBuilder: {},// it is a temporary state since the data is not changed permanently. its held here so the customer can change their choices, until the customer hit the order buttion
}

export const getPaintColor = () => {
    return [...database.paint]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getInteriors = () => {
    return [...database.interior]
}
export const getTechnologies = () => {
    return [...database.technology]
}
export const getOrders = () => {
    return [...database.customerOrders]
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
// updates the orderbuilder object temporarily. this put the id in the parameter. when its selected it makes it choose it by the id
// Copy the current state of user choices
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const addCustomOrders = () => {
    if (
        "interiorId" in database.orderBuilder &&
        "paintId" in database.orderBuilder &&
        "technologyId" in database.orderBuilder &&
        "wheelId" in database.orderBuilder
        //In operator returns true if these things are IN FACT in the database.orderBuilder, so if nothing is clicked, will return false
    ) {
        //This is a ternary condition statement, if not using this, use an else if statement

        //creates a copy of the empty orderBuild object, and stores the object in a new variable called newOrder
        const newOrder = { ...database.orderBuilder }

        //checking if there is an object with and id greater than 0
        newOrder.id = database.customerOrders.length > 0
            ? // -YES? if it is 
            //  Get the id of the last order from the customerOrder array
            //  Set the newOrder.id equal to that value + 1
            //any objects?
            [...database.customerOrders].pop().id + 1
            //pop in this stiuation will retun a new object
            : //-NO? if its not
            // --- Set newOrder.id equal to 1
            1;

        //assigning the value of the newOrder.timestamp to the current timestamp
        newOrder.timestamp = Date.now();
        // Add the new order object to custom orders state
        database.customerOrders.push(newOrder)
        // Reset the temporary state for user choices
        database.orderBuilder = {}
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateHasChanged"))
        return true
    }
    return false
}