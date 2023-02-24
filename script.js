let openMenu = document.getElementById('openMenu');
let blackOverlay = document.querySelector('.overlay');
let featuresMobile = document.getElementById('featuresMobile')
let featuresDesktop = document.getElementById('featuresDesktop')
let companyMobile = document.getElementById('companyMobile')
let companyDesktop = document.getElementById('companyDesktop')
let closeMenu = document.getElementById('closeMenu');
let mobileMenu = document.getElementById('mobileMenu');


openMenu.addEventListener("click", () => {
    mobileMenu.classList.add('showMenu');
    blackOverlay.style.opacity = 1;
    blackOverlay.style.zIndex = 2
})

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove('showMenu');
    blackOverlay.style.opacity = 0;
    blackOverlay.style.zIndex = -1;
})

function addDropdown(element){
    element.addEventListener("click", () => {
        let arrow = element.querySelector('img');
        arrow.classList.toggle('flipArrow')
        let elementName = element.getAttribute('class')
        let dropdown = document.getElementById(`${elementName}`);
        dropdown.classList.toggle('showDropDown')
    })
}

addDropdown(featuresMobile);
addDropdown(companyMobile);
addDropdown(featuresDesktop);
addDropdown(companyDesktop);