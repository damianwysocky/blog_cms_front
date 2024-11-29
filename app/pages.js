const mainContainer = document.getElementById('main')

let page = 'articles'

export function initPages() {
    importPage(page)
    enableNav()
}

function enableNav() {
    const navElements = document.getElementsByClassName('nav__element')

    for (const element of navElements) {
        element.addEventListener('click', () => {
            importPage(element.innerHTML)
        })
    }
}

function importPage(page) {
    import(`./pages/${page}.js`)
        .then((module) => {
            mainContainer.innerHTML = module.html
        })
        .catch((err) => {
            console.error('Error while loading the module:', err)
        })
}