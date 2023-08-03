// Add your code to this file

//Assign all queries to a variable
let images = document.querySelectorAll("img");
let h3 = document.querySelectorAll("h3");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let footer = document.querySelector("footer");

//single element changes
body.style.backgroundColor = "blue";
h1.style.textDecoration = "underline";
footer.style.textDecoration = "underline overline";

//for loops to make sure changes are made to all img and h3 elements
for(i = 0; i < images.length; i++) {
    images[i].style.border = "3px dotted yellow";
}
for(i = 0; i < h3.length; i++) {
    h3[i].style.color = "yellow";
}
