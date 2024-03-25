import { data } from "./data.js";
let content = document.querySelector('.emoji__content')
const database = data
const slicedArray = database.slice(0, 9);
const render = (arr) =>{
    arr.forEach((e) => {
        const article = document.createElement('article')
        article.className = "emoji__article"
        article.innerHTML = `
            <p class="emoji__smile">${e.symbol}</p>
            <h2 class="emoji__titleArticle">${e.title}</h2>
            <p class="emoji__description">${e.keywords}</p>
        `
        content.append(article)
    })

}

render(slicedArray)
