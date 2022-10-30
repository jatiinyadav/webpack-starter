import joke from '../src/generateJoke'
import laugh from "./assets/laugh.png"
import "./styles/main.scss"

const imgLaugh = document.getElementById("laughimg")
imgLaugh.src = laugh

const jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click", joke)

joke()