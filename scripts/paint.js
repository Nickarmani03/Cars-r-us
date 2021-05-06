import { getPaintColor, setPaint } from "./database.js"

const paints = getPaintColor()

//the document is listening for a change on the DOM for the event listener 
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "paint") {
            const [, paintId] = changeEvent.target.value.split("--")

            setPaint(parseInt(paintId))
        }
    }
)

export const Paints = () => {

    let html = "<ul class='choice--list paint--list'>"

    for (const paint of paints) {
        html += `<li class="choice-list-item paint--list-item">
        <input type="radio" value="paint--${paint.id}" name="paint"> ${paint.color}
        <div class="price">Price: $${paint.price.toFixed(2)}</div>
        </li>`
    }

    html += "</ul>"
    return html
}
