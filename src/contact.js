import './contact.css';

export function contactModule() {
    const content = document.getElementById("content");
   
    content.replaceChildren();

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");

    const header = document.createElement("h1");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    const address = document.createElement("p");

    header.textContent = "Contact";
    header.classList.add('title');

    email.textContent = "✉️ " + "taepal467@gmail.com";
    phone.textContent = "📞" + "(323) 555- 5555";
    address.textContent = "📍" + "Los Angeles, CA";
 
   content.appendChild(contactDiv);
   contactDiv.appendChild(header);
   contactDiv.appendChild(email);
   contactDiv.appendChild(phone);
   contactDiv.appendChild(address);
}