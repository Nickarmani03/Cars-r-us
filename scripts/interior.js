import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "interior") {
            const [, interiorId] = changeEvent.target.value.split("--")

            setInterior(parseInt(interiorId))
        }
    }
)
// sees if a change even has happened
export const Interiors = () => {

    let html = "<ul class='choice--list interior--list'>"

    for (const interior of interiors) {
        html += `<li class="choice-list-item interior--list-item">
        <input type="radio" value="interior--${interior.id}" name="interior"> ${interior.type}
        <div class="price">Price: $${interior.price.toFixed(2)}</div>
        </li>`
    }

    html += "</ul>"
    return html
}


