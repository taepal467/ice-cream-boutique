import './style.css';
import background from './background.jpg';
import logo from './logo_transparent.png';

function component() {
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const header = document.createElement("h1");
    const word1 = document.createElement("span");
    const word2 = document.createElement("span");
    const word3 = document.createElement("span");
    const word4 = document.createElement("span");
    const logoText = document.createElement("p");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const about = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    const a = document.createElement("a");


    //adding href attribute
    a.href = 
    home.textContent = "Home";
    about.textContent = "About";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

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
    nav.classList.add("navBar");
    ul.classList.add("navMenu");
    home.classList.add("home");
    home.classList.add("navLinks");
    about.classList.add("navLinks");
    menu.classList.add("navLinks");
    contact.classList.add("navLinks");

    logoText.textContent = ` "The best time for ice cream is always"`;
    logoText.classList.add("logo");
    header.classList.add("header");
  
    //images
    const myBackground = new Image();
    myBackground.src = background;
    myBackground.classList.add("backgroundImg");

    const myLogo = new Image();
    myLogo.src = logo;
    myLogo.classList.add("logoImg");

    container.appendChild(header);
    header.appendChild(word1);
    header.appendChild(word2);
    header.appendChild(word3);
    header.appendChild(word4);

    about.appendChild(a);

    ul.appendChild(home);
    ul.appendChild(about);
    ul.appendChild(menu);
    ul.appendChild(contact);

    nav.append(myLogo);
    nav.appendChild(ul);

   content.appendChild(myBackground);
   content.appendChild(container);
   content.appendChild(logoText);
   content.appendChild(nav);  
}
 document.body.appendChild(component());
