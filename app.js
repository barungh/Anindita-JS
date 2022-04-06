user1 = {
  "name" : "Anindita",
  "address" : "Siliguri"
}

user2 = {
  "name" : "Anwesha",
  "address" : "London"
}

user3 = {
  "name" : "Meghna",
  "address" : "South-korea"
}

user4 = {
  "name" : "Sayan",
  "address" : "America"
}

data = [ user1, user2, user3, user4]

btn = document.getElementById("b1");

btn.addEventListener('click', addUsers);

function addUsers () {
  data.forEach((e) =>{
    
    // Creating new div and adding class
    const newElement = document.createElement("div");
    newElement.classList.add("card");
    
    // Adding name
    const newE = document.createElement("div");
    const nContent = document.createTextNode("Name : ");
    newE.appendChild(nContent);
    newElement.appendChild(newE);
    const newContent = document.createTextNode(e.name);
    newElement.appendChild(newContent);
    
    // Adding place
    const placeE = document.createElement("div");
    const placeName = document.createTextNode("Place : ");
    placeE.appendChild(placeName);
    newElement.appendChild(placeE);
    const newPlace = document.createTextNode(e.address);
    newElement.appendChild(newPlace);
    
    // appending to parent element
    const myDiv = document.getElementById("b2");
    document.body.insertBefore(newElement, myDiv);
  });
}

 
