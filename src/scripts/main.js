import differenceInDays from "date-fns/differenceInDays"
import { substractNumbers } from "./calculate"

const header = document.querySelector('.article__popup-text--js')

header.innerHTML = 'To jest tekst wygenerowany przez JS'

function helloFunc(name, age) {
    console.log("Your name is " + name)
    console.log("You are " + age + " years old")
}

helloFunc("Max", 33)

const resultDays = differenceInDays(
    new Date(2024, 4, 28, 0, 0),
    new Date(2023, 8, 3, 0, 0)
)

console.log("Days too my birthday: " + resultDays)

console.log("9 - 3 = " + substractNumbers(9, 3));
