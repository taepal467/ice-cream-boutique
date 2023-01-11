import './home.css';

export function homeModule() {
    const content = document.getElementById("content");

    content.replaceChildren();

    const header = document.createElement("h1");
    const word1 = document.createElement("span");
    const word2 = document.createElement("span");
    const word3 = document.createElement("span");
    const word4 = document.createElement("span");
    const logoText = document.createElement("p");

    //header animation text
    word1.textContent = "Tae's ";
    word1.classList.add("title-word");
    word1.classList.add("title-word-1")

    word2.textContent = "Ice ";
    word2.classList.add("title-word");
    word2.classList.add("title-word-2")

    word3.textContent = "Cream ";
    word3.classList.add("title-word");
    word3.classList.add("title-word-3")

    word4.textContent = "Boutique";
    word4.classList.add("title-word");
    word4.classList.add("title-word-4")

    //nav 
    logoText.textContent =' "The best time for ice cream is always" ';
    logoText.classList.add("logo");
    header.classList.add("header");
  
    content.appendChild(header);
    header.appendChild(word1);
    header.appendChild(word2);
    header.appendChild(word3);
    header.appendChild(word4);
   content.appendChild(logoText);
}
