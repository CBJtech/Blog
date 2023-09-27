const burger = document.querySelector('.hamburger-label');
const nav = document.querySelector('nav');

burger.onclick = function(){
  
  if (window.getComputedStyle(nav).display === 'none') {
    nav.style.display  = 'block';
  } else {
  nav.style.display = ''
  }
}



 

// Hiding the navbar at a certain height

  

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const heightInRem = 9; // Change this value to adjust when the nav hides
  const heightInPixels = heightInRem * parseFloat(getComputedStyle(document.documentElement).fontSize);

  if (scrollY > heightInPixels) {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

// form
document.querySelector('form').onsubmit = () => {
  return false
}



