const mainContainer = document.getElementById('main')

let page = 'articles'

export function initPage() {

    import(`./pages/${page}.js`)
        .then((module) => {
            mainContainer.innerHTML = module.html
        })
        .catch((err) => {
            console.error('Error while loading the module:', err);
        });
}