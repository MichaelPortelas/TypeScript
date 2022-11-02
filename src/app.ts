/**
const a = "firstname"
const n = 3
const b = true
const d = null
const arr = ['aze', 'aze', 'aze']
const user = {firstname: "John", lastname: "Doe"}
console.log(user[a])
const date = new Date()

const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
    return 3
}

const compteur = document.querySelector('#compteur')

function printId(id: number | string): void {
    console.log(id.toString());
}
*/


const compteur = document.querySelector('#compteur')

let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if(span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment)
