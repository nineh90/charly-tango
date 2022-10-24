window.addEventListener('scroll', function(){
    setNavigationPosition();
});

function setNavigationLink() {
    setTimeout(() => {
        const navigation = document.getElementById('navigation');
        if (navigation) {
            let id = window.location.search.substr(4);
            let currentLink = navigation.getElementsByTagName('a')[id - 1];
            currentLink.classList.add('active');
            let allNavLinks = document.getElementsByClassName('akkordeon-content');
            for (let i = 0 ; i < allNavLinks.length ; i++) {
                allNavLinks[i].classList.add('d-none');
                allNavLinks[i].classList.remove('d-flex');
            }
            currentLink.parentElement.classList.remove('d-none');
            currentLink.parentElement.classList.add('d-flex');
        } else {
            setNavigationLink();
        }
    });
}
setNavigationLink();

function setNavigationPosition() {
    const nav = document.getElementById('navigation');
    if (nav) {
     if (window.scrollY > 200) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
}

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
            let link = resp.url.substring(resp.url.search('subpages') + 9, resp.url.length - 5);
            if (link === 'prefix_liste') {
                await loadPrefixList();
            } else if (link === 'neue_mitglieder') {
                await loadMemberList();
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

