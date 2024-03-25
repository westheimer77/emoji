import { data } from "./data.js";
let content = document.querySelector('.emoji__content')
let database = data
const slicedArray = database.slice(0, 6);
let render = (arr) =>{
    arr.forEach((e) => {
        content.innerHTML += `
        <article class="emoji__article">
            <p class="emoji__smile">${e.symbol}</p>
            <h2 class="emoji__titleArticle">${e.title}</h2>
            <p class="emoji__description">${e.keywords}</p>
        </article>`
    })

}

render(slicedArray)
