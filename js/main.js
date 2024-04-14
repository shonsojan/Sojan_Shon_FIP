console.log("js file connected")


const buttons = document.querySelectorAll("#photoNav li");
const changeImg = document.querySelector("#hero-img");
const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll(".can a");
const content = document.querySelector(".lightbox article");

let cans = [
    {
      "name": "Quatro Greenapple",
      "bio": "Prepare your taste buds for a burst of freshness with Quatro's Greenapple Burst! Each sip of this crisp concoction is like taking a juicy bite out of a ripe green apple, with its invigorating flavor and subtle sweetness dancing on your palate. Whether you're enjoying a sunny day or need a pick-me-up, this drink is sure to refresh and revitalize, leaving you craving more of its vibrant green apple goodness."},
      
      {"name": "Quatro Orange",
      "bio": "Get ready to zest up your day with Quatro's Orange Zing! Packed with the sunny essence of ripe oranges, this tangy delight is like a burst of sunshine in every sip. From its vibrant color to its invigorating flavor, each sip is a refreshing reminder of warm summer days and carefree moments. Whether you're starting your morning off right or cooling down on a hot afternoon, Quatro's Orange Zing is sure to bring a smile to your face."},

      {"name": "Quatro Pineapple",
      "bio": "Transport yourself to a tropical paradise with Quatro's Pineapple Splash! This irresistible concoction combines the sweet, tangy flavor of ripe pineapples with a hint of exotic allure. Close your eyes and imagine swaying palm trees and sandy shores as you savor each sip of this refreshing drink. Perfect for poolside lounging or as a refreshing treat any time of day, Quatro's Pineapple Splash is your ticket to paradise in a glass."},

      {"name": "Quatro Strawberry",
      "bio": "Indulge in a berry bliss with Quatro's Strawberry Dream! Bursting with the luscious flavor of ripe strawberries, this sweet sensation is like a dream come true for your taste buds. With its vibrant hue and irresistible aroma, each sip is a delightful journey through strawberry fields in full bloom. Whether you're unwinding after a long day or celebrating a special occasion, Quatro's Strawberry Dream is the perfect way to sweeten any moment and leave you craving more."

      
    }
  ];


function changePic(e) {	
	changeImg.src=`./images/${e.currentTarget.dataset.cans}.jpg`	
}	

function fillContent() {
    console.log(this.dataset.canIndex);

    content.innerHTML = '';

    let canName = document.createElement('h3');
    canName.innerText = cans[this.dataset.canIndex].name;
    console.log("name",cans[this.dataset.canIndex].name)
    canName.classList = "lb_heading";
    content.appendChild(canName);

    let canBio = document.createElement('p');
    canBio.innerText = cans[this.dataset.canIndex].bio;
    canBio.classList = "lb_text";
    content.appendChild(canBio);


}

buttons.forEach(button => button.addEventListener("click", changePic));
links.forEach(link => link.addEventListener("click", fillContent));


