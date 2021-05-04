// Main is responsible for rendering HTML to the DOM
import { carsRUsHTML } from "./carsHTML.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carsRUsHTML()
}

renderAllHTML()

document.addEventListener(
    "ordersStateHasChanged",
    () => {
        renderHTML()
    }
)