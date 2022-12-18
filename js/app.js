/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll("section");


//console.log(navBarList);
/*let navBar = document.createElement("li");
navBar.setAttribute("href", "#${section.id}");
navBar.setAttribute("class", "menu__link");
navBar.setAttribute("data-nav", "$section.id"); */

// Building the navigation menu
function drawNavBarListItems()
{
    for (section of sections) {
        let navBar = document.createElement("li");
       // navBar.setAttribute("href", "#${section.id}");
        navBar.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}"
         class="menu__link">${section.dataset.nav}</a></li>`;    
      // console.log(navBar);  
       navBarList.appendChild(navBar);
       // navBarList.insertAdjacentHTML("beforeend", navBar);
    }
}
// Calling the function to build the naigation menu
drawNavBarListItems();

// Adding active state and using getBoundingClientRect() function
window.onscroll = function () {
    sections.forEach(function (active) {
        (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) ?
            active.classList.add("your-active-class") : active.classList.remove("your-active-class")}
    ) 
};

//moving with smooth 
navBarList.addEventListener("click", (move) => {
    move.preventDefault();
    if (move.target.dataset.nav) {
        document.getElementById(`${move.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
            location.hash = `${move.target.dataset.nav}`;
        }, 500
        );
    }
}

);

