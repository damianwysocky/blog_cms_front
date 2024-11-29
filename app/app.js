import { initPages } from './pages.js';

function init() {
    initPages();
}

init();

// - - -

const titleInputId = 'title'
const contentInputId = 'content'

let titleInput
let contentInput

titleInput = document.getElementById(titleInputId)
contentInput = document.getElementById(contentInputId)

// - - -

const createButtonId = 'create-button'

let createButton

createButton = document.getElementById(createButtonId)

createButton.addEventListener('click', () => {
    const title = titleInput.value
    const content = contentInput.value

    console.log(title)
    console.log(content)
})