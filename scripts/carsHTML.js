
import { Interiors } from "./interior.js"
import { Paints } from "./paint.js"
import { Technology } from "./technology.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { theOrderButton } from "./orderButton.js"


export const carsRUsHTML = () => {
    return `
    <h1 class="my-welcome-message">Hi! Welcome To Cars-R-US</h1>
        
        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${Paints()} 
            </section>
            <section class="choices__technology options">
                <h2>Tech Packages</h2>
                ${Technology()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels 'N Rims</h2>
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                <h2>Lux Interiors</h2>
                ${Interiors()}
            </section>
        </article>
            ${ theOrderButton() }
            <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
        `
}

