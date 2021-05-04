import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.name === "technology") {
            const [, technologyId] = changeEvent.target.value.split("--")
            setTechnology(parseInt(technologyId))
        }
    }
)

export const Technology = () => {

    let html = "<ul class='choice--list technology--list'>"

    for (const technology of technologies) {
        html += `<li class="choice-list-item technology--list-item">
        <input type="radio" value="technology--${technology.id}" name="technology"> ${technology.package}
        
        <div class="price">Price: $${technology.price.toFixed(2)}</div>
        </li>`
    }

    html += "</ul>"
    return html
}