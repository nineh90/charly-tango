async function includeHTML(link) {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
            if (link === 'prefix_liste') {
                await loadPrefixList();
            }
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

function openAkkordeonContent(e) {
    let openContainer = document.getElementsByClassName('akkordeon-content d-flex');
    let contentContainer =  e.currentTarget.parentElement.children[1];
    openContainer[0].classList.add('d-none');
    openContainer[0].classList.remove('d-flex');

    contentContainer.classList.remove('d-none');
    contentContainer.classList.add('d-flex');
}

function openLink(folder, link) {
    let template = document.getElementById('content-template');
    if (template) {
        template.setAttribute("w3-include-html", "./assets/templates/" + folder + "/" + link + ".html");
        includeHTML(link);
    }
}

function openMainLink(link) {
    let template = document.getElementById('content-template');
    if (template) {
        template.setAttribute("w3-include-html", "./assets/templates/main/" + link + ".html");
        includeHTML(link);
    }
}