import differenceInDays from "date-fns/differenceInDays"
import { substractNumbers } from "./calculate"

const header = document.querySelector('.article__popup-text--js')
const newArray = [2, 5, 16, 92, -25];
header.innerHTML = 'To jest tekst wygenerowany przez JS'

function helloFunc(name, age) {
    console.log("Your name is " + name)
    console.log("You are " + age + " years old")
}

function countArray(myArray) {
    let sum = 0;
    for(let i = 0; i < myArray.length; i++) {
        sum += myArray[i];
    }
    return sum;
}

const resultDays = differenceInDays(
    new Date(2024, 4, 28, 0, 0),
    new Date(2023, 8, 3, 0, 0)
)

helloFunc("Max", 33)

console.log("Days too my birthday: " + resultDays)
console.log("9 - 3 = " + substractNumbers(9, 3));

console.log("Array contains: ");
for(let i = 0; i < newArray.length; i++){
    console.log(newArray[i])
}

console.log("Sum of elements in array: " + countArray(newArray));

