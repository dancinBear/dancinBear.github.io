import * as projects from "./projects.js";

let pageContent;
let page;
const init = () => {
    let navButtons = document.querySelectorAll("nav p");
    pageContent = document.querySelector("#pageContent");
    for (let button of navButtons) {
        button.parentElement.onclick = (e) => {
            window.history.replaceState(null, "", `?${e.target.id}`);
            filterProjects();
        }
    }
    filterProjects();
}

const filterProjects = () => {
    let filtered = [];
    page = window.location.search.slice(1);
    if (page.includes("&")) page = page.slice(0, page.indexOf("&"));
    if (page == "") {
        window.history.replaceState(null, "", `?home`);
        homePage();
        return;
    }
    if (page == "home") {
        homePage();
        return;
    }
    for (let project of projects.all) {
        if (project.type.includes(page)) filtered.push(project);
    }
    if (filtered.length == 0) window.history.replaceState(null, "", "?home");
    displayPage(filtered);
}

const displayPage = (list) => {
    let bigString = "";
    let title = page.charAt(0).toUpperCase() + page.slice(1);

    console.log(title);
    bigString += `<h2>${title}</h2> <br>`;
    bigString += `<div class='container'><div class='row'>`
    for (let i = 0; i < list.length; i++) {
        if (i % 3 == 0) bigString += `</div><div class='row'>`;
        let project = list[i];
        bigString += `<div class='col-lg'><h3>${project.name}</h3>`;
        switch (project.media.type) {
            case "img":
                bigString += `<img src="${project.media.src}" alt="${project.media.alt}"`;
                break;
            case "embed":
                bigString += project.media.embed;
                break;
            case "none":
                break;
        }
        bigString += `<p>${project.text}</p>`;
        switch (project.link.type) {
            case "link":
                bigString += `<p><a href="${project.link.href}" target="_blank">${project.link.text}</a></p>`;
                break;
            case "modal":
                bigString += project.link.href;
                break;
            case "none":
                break;
        }
        bigString += `</div>`;
    }
    bigString += `</div></div>`;


    pageContent.innerHTML = bigString;
}

const homePage = () => {
    pageContent.innerHTML = "<div class='container'><div class='row'><div class='col'><h2>About Me</h2></div></div><div class='row'><div class='col-sm'><p>Hi, I'm Dancin and I make things, from code to art and beyond! I hail from Ithaca, New York and have been making things since I was a small child. I've got no intention of stopping my creative rampage, so the contents of this portfolio page are just a taste of what's to come!</p></div></div><div class='row'><div class='col'><h2>My Personal Favorites</h2></div></div><div class='row'><div class='col-sm'><h3>Daraz's Guide to the World</h3><p>A Dungeons and Dragons 5th edition sourcebook that I've been working on for well over a year now. Currently, it consists of three playable races, a complete playable class, and a subclass for 5e's sorcerer.</p><p class='link' id='toWriting'>Find it and more here!</p></div><div class='col-sm'><h3>EGG</h3><p>My latest musical release under the name Dancin Bear. It's got 6 tracks in a wide variety of genres and styles, some with lyrics and some without.</p><p class='link' id='toMusic'>Find it and more here!</p></div><div class='col-sm'><h3>Self</h3><p>A collection of manipulated photos that ask the questions: What is a person? Who am I? Who are you?</p><p class='link' id='toArt'>Find it and more here!</p></div></div></div>";
    document.querySelector("#toWriting").onclick = () => {
        document.querySelector("#writing").click();
    }
    document.querySelector("#toMusic").onclick = () => {
        document.querySelector("#music").click();
    }
    document.querySelector("#toArt").onclick = () => {
        document.querySelector("#art").click();
    }
}


export {
    init
};
