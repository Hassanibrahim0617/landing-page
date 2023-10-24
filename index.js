import { features } from "./link";
import { articles } from "./link";
import { selectUl2 } from "./link";
import {selectUl} from "./link";

let buttonRequest = document.querySelectorAll('button')

function slide() {
    let openBurger = document.querySelector('.icon-hamburger');
    let mobileList = document.querySelector('.mobile-list');

    openBurger.addEventListener('click', () => {
         mobileList.classList.toggle('active')
        if(mobileList.classList.contains('active')){
            openBurger.src = './images/icon-close.svg'
        }
        else{
            openBurger.src = './images/icon-hamburger.svg'
        }
    });
};
slide()

// button request
buttonRequest.forEach(button =>{
    button.addEventListener('click',()=>{
window.location = './main.html'
    });
});

// FEATURES
let featuresElm = document.querySelector('.article-2');
let featuesDiv = '';
features.forEach((feature) =>{
    featuesDiv +=`
    <div>
          <img src="${feature.image}">
           <h4>
              ${feature.title}
           </h4>
           <p>
               ${feature.details}
           </p>
  </div>
    `
    featuresElm.innerHTML = featuesDiv;
})

// ARTICLES
let articlesElm = document.querySelector('.article-element');

let articleDiv = '';
articles.forEach((article)=>{
    articleDiv +=`
    <div>
            <img src="${article.image}">
       <div class="content">
            <small>
             ${article.id}
            </small>
            <h5><a href="${article.path}">
                          ${article.title}
                  </a>
             </h5>
                <p>
                   ${article.details}
                </p>
        </div>
    </div>
    `
    articlesElm.innerHTML = articleDiv;
   
});

// footer ul option
let optionUl = document.querySelector('.ul-1');

let li = '';
selectUl.forEach((option)=>{
    
    li +=`
    <li>
    <a href="${option.path}">${option.name}</a>
    </li>
    `
    optionUl.innerHTML = li;
    
});

let ul2 = document.querySelector('.ul-2');
let line = '';
selectUl2.forEach((link)=>{
    
    line +=`
    <li>
    <a href="${link.path}">${link.name}</a>
    </li>
    `
    ul2.innerHTML = line;
    
});