import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

//the document is listening for a change on the DOM for the event listener 
document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "wheel") {
            const [, wheelId] = changeEvent.target.value.split("--")

            setWheel(parseInt(wheelId))
        }
    }
)

export const Wheels = () => {

    let html = "<ul class='choice--list wheel--list'>"

    for (const wheel of wheels) {
        html += `<li class="choice-list-item wheel--list-item">
        <input type="radio" value="wheel--${wheel.id}" name="wheel"> ${wheel.type}
        <div class="price">Price: $${wheel.price.toFixed(2)}</div>
        </li>`
    }

    html += "</ul>"
    return html
}