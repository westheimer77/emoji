import { data } from "./data.js";
const content = document.querySelector('.emoji__content');
const input = document.querySelector('.emoji__input')
const getUniqKeywords = (arr) => {
    return arr.map((i) => ({
        ...i,
        keywords: [...new Set(i.keywords.split(' '))].join(' ')
    }));
};


const database = getUniqKeywords(data)

const render = (arr) =>{
    content.innerHTML = ""
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

render(database)


function inputHandler () {
    const value = input.value;
    console.log(value);
    const filterArr = database.filter((e) => e.title.toLowerCase().includes(value.toLowerCase().trim()) || e.keywords.toLowerCase().includes(value.toLowerCase().trim()))
    render(filterArr)
}


input.addEventListener('input', inputHandler)