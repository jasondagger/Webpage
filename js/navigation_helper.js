function updateLinks() {
    let url = document.querySelector("iframe[name=Content]").contentDocument.location.pathname;
    for (let link of document.querySelectorAll("nav a")) {
        if (link.pathname == url) {
            link.classList.add("Active");
        } else {
            link.classList.remove("Active");
        }
    }
}

document.addEventListener("DOMContentLoaded", e => document.querySelector("iframe").addEventListener("load", e => updateLinks()));