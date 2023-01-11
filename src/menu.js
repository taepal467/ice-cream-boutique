import './menu.css';

export function menuModule() {
    const content = document.getElementById("content");

    content.replaceChildren();

    const menuDiv = document.createElement("div");
    const milkshakeDiv = document.createElement("div");
    const cakeDiv = document.createElement("div");
    const mainHeader = document.createElement("h1");
    const iceCreamTitle = document.createElement("h3");
    const milkshakeTitle = document.createElement("h3");
    const cakeTitle = document.createElement("h3")

    //Ice cream 
    const iceCreamDiv = document.createElement("div");
    const strawberryImage = document.createElement("img");
    const vanillaImage = document.createElement("img");
    const coffeeImage = document.createElement("img");
    const lavenderImage = document.createElement("img");

    strawberryImage.src="https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    vanillaImage.src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    coffeeImage.src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    lavenderImage.src="https://images.unsplash.com/photo-1554521718-e87e96d67ca5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"

    strawberryImage.classList.add("images");
    vanillaImage.classList.add("images");
    coffeeImage.classList.add("images");
    lavenderImage.classList.add("images");

    //Images for milkshake 
    const chocolateImage = document.createElement("img");
    const oreoImage = document.createElement("img");
    const blueImage = document.createElement("img");
    const greenImage = document.createElement("img");

    chocolateImage.src="https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80"
    oreoImage.src="https://images.unsplash.com/photo-1624781740834-fbfbf5fd221a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    blueImage.src="https://img.freepik.com/free-photo/front-view-delicious-milkshake-wooden-table_23-2148296030.jpg?w=740&t=st=1673383056~exp=1673383656~hmac=06ea008eabd61d8e35b0bdb09c12bd6f848b0a24c22f87419d851506763fd60f"
    greenImage.src="https://img.freepik.com/free-photo/close-up-view-milkshake-with-marshmallow_23-2148296046.jpg?w=740&t=st=1673383287~exp=1673383887~hmac=602ae2bf18352da92ba1a05816b8e6fb0a853b3fcd4c6a24b09fff35a070b874"
    
    chocolateImage.classList.add("images");
    oreoImage.classList.add("images");
    blueImage.classList.add("images");
    greenImage.classList.add("images");

    //Images for Cake and Ice Cream
    const miniCookies = document.createElement("img");
    const purpleYams = document.createElement("img");
    const cupcake = document.createElement("img");
    const brownie = document.createElement("img");

    miniCookies.src="https://img.freepik.com/free-photo/ice-cream-with-mixed-fruit_1339-4925.jpg?w=1480&t=st=1673383737~exp=1673384337~hmac=33818069e4a19aacd51f6ffeaee164d0f5c48775a0b8717811507f190c258367"
    purpleYams.src = "https://images.unsplash.com/photo-1667592157554-ba7b37099f8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    cupcake.src="https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    brownie.src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"

    miniCookies.classList.add("images");
    purpleYams.classList.add("images");
    cupcake.classList.add("images");
    brownie.classList.add("images");

    //Titles
    iceCreamTitle.textContent = "\u25C6" + "Ice Cream" + "\u25C6";
    milkshakeTitle.textContent =  "\u25C6" + "Milkshakes" + "\u25C6";
    cakeTitle.textContent= "\u25C6" + "Cake and Ice Cream" + "\u25C6";
    mainHeader.textContent = "Menu";

    mainHeader.classList.add("mainTitle");
    iceCreamTitle.classList.add("titles");
    milkshakeTitle.classList.add("titles");
    cakeTitle.classList.add("titles");

    menuDiv.classList.add("mainDiv");
    menuDiv.classList.add("scroll");
 
   content.appendChild(menuDiv);
   menuDiv.appendChild(mainHeader);
   menuDiv.appendChild(iceCreamDiv);
   menuDiv.appendChild(milkshakeDiv);
   menuDiv.appendChild(cakeDiv);

   iceCreamDiv.appendChild(iceCreamTitle)
   iceCreamDiv.appendChild(strawberryImage);
   iceCreamDiv.appendChild(vanillaImage);
   iceCreamDiv.appendChild(coffeeImage);
   iceCreamDiv.appendChild(lavenderImage);

   milkshakeDiv.appendChild(milkshakeTitle);
   milkshakeDiv.appendChild(chocolateImage);
   milkshakeDiv.appendChild(oreoImage);
   milkshakeDiv.appendChild(blueImage);
   milkshakeDiv.appendChild(greenImage);

   cakeDiv.appendChild(cakeTitle);
    cakeDiv.appendChild(miniCookies);
    cakeDiv.appendChild(purpleYams);
    cakeDiv.appendChild(cupcake);
    cakeDiv.appendChild(brownie);
}
