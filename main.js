const header = document.querySelector('.article__popup-text--js')

console.log(header)

header.innerHTML = 'To jest tekst wygenerowany przez JS'

function helloFunc(name, age) {
    console.log("Your name is " + name)
    console.log("You are " + age + " years old")
}

helloFunc("Max", 33)
